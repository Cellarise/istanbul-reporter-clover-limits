"use strict";

var Report = require("istanbul").Report;

/* istanbul ignore next */
module.exports = {
  "watermarks": function watermarks() {
    return {
      "statements": [50, 80, 20],
      "lines": [50, 80, 20],
      "functions": [50, 80, 20],
      "branches": [50, 80, 20]
    };
  },

  "classFor": function classFor(type, metrics, watermarks) {
    var mark = watermarks[type],
      value = metrics[type].pct;
    if (value >= mark[1]){
      return "high";
    } else if (value >= mark[0]){
      return "medium";
    }
    return "low";
  },

  "colorize": function colorize(str, clazz) {
    /* istanbul ignore if: untestable in batch mode */
    if (process.stdout.isTTY) {
      switch (clazz) {
        case "medium":
          str = "\x1B[93m" + str + "\x1B[0m";
          break;
        case "high":
          str = "\x1B[92m" + str + "\x1B[0m";
          break;
        default:
          str = "\x1B[91m" + str + "\x1B[0m"; //jshint ignore:line
          break;
      }
    }
    return str;
  },

  "defaultReportConfig": function defaultReportConfig() {
    var cfg = {};
    Report.getReportList().forEach(function eachReport(type) {
      var rpt = Report.create(type),
        c = rpt.getDefaultConfig();
      if (c) {
        cfg[type] = c;
      }
    });
    return cfg;
  }
};
