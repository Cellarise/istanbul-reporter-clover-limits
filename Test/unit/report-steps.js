/* jslint node: true */
"use strict";
var fs = require('fs');
var path = require('path');
var gulp = require('gulp');
var tap = require('gulp-tap');
var English = require('yadda').localisation.English;
var istanbul = require('gulp-istanbul-custom-reports');
istanbul.registerReport(require('../../lib/clover-limits'));

/* Feature: Develop clover-style json report with source-map support */
module.exports = (function() {
    return English.library()
    /*Scenario: Code coverage report with no source maps */
        .define("Given I have non-bundled Javascript files", function(done) {
            this.world.non_bundled_file_1 = path.join(__dirname, '../resources/non-bundled/non-bundled-file-1');
            this.world.non_bundled_file_2 = path.join(__dirname, '../resources/non-bundled/non-bundled-file-2');
            this.assert(fs.existsSync(this.world.non_bundled_file_1 + '.js'));
            this.assert(fs.existsSync(this.world.non_bundled_file_2 + '.js'));
            done();
        })
        .define("When I run coverage report on the files", function(done) {

            gulp.src(['Test/resources/non-bundled/**/*.js'], {cwd: process.cwd()})
                .pipe(istanbul()) // Covering files - must wait for finish event before continuing
                .on('finish', function () {
                    gulp.src(['Test/resources/non-bundled/**/*.js'], {cwd: process.cwd()})
                        .pipe(tap(function(f) {
                            require(f.path); // Make sure all files are loaded to get accurate coverage data
                        }))
                        .on('end', function () {
                            gulp.src('Test/resources/non-bundled/**/*.js')
                                .pipe(istanbul.writeReports({
                                    reporters: [ 'html', 'clover-limits'],
                                    reportOpts: {
                                        dir: 'Test/code-coverage/non-bundled',
                                        watermarks: {
                                            statements: [ 50, 80 ],
                                            lines: [ 50, 80 ],
                                            functions: [ 50, 80],
                                            branches: [ 60, 80 ]
                                        }
                                    }
                                }))
                                .on('end', done);
                        });
                });
        })
        .define("Then a report is produced referencing the non-bundled files", function(done) {
            var actual = JSON.parse(fs.readFileSync(path.join(__dirname, '../code-coverage/non-bundled/clover-tests.json'), "UTF-8"));
            var expected = JSON.parse(fs.readFileSync(path.join(__dirname, '../resources/non-bundled/clover-tests.json'), "UTF-8"));
            actual.stats.start = '';
            actual.stats.end = '';
            actual.stats.duration = 1;
            expected.stats.start = '';
            expected.stats.end = '';
            expected.stats.duration = 1;
            this.assert.equal(JSON.stringify(actual, null, 2), JSON.stringify(expected, null, 2));
            done();
        });
})();