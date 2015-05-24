"use strict";
var R = require("ramda");
var fs = require("fs");
var path = require('path');
var childProcess = require('child_process');
var spawn = childProcess.spawn;
var exec = childProcess.exec;
var loopbackServer, beforeAllFlag = false, afterAllFlag = false;

module.exports = function testUtils(opts) {
  var processCoverage = function processCoverage(coverageData) {
    global.__cpmCoverage__ = R.merge(global.__cpmCoverage__, coverageData);
  };
  var _opts = opts;
  return {
    "browsers": _opts.browsers,
    //For white-box browser testing setup Request and Leadfoot Webdriver.js server api
    //The leadfoot and request packages are only required for white-box browser based testing
    "openBrowser": function openBrowser(worldContext, browser, cwd, done) {
      var Server, server, Command, request;
      if (browser && !worldContext.browser.remote) {
        Server = require("leadfoot/Server");
        server = new Server("http://localhost:4444/wd/hub");
        Command = require("leadfoot/Command");
        request = require("request");
        loopbackServer = spawn('node', ['server/server.js'], {
          'cwd': cwd,
          'env': {'path': process.env.path}
        });
        server.createSession(browser)
            .then(function addSessionToWorld(session) {
              worldContext.browser.request = request;
              worldContext.browser.remote = new Command(session);
            })
            .finally(done);
      } else {
        done();
      }
    },
    //get coverage information and teardown Leadfoot Webdriver.js server api
    //The vasync package is only required for white-box browser based testing
    "closeBrowser": function closeBrowser(worldContext, browser, done) {
      var vasync;
      if (browser && worldContext.browser.remote) {
        vasync = require('vasync');
        worldContext.browser.request(_opts.url + '/coverage', function handler(error, response, body) {
          if (!error && response.statusCode === 200) {
            processCoverage(JSON.parse(body.replace(/c:/g, 'C:')));
          }
          vasync.parallel({
            'funcs': [
              function f1(callback) {
                worldContext.browser.remote
                    .execute('return window.__coverage__')
                    .then(processCoverage)
                    .finally(function sessionQuit() {
                      worldContext.browser.remote.quit()
                          .finally(function quit(){
                            callback();
                          });
                    });
              },
              function f2(callback) {
                exec('taskkill /pid ' + loopbackServer.pid + ' /T /F', callback);
              }
            ]
          }, done);
        });
      } else {
        done();
      }
    },
    "beforeAll": function b(beforeAll, worldContext, browser, cwd) {
      if (!beforeAllFlag) {
        beforeAllFlag = true;
        beforeAll(function beforeFn(done) {
          this.openBrowser(worldContext, browser, cwd, done);
        }.bind(this));
      }
    },
    "afterAll": function a(afterAll, worldContext, browser) {
      if (!afterAllFlag) {
        afterAllFlag = true;
        afterAll(function afterFn(done) {
          this.closeBrowser(worldContext, browser, done);
        }.bind(this));
      }
    },
    "before": function b(before, worldContext) {
      before(function beforeFn(done) {
        if (worldContext.world.hasOwnProperty("before")) {
          worldContext.world.before(done);
          delete worldContext.world.before;
        } else {
          done();
        }
      });
    },
    "after": function a(after, worldContext) {
      after(function afterFn(done) {
        if (worldContext.world.hasOwnProperty("after")) {
          worldContext.world.after(done);
          delete worldContext.world.after;
        } else {
          done();
        }
      });
    },
    "requireLibraries": function requireLibraries(librariesArr) {
      return librariesArr.reduce(function requireLibrary(librariesAcc, library) {
        return librariesAcc.concat(require(library));
      }, []);
    },
    "getLibraries": function getLibraries(testFeaturesDir, testLibrariesDir, file, feature) {
      var libraries = [];
      var libraryPath = this.getLibraryRelativePath(testFeaturesDir, testLibrariesDir, file);
      var defaultFeaturePath = this.getDefaultFeaturePath(libraryPath, file);
      //get libraries to load and load
      if (feature.annotations.hasOwnProperty("libraries")) {
        //load any libraries annotated in the feature file
        libraries = R.map(function mapLibraries(value) {
          return path.resolve(libraryPath, value);
        }, feature.annotations.libraries.split(","));
      }
      //add default library
      if (defaultFeaturePath) {
        libraries.push(defaultFeaturePath);
      }
      return libraries;
    },
    "getDefaultFeaturePath": function getDefaultFeaturePath(libraryPath, file) {
      var defaultFeaturePath = path.join(libraryPath, path.basename(file, ".feature") + "-steps.js");
      if (fs.existsSync(defaultFeaturePath)) {
        return defaultFeaturePath;
      }
      return null;
    },
    "getLibraryRelativePath": function getLibraryRelativePath(testFeaturesDir, testLibrariesDir, file) {
      var featureRelativePath = path.relative(testFeaturesDir, path.dirname(file));
      return path.resolve(testLibrariesDir, featureRelativePath);
    }
  };
};
