"use strict";
var path = require("path");
var R = require("ramda");
var glob = require("glob");
var Yadda = require("yadda");

//setup paths
var cwd = process.cwd();
var pkg = require(cwd + "/package.json");
var directories = pkg.directories;
var testDir = path.join(cwd, directories.test);
var testLibrariesDir = testDir;
var testFeaturesDir = testDir + path.sep;
var tstGlob = [];

//setup logger
var bunyanFormat = require("bunyan-format");
var logger = require("bunyan").createLogger({"name": "TEST", "stream": bunyanFormat({"outputMode": "short"})});

//get browser test config
var testConfig = R.merge({
  "url": "http://localhost:3000",
  "browsers": []
}, pkg.config.test);
var testUtils = require('./testUtils')(testConfig);
var currentBrowser = testUtils.browsers.length > 0 ? testUtils.browsers[0] : null;

//Setup test 'world' context object including world.logger, and the browser context object
//Note: world.before and world.after are reserved for adding before and after functions
var worldContext = {"world": {"logger": logger}, "browser": {"url": testConfig.url, "env": currentBrowser}};

//execute all unit test feature files
if (directories.hasOwnProperty("testFeatures")) {
  testFeaturesDir = cwd + path.sep + directories.testFeatures + path.sep;
}
if (directories.hasOwnProperty("testLibrary")) {
  testLibrariesDir = path.join(cwd, directories.testLibrary);
}
if (process.env.hasOwnProperty("YADDA_FEATURE_GLOB")) {
  tstGlob = glob.sync(testFeaturesDir + "**/*" + process.env.YADDA_FEATURE_GLOB + "*");
  tstGlob = R.map(function mapTstGlob(dir) {
    return dir.replace(/\//g, "\\");
  }, tstGlob);
}


Yadda.plugins.mocha.StepLevelPlugin.init();

describe('', function testSuite() {
  //beforeAll
  testUtils.beforeAll(before, worldContext, currentBrowser, cwd);

  new Yadda.FeatureFileSearch([testFeaturesDir]).each(function eachFeatureFile(file) {
    //if YADDA_FEATURE_GLOB exists then check if featureFile in YADDA_FEATURE_GLOB
    if (tstGlob.length > 0 && !R.contains(file, tstGlob)) {
      return;
    }

    featureFile(file, function featureFile(feature) {
      var libraries = testUtils.getLibraries(testFeaturesDir, testLibrariesDir, file, feature);
      var loadedLibraries = testUtils.requireLibraries(libraries);
      //initiate yadda and execute each scenario
      var yadda = new Yadda.Yadda(loadedLibraries, worldContext);
      scenarios(feature.scenarios, function scenario(scenarioParam) {
        //before test setup
        testUtils.before(before, worldContext);
        //run steps
        /*eslint max-nested-callbacks:0 */
        steps(scenarioParam.steps, function step(stepParam, done) {
          yadda.yadda(stepParam, done);
        });
        //after test teardown
        testUtils.after(after, worldContext);
      });
    });

    //afterAll
    testUtils.afterAll(after, worldContext, currentBrowser);
  });
});
