# istanbul-reporter-clover-limits
[![view on npm](http://img.shields.io/npm/v/istanbul-reporter-clover-limits.svg)](https://www.npmjs.org/package/istanbul-reporter-clover-limits)
[![npm module downloads per month](http://img.shields.io/npm/dm/istanbul-reporter-clover-limits.svg)](https://www.npmjs.org/package/istanbul-reporter-clover-limits)
[![Dependency Status](https://david-dm.org/Cellarise/istanbul-reporter-clover-limits.svg)](https://david-dm.org/Cellarise/istanbul-reporter-clover-limits)

> An istanbul report implementation that produces a clover xml file and summary test coverage json file with configurable watermarks.


##Usage 

###Register

Register the report using the istanbul Report factory.

```js
var cloverLimitsReport = require('istanbul-reporter-clover-limits');
var istanbul = require('istanbul');
istanbul.Report.register(cloverLimitsReport);
```

###Create

Create a report after istanbul has collected coverage information.

```js
var report = require('istanbul').Report.create('clover-limits');
```


# API
<a name="module_istanbul-reporter-clover-limits"></a>
#istanbul-reporter-clover-limits
An istanbul report implementation that produces a clover xml file and summary test coverage json file with configurable watermarks..

**Params**

- opts `Object` - optional  
  - \[dir\] `String` - the directory in which to the clover report will be written  
  - \[file\] `String` - the file name for the coverage report, defaulted to config attribute or 'clover.xml'  
  - \[testDir\] `String` - the directory in which to the summary coverage test report will be written  
  - \[testFile\] `String` - the file name for the summary coverage test report, defaulted to config attribute or 'clover-tests.json'  
  - \[watermarks\] `Object` - watermarks with three limits for the coverage report and summary coverage test report.
1) lower limit for html report and minimum code coverage test
2) mid limit for html report
3) skipped limit for maximum skipped code test
Only the lower limit [index 0] and skipped [index 2] is used by the summary coverage test report.
Example watermark object:
{
        statements: [ 50, 80, 20 ],
        lines: [ 50, 80, 20],
        functions: [ 50, 80, 20],
        branches: [ 50, 80, 20 ]
}  

**Extends**: `istanbul.Report`  
**Type**: `name`  
**Members**

* [istanbul-reporter-clover-limits](#module_istanbul-reporter-clover-limits)
  * [istanbul-reporter-clover-limits~writeFile(file, callback)](#module_istanbul-reporter-clover-limits..writeFile)
  * [istanbul-reporter-clover-limits~copyFile(source, dest)](#module_istanbul-reporter-clover-limits..copyFile)
  * [istanbul-reporter-clover-limits~done()](#module_istanbul-reporter-clover-limits..done)

<a name="module_istanbul-reporter-clover-limits..writeFile"></a>
##istanbul-reporter-clover-limits~writeFile(file, callback)
allows writing content to a file using a callback that is passed a content writer

**Params**

- file  - the name of the file to write  
- callback  - the callback that is called as `callback(contentWriter)`  

**Scope**: inner function of [istanbul-reporter-clover-limits](#module_istanbul-reporter-clover-limits)  
<a name="module_istanbul-reporter-clover-limits..copyFile"></a>
##istanbul-reporter-clover-limits~copyFile(source, dest)
copies a file from source to destination

**Params**

- source  - the file to copy, found on the file system  
- dest  - the destination path  

**Scope**: inner function of [istanbul-reporter-clover-limits](#module_istanbul-reporter-clover-limits)  
<a name="module_istanbul-reporter-clover-limits..done"></a>
##istanbul-reporter-clover-limits~done()
marker method to indicate that the caller is done with this writer object
The writer is expected to emit a `done` event only after this method is called
and it is truly done.

**Scope**: inner function of [istanbul-reporter-clover-limits](#module_istanbul-reporter-clover-limits)  

*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.


# License

MIT License (MIT)

Copyright (c) 2014 John Barry

## Dependencies
[abbrev@1.0.5](&quot;http://github.com/isaacs/abbrev-js&quot;) - &quot;MIT&quot;, [amdefine@0.1.0](&quot;https://github.com/jrburke/amdefine&quot;) - [&quot;BSD&quot;,&quot;MIT&quot;], [ansi-regex@0.2.1](&quot;https://github.com/sindresorhus/ansi-regex&quot;) - &quot;MIT&quot;, [ansi-styles@1.1.0](&quot;https://github.com/sindresorhus/ansi-styles&quot;) - &quot;MIT&quot;, [argparse@0.1.15](&quot;https://github.com/nodeca/argparse&quot;) - &quot;MIT&quot;, [async@0.2.10](&quot;https://github.com/caolan/async&quot;) - [&quot;MIT&quot;], [async@0.9.0](&quot;https://github.com/caolan/async&quot;) - [&quot;MIT&quot;], [chalk@0.5.1](&quot;https://github.com/sindresorhus/chalk&quot;) - &quot;MIT&quot;, [cli-table@0.3.0]([object Object]) - &quot;MIT*&quot;, [clone-stats@0.0.1](&quot;https://github.com/hughsk/clone-stats&quot;) - &quot;MIT&quot;, [colors@0.6.2](&quot;http://github.com/Marak/colors.js&quot;) - , [commander@2.3.0](&quot;https://github.com/visionmedia/commander.js&quot;) - &quot;MIT*&quot;, [core-util-is@1.0.1](&quot;https://github.com/isaacs/core-util-is&quot;) - &quot;MIT&quot;, [dateformat@1.0.8-1.2.3](&quot;https://github.com/felixge/node-dateformat&quot;) - &quot;MIT*&quot;, [duplexer2@0.0.2](&quot;https://github.com/deoxxa/duplexer2&quot;) - &quot;BSD&quot;, [escape-string-regexp@1.0.1](&quot;https://github.com/sindresorhus/escape-string-regexp&quot;) - &quot;MIT&quot;, [escodegen@1.3.3](&quot;http://github.com/Constellation/escodegen&quot;) - [&quot;BSD&quot;], [esprima@1.0.4](&quot;http://github.com/ariya/esprima&quot;) - [&quot;BSD&quot;], [esprima@1.1.1](&quot;http://github.com/ariya/esprima&quot;) - [&quot;BSD&quot;], [esprima@1.2.2](&quot;http://github.com/ariya/esprima&quot;) - [&quot;BSD&quot;], [estraverse@1.5.1](&quot;http://github.com/Constellation/estraverse&quot;) - [&quot;BSD&quot;], [esutils@1.0.0](&quot;http://github.com/Constellation/esutils&quot;) - [&quot;BSD&quot;], [fileset@0.1.5](&quot;https://github.com/mklabs/node-fileset&quot;) - [&quot;MIT&quot;], [glob@3.2.11](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;BSD&quot;, [graceful-fs@2.0.3](&quot;https://github.com/isaacs/node-graceful-fs&quot;) - &quot;BSD&quot;, [gulp-istanbul-custom-reports@0.1.3](&quot;https://github.com/Cellarise/gulp-istanbul-custom-reports&quot;) - &quot;MIT License (MIT)&quot;, [gulp-util@3.0.1](&quot;https://github.com/wearefractal/gulp-util&quot;) - [&quot;MIT&quot;], [handlebars@1.3.0](&quot;https://github.com/wycats/handlebars.js&quot;) - &quot;MIT&quot;, [has-ansi@0.1.0](&quot;https://github.com/sindresorhus/has-ansi&quot;) - &quot;MIT&quot;, [inherits@2.0.1](&quot;https://github.com/isaacs/inherits&quot;) - &quot;ISC&quot;, [isarray@0.0.1](&quot;https://github.com/juliangruber/isarray&quot;) - &quot;MIT&quot;, [istanbul-reporter-clover-limits@0.0.0](&quot;https://github.com/Cellarise/istanbul-reporter-clover-limits&quot;) - &quot;MIT License (MIT)&quot;, [istanbul@0.3.0](&quot;https://github.com/gotwarlost/istanbul&quot;) - &quot;MIT*&quot;, [js-yaml@3.2.1](&quot;https://github.com/nodeca/js-yaml&quot;) - &quot;MIT&quot;, [lodash._escapehtmlchar@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._escapestringchar@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._htmlescapes@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._isnative@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._objecttypes@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._reinterpolate@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._reunescapedhtml@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash._shimkeys@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.defaults@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.escape@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.isobject@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.keys@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.template@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.templatesettings@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash.values@2.4.1](&quot;https://github.com/lodash/lodash-cli&quot;) - &quot;MIT&quot;, [lodash@2.4.1](&quot;https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lru-cache@2.5.0](&quot;https://github.com/isaacs/node-lru-cache&quot;) - &quot;MIT&quot;, [minimatch@0.2.14](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimatch@0.3.0](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimatch@0.4.0](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimist@0.0.8](&quot;https://github.com/substack/minimist&quot;) - &quot;MIT&quot;, [minimist@1.1.0](&quot;https://github.com/substack/minimist&quot;) - &quot;MIT&quot;, [mkdirp@0.5.0](&quot;https://github.com/substack/node-mkdirp&quot;) - &quot;MIT&quot;, [multipipe@0.1.1](&quot;https://github.com/segmentio/multipipe&quot;) - &quot;MIT*&quot;, [nopt@3.0.1](&quot;http://github.com/isaacs/nopt&quot;) - &quot;MIT&quot;, [once@1.3.0](&quot;https://github.com/isaacs/once&quot;) - &quot;BSD&quot;, [optimist@0.3.7](&quot;http://github.com/substack/node-optimist&quot;) - &quot;MIT/X11&quot;, [readable-stream@1.0.31](&quot;https://github.com/isaacs/readable-stream&quot;) - &quot;MIT&quot;, [readable-stream@1.1.13](&quot;https://github.com/isaacs/readable-stream&quot;) - &quot;MIT&quot;, [readdirp@1.1.0](&quot;https://github.com/thlorenz/readdirp&quot;) - &quot;MIT&quot;, [resolve@0.7.4](&quot;https://github.com/substack/node-resolve&quot;) - &quot;MIT&quot;, [sigmund@1.0.0](&quot;https://github.com/isaacs/sigmund&quot;) - &quot;BSD&quot;, [sloc@0.1.5](&quot;https://github.com/flosse/sloc&quot;) - &quot;MIT&quot;, [source-map@0.1.38](&quot;http://github.com/mozilla/source-map&quot;) - [&quot;BSD&quot;], [string_decoder@0.10.31](&quot;https://github.com/rvagg/string_decoder&quot;) - &quot;MIT&quot;, [strip-ansi@0.3.0](&quot;https://github.com/sindresorhus/strip-ansi&quot;) - &quot;MIT&quot;, [supports-color@0.2.0](&quot;https://github.com/sindresorhus/supports-color&quot;) - &quot;MIT&quot;, [through2@0.6.1](&quot;https://github.com/rvagg/through2&quot;) - &quot;MIT&quot;, [uglify-js@2.3.6](&quot;https://github.com/mishoo/UglifyJS2&quot;) - &quot;MIT*&quot;, [underscore.string@2.3.3](&quot;https://github.com/epeli/underscore.string&quot;) - [&quot;MIT&quot;], [underscore@1.4.4](&quot;https://github.com/documentcloud/underscore&quot;) - &quot;MIT*&quot;, [vinyl@0.4.2](&quot;https://github.com/wearefractal/vinyl&quot;) - [&quot;MIT&quot;], [which@1.0.5](&quot;https://github.com/isaacs/node-which&quot;) - &quot;MIT*&quot;, [wordwrap@0.0.2](&quot;https://github.com/substack/node-wordwrap&quot;) - &quot;MIT/X11&quot;, [xtend@4.0.0](&quot;https://github.com/Raynos/xtend&quot;) - [&quot;MIT&quot;], 
*documented by [npm-licenses](http://github.com/AceMetrix/npm-license.git)*.