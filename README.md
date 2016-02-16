# istanbul-reporter-clover-limits
[![view on npm](http://img.shields.io/npm/v/istanbul-reporter-clover-limits.svg?style=flat)](https://www.npmjs.org/package/istanbul-reporter-clover-limits)
[![npm module downloads per month](http://img.shields.io/npm/dm/istanbul-reporter-clover-limits.svg?style=flat)](https://www.npmjs.org/package/istanbul-reporter-clover-limits)
[![Dependency status](https://david-dm.org/Cellarise/istanbul-reporter-clover-limits.svg?style=flat)](https://david-dm.org/Cellarise/istanbul-reporter-clover-limits)
[![Build Status](https://travis-ci.org/Cellarise/istanbul-reporter-clover-limits.svg?branch=master)](https://travis-ci.org/Cellarise/istanbul-reporter-clover-limits)
[![Code
Climate](https://codeclimate.com/github/Cellarise/istanbul-reporter-clover-limits/badges/gpa.svg)](https://codeclimate.com/github/Cellarise/istanbul-reporter-clover-limits)
[![Test Coverage](https://codeclimate.com/github/Cellarise/istanbul-reporter-clover-limits/badges/coverage.svg)](https://codeclimate.com/github/Cellarise/istanbul-reporter-clover-limits/badges/coverage.svg)

> An istanbul report implementation that produces a clover xml file and summary test coverage json file with configurable watermarks.


## Usage

### Register

Register the report using the istanbul Report factory.

```js
var cloverLimitsReport = require('istanbul-reporter-clover-limits');
var istanbul = require('istanbul');
istanbul.Report.register(cloverLimitsReport);
```

### Create

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


# Changelog

<table style="width:100%;border-spacing:0px;border-collapse:collapse;margin:0px;padding:0px;border-width:0px;">
  <tr>
    <th style="width:20px;text-align:center;"></th>
    <th style="width:80px;text-align:center;">Type</th>
    <th style="width:80px;text-align:left;">ID</th>
    <th style="text-align:left;">Summary</th>
  </tr>
    
<tr>
        <td colspan=4><strong>Version: 0.1.11 - released 2016-02-16</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-21</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.10 - released 2015-11-27</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-20</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.9 - released 2015-11-13</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-19</td>
            <td><p>Package: Update package dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.8 - released 2015-08-25</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-18</td>
            <td><p>Package: Update development dependencies and configure for travis-ci</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.7 - released 2015-05-24</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-17</td>
            <td><p>Package: Update development dependencies</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.6 - released 2015-05-21</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-15</td>
            <td><p>Package: Update jsdoc2markdown and regenerate documentation</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-16</td>
            <td><p>Package: Update dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-14</td>
            <td><p>Package: Update eslint configuration, test.js runner and dev dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-13</td>
            <td><p>Package: Update eslint configuration, test.js runner and dev dependencies</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-10</td>
            <td><p>Package: Migrate from jshint to eslint static code analysis</p><p></p></td>
          </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-9</td>
            <td><p>Package: Remove all gulp tasks except &#39;test&#39; and update readme docs</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.5 - released 2014-09-02</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">MDCOVSM-8</td>
            <td><p>Clover-limits: Fix pending statistic output from &#39;5&#39; to &#39;0&#39;.</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.4 - released 2014-09-01</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10411&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Feature</td>
            <td style="width:80px;text-align:left;">MDCOVSM-6</td>
            <td><p>Clover-limits: Add skipped code coverage limits and tests to report.</p><p>As a developer
I can get clover-style json summary report for Atlassian Bamboo Test Mocha Parser with configurable limits including skipped code using Istanbul ignore directives
So that I can get more efficient and accurate code coverage reporting</p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.3 - released 2014-09-01</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">MDCOVSM-7</td>
            <td><p>Clover-limits: Fix NaN error in lines of code report output.</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.2 - released 2014-08-21</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10419&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Non-functional</td>
            <td style="width:80px;text-align:left;">MDCOVSM-5</td>
            <td><p>Package: Update dependencies.</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.1 - released 2014-08-20</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10403&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Bug</td>
            <td style="width:80px;text-align:left;">MDCOVSM-4</td>
            <td><p>Package: Fix path to main script in package.json.</p><p></p></td>
          </tr>
        
    
<tr>
        <td colspan=4><strong>Version: 0.1.0 - released 2014-08-20</strong></td>
      </tr>
        
<tr>
            <td style="width:20px;padding:0;margin:0;text-align:center;"><img src="https://jira.cellarise.com:80/secure/viewavatar?size=xsmall&amp;avatarId=10411&amp;avatarType=issuetype"/></td>
            <td style="width:80px;text-align:left;">Feature</td>
            <td style="width:80px;text-align:left;">MDCOVSM-3</td>
            <td><p>Package: Develop clover-style json report with configurable limits for istanbul.</p><p>As a developer
I can get clover-style json summary report for Atlassian Bamboo Test Mocha Parser with configurable limits including skipped code using Istanbul ignore directives
So that I can get more efficient and accurate code coverage reporting</p></td>
          </tr>
        
    
</table>



# License

MIT License (MIT). All rights not explicitly granted in the license are reserved.

Copyright (c) 2015 John Barry
## Dependencies
[istanbul-reporter-clover-limits@0.1.10](&quot;https://github.com/Cellarise/istanbul-reporter-clover-limits&quot;) - &quot;MIT License (MIT)&quot;, 
*documented by [npm-licenses](http://github.com/AceMetrix/npm-license.git)*.

