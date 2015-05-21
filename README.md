# istanbul-reporter-clover-limits
[![view on npm](http://img.shields.io/npm/v/istanbul-reporter-clover-limits.svg?style=flat)](https://www.npmjs.org/package/istanbul-reporter-clover-limits)
[![npm module downloads per month](http://img.shields.io/npm/dm/istanbul-reporter-clover-limits.svg?style=flat)](https://www.npmjs.org/package/istanbul-reporter-clover-limits)
[![Dependency status](https://david-dm.org/Cellarise/istanbul-reporter-clover-limits.svg?style=flat)](https://david-dm.org/Cellarise/istanbul-reporter-clover-limits)
[![Coverage](https://img.shields.io/badge/coverage-92%25_skipped:19%25-green.svg?style=flat)](https://www.npmjs.org/package/istanbul-reporter-clover-limits)

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


## API
<a name="module_istanbul-reporter-clover-limits"></a>
### istanbul-reporter-clover-limits : <code>name</code>
An istanbul report implementation that produces a clover xml file and summary test coverage json file with configurable watermarks..

**Extends:** <code>istanbul.Report</code>  

| Param | Type | Description |
| --- | --- | --- |
| opts | <code>Object</code> | optional |
| [opts.dir] | <code>String</code> | the directory in which to the clover report will be written |
| [opts.file] | <code>String</code> | the file name for the coverage report, defaulted to config attribute or "clover.xml" |
| [opts.testDir] | <code>String</code> | the directory in which to the summary coverage test report will be written |
| [opts.testFile] | <code>String</code> | the file name for the summary coverage test report, defaulted to config attribute or "clover-tests.json" |
| [opts.watermarks] | <code>Object</code> | watermarks with three limits for the coverage report and summary coverage test report. 1) lower limit for html report and minimum code coverage test 2) mid limit for html report 3) skipped limit for maximum skipped code test Only the lower limit [index 0] and skipped [index 2] is used by the summary coverage test report. Example watermark object: {  statements: [ 50, 80, 20 ],  lines: [ 50, 80, 20],  functions: [ 50, 80, 20],  branches: [ 50, 80, 20 ] } |


* [istanbul-reporter-clover-limits](#module_istanbul-reporter-clover-limits) : <code>name</code>
  * [`~writeFile(file, callback)`](#module_istanbul-reporter-clover-limits..writeFile)
  * [`~copyFile(source, dest)`](#module_istanbul-reporter-clover-limits..copyFile)
  * [`~done()`](#module_istanbul-reporter-clover-limits..done)


-

<a name="module_istanbul-reporter-clover-limits..writeFile"></a>
#### `istanbul-reporter-clover-limits~writeFile(file, callback)`
allows writing content to a file using a callback that is passed a content writer

**Kind**: inner method of <code>[istanbul-reporter-clover-limits](#module_istanbul-reporter-clover-limits)</code>  

| Param | Description |
| --- | --- |
| file | the name of the file to write |
| callback | the callback that is called as `callback(contentWriter)` |


-

<a name="module_istanbul-reporter-clover-limits..copyFile"></a>
#### `istanbul-reporter-clover-limits~copyFile(source, dest)`
copies a file from source to destination

**Kind**: inner method of <code>[istanbul-reporter-clover-limits](#module_istanbul-reporter-clover-limits)</code>  

| Param | Description |
| --- | --- |
| source | the file to copy, found on the file system |
| dest | the destination path |


-

<a name="module_istanbul-reporter-clover-limits..done"></a>
#### `istanbul-reporter-clover-limits~done()`
marker method to indicate that the caller is done with this writer object
The writer is expected to emit a `done` event only after this method is called
and it is truly done.

**Kind**: inner method of <code>[istanbul-reporter-clover-limits](#module_istanbul-reporter-clover-limits)</code>  

-

*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.


#Changelog

<table style="width:100%;border-spacing:0px;border-collapse:collapse;margin:0px;padding:0px;border-width:0px;">
  <tr>
    <th style="width:20px;text-align:center;"></th>
    <th style="width:80px;text-align:center;">Type</th>
    <th style="width:80px;text-align:left;">ID</th>
    <th style="text-align:left;">Summary</th>
  </tr>
    
<tr>
        <td colspan=4><strong>Version: 0.1.6 - released 2015-05-21</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-15</td>
            <td>Package: Update jsdoc2markdown and regenerate documentation</td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-16</td>
            <td>Package: Update dependencies</td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-14</td>
            <td>Package: Update eslint configuration, test.js runner and dev dependencies</td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-13</td>
            <td>Package: Update eslint configuration, test.js runner and dev dependencies</td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-10</td>
            <td>Package: Migrate from jshint to eslint static code analysis</td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-9</td>
            <td>Package: Remove all gulp tasks except &#39;test&#39; and update readme docs</td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.5 - released 2014-09-02</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">MDCOVSM-8</td>
            <td>Clover-limits: Fix pending statistic output from &#39;5&#39; to &#39;0&#39;.</td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.4 - released 2014-09-01</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10411&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Feature</td>
            <td style="width:80px;text-align:left;">MDCOVSM-6</td>
            <td>Clover-limits: Add skipped code coverage limits and tests to report.</td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.3 - released 2014-09-01</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">MDCOVSM-7</td>
            <td>Clover-limits: Fix NaN error in lines of code report output.</td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.2 - released 2014-08-21</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-5</td>
            <td>Package: Update dependencies.</td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.1 - released 2014-08-20</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">MDCOVSM-4</td>
            <td>Package: Fix path to main script in package.json.</td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.0 - released 2014-08-20</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10411&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Feature</td>
            <td style="width:80px;text-align:left;">MDCOVSM-3</td>
            <td>Package: Develop clover-style json report with configurable limits for istanbul.</td>
          </tr>
        
    
</table>



# License

MIT License (MIT). All rights not explicitly granted in the license are reserved.

Copyright (c) 2015 John Barry
## Dependencies
[abbrev@1.0.6](&quot;git+ssh://git@github.com/isaacs/abbrev-js&quot;) - &quot;ISC&quot;, [amdefine@0.1.0](&quot;https://github.com/jrburke/amdefine&quot;) - [&quot;BSD&quot;,&quot;MIT&quot;], [argparse@1.0.2](&quot;https://github.com/nodeca/argparse&quot;) - &quot;MIT&quot;, [async@0.2.10](&quot;https://github.com/caolan/async&quot;) - [&quot;MIT&quot;], [async@1.0.0](&quot;git+https://github.com/caolan/async&quot;) - &quot;MIT&quot;, [cli-table@0.3.1](&quot;https://github.com/Automattic/cli-table&quot;) - &quot;MIT*&quot;, [colors@1.0.3](&quot;http://github.com/Marak/colors.js&quot;) - &quot;MIT&quot;, [commander@2.5.1](&quot;https://github.com/tj/commander.js&quot;) - &quot;MIT&quot;, [core-util-is@1.0.1](&quot;https://github.com/isaacs/core-util-is&quot;) - &quot;MIT&quot;, [deep-is@0.1.3](&quot;http://github.com/thlorenz/deep-is&quot;) - &quot;MIT&quot;, [escodegen@1.6.1](&quot;http://github.com/estools/escodegen&quot;) - [&quot;BSD&quot;], [esprima@1.2.5](&quot;http://github.com/ariya/esprima&quot;) - [&quot;BSD&quot;], [esprima@2.1.0](&quot;https://github.com/jquery/esprima&quot;) - [&quot;BSD&quot;], [esprima@2.2.0](&quot;https://github.com/jquery/esprima&quot;) - [&quot;BSD&quot;], [estraverse@1.9.3](&quot;http://github.com/estools/estraverse&quot;) - [&quot;BSD&quot;], [esutils@1.1.6](&quot;http://github.com/Constellation/esutils&quot;) - [&quot;BSD&quot;], [fast-levenshtein@1.0.6](&quot;https://github.com/hiddentao/fast-levenshtein&quot;) - &quot;MIT&quot;, [fileset@0.1.5](&quot;https://github.com/mklabs/node-fileset&quot;) - [&quot;MIT&quot;], [glob@3.2.11](&quot;https://github.com/isaacs/node-glob&quot;) - &quot;BSD&quot;, [graceful-fs@2.0.3](&quot;https://github.com/isaacs/node-graceful-fs&quot;) - &quot;BSD&quot;, [handlebars@3.0.0](&quot;https://github.com/wycats/handlebars.js&quot;) - &quot;MIT&quot;, [inherits@2.0.1](&quot;https://github.com/isaacs/inherits&quot;) - &quot;ISC&quot;, [isarray@0.0.1](&quot;https://github.com/juliangruber/isarray&quot;) - &quot;MIT&quot;, [istanbul-reporter-clover-limits@0.0.0](&quot;https://github.com/Cellarise/istanbul-reporter-clover-limits&quot;) - &quot;MIT License (MIT)&quot;, [istanbul@0.3.14](&quot;https://github.com/gotwarlost/istanbul&quot;) - &quot;BSD-3-Clause&quot;, [js-yaml@3.3.1](&quot;https://github.com/nodeca/js-yaml&quot;) - &quot;MIT&quot;, [levn@0.2.5](&quot;https://github.com/gkz/levn&quot;) - [&quot;MIT&quot;], [lodash@3.9.1](&quot;git+https://github.com/lodash/lodash&quot;) - &quot;MIT&quot;, [lru-cache@2.5.0](&quot;https://github.com/isaacs/node-lru-cache&quot;) - &quot;MIT&quot;, [minimatch@0.2.14](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimatch@0.3.0](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimatch@0.4.0](&quot;https://github.com/isaacs/minimatch&quot;) - &quot;MIT&quot;, [minimist@0.0.10](&quot;https://github.com/substack/minimist&quot;) - &quot;MIT&quot;, [minimist@0.0.8](&quot;https://github.com/substack/minimist&quot;) - &quot;MIT&quot;, [mkdirp@0.5.1](&quot;git+https://github.com/substack/node-mkdirp&quot;) - &quot;MIT&quot;, [nopt@3.0.2](&quot;git+ssh://git@github.com/isaacs/nopt&quot;) - &quot;ISC&quot;, [once@1.3.2](&quot;https://github.com/isaacs/once&quot;) - &quot;ISC&quot;, [optimist@0.3.7](&quot;http://github.com/substack/node-optimist&quot;) - &quot;MIT/X11&quot;, [optimist@0.6.1](&quot;http://github.com/substack/node-optimist&quot;) - &quot;MIT/X11&quot;, [optionator@0.5.0](&quot;https://github.com/gkz/optionator&quot;) - [&quot;MIT&quot;], [prelude-ls@1.1.2](&quot;https://github.com/gkz/prelude-ls&quot;) - [&quot;MIT&quot;], [readable-stream@1.0.33](&quot;https://github.com/isaacs/readable-stream&quot;) - &quot;MIT&quot;, [readdirp@1.3.0](&quot;https://github.com/thlorenz/readdirp&quot;) - &quot;MIT&quot;, [resolve@1.1.6](&quot;https://github.com/substack/node-resolve&quot;) - &quot;MIT&quot;, [sigmund@1.0.0](&quot;https://github.com/isaacs/sigmund&quot;) - &quot;BSD&quot;, [sloc@0.1.9](&quot;https://github.com/flosse/sloc&quot;) - &quot;MIT&quot;, [source-map@0.1.43](&quot;http://github.com/mozilla/source-map&quot;) - [&quot;BSD&quot;], [sprintf-js@1.0.2](&quot;https://github.com/alexei/sprintf.js&quot;) - &quot;BSD-3-Clause&quot;, [string_decoder@0.10.31](&quot;https://github.com/rvagg/string_decoder&quot;) - &quot;MIT&quot;, [supports-color@1.3.1](&quot;https://github.com/sindresorhus/supports-color&quot;) - &quot;MIT&quot;, [type-check@0.3.1](&quot;https://github.com/gkz/type-check&quot;) - [&quot;MIT&quot;], [uglify-js@2.3.6](&quot;https://github.com/mishoo/UglifyJS2&quot;) - &quot;MIT*&quot;, [which@1.0.9](&quot;https://github.com/isaacs/node-which&quot;) - &quot;ISC&quot;, [wordwrap@0.0.3](&quot;https://github.com/substack/node-wordwrap&quot;) - &quot;MIT&quot;, [wrappy@1.0.1](&quot;https://github.com/npm/wrappy&quot;) - &quot;ISC&quot;, 
*documented by [npm-licenses](http://github.com/AceMetrix/npm-license.git)*.