"use strict";
/* Feature: Develop clover-style json report with source-map support */
module.exports = (function testSuite() {
  var fs = require("fs");
  var path = require("path");
  var gulp = require("gulp");
  var glob = require("glob");
  var R = require("ramda");
  var English = require("yadda").localisation.English;
  var assert = require("assert");
  var istanbul = require("gulp-istanbul");

  return English.library()
    /*Scenario: Code coverage report with no source maps */
    .define("Given I have non-bundled Javascript files", function test(done) {
      this.world.nonBundledFile1 =
        path.join(__dirname, "../../Test_Resources/resources/non-bundled/non-bundled-file-1");
      this.world.nonBundledFile2 =
        path.join(__dirname, "../../Test_Resources/resources/non-bundled/non-bundled-file-2");
      assert(fs.existsSync(this.world.nonBundledFile1 + ".js"));
      assert(fs.existsSync(this.world.nonBundledFile2 + ".js"));
      done();
    })
    .define("When I run coverage report on the files", function test(done) {
      var logger = this.world.logger;
      var COVERAGE_VARIABLE = "$$1cov_" + new Date().getTime() + "$$";

      gulp.src(["Test_Resources/resources/non-bundled/**/*.js"])
        // Covering files - must wait for finish event before continuing
        .pipe(istanbul({"coverageVariable": COVERAGE_VARIABLE}))
        .pipe(istanbul.hookRequire())
        .on("finish", function onFinish() {
          var scriptPath;
          //require all library scripts to ensure istanbul picks up
          R.forEach(function globCallback(value) {
            scriptPath = path.resolve(process.cwd(), value);
            try {
              require(scriptPath); // Make sure all files are loaded to get accurate coverage data
              //gutil.log("Loaded: " + scriptPath);
            } catch (err) {
              logger.error("Could not load: " + scriptPath);
            }
          }, glob.sync("Test_Resources/resources/non-bundled/**/*.js"));
          gulp.src("Test_Resources/resources/non-bundled/**/*.js")
            .pipe(istanbul.writeReports({
              "coverageVariable": COVERAGE_VARIABLE,
              "reporters": ["html", require("../../lib/clover-limits")],
              "reportOpts": {
                "dir": "Test_Resources/code-coverage/non-bundled",
                "watermarks": {
                  "statements": [50, 80, 10],
                  "lines": [50, 80, 10],
                  "functions": [50, 80, 10],
                  "branches": [60, 80, 10]
                }
              }
            }))
            .on("end", done);
        });
    })
    .define("Then a report is produced referencing the non-bundled files", function test(done) {
      var actual = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../../Test_Resources/code-coverage/non-bundled/clover-tests.json"),
          "UTF-8"));
      var expected = JSON.parse(
        fs.readFileSync(path.join(__dirname, "../../Test_Resources/resources/non-bundled/clover-tests.json"),
          "UTF-8"));

      //assert.equal(actual.failures[0].fullTitle, expected.failures[0].fullTitle);
      assert.equal(actual.failures[0].error, expected.failures[0].error);
      //assert.equal(actual.passes[0].fullTitle, expected.passes[0].fullTitle);
      assert.equal(actual.passes[0].title, expected.passes[0].title);
      done();
    })
    .define("And an xml report is produced referencing the non-bundled files", function test(done) {
      var actual = fs.readFileSync(
        path.join(__dirname, "../../Test_Resources/code-coverage/non-bundled/clover.xml"), "UTF-8");
      var expected = fs.readFileSync(
        path.join(__dirname, "../../Test_Resources/resources/non-bundled/clover.xml"), "UTF-8");

      actual = actual.replace(/timestamp.*\d"/g, "");
      actual = actual.replace(/generated.*\d"/g, "");
      actual = actual.replace(/path.*"/g, "");
      actual = actual.replace(/[\n\r]/g, "");
      expected = expected.replace(/timestamp.*\d"/g, "");
      expected = expected.replace(/generated.*\d"/g, "");
      expected = expected.replace(/path.*"/g, "");
      expected = expected.replace(/[\n\r]/g, "");

      assert.equal(actual, expected);
      done();
    });
})();
