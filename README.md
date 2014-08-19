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
  - \[watermarks\] `Object` - watermarks for the coverage report and summary coverage test report.
Only the lower limit is used by the summary coverage test report.
Example watermark object:
{
        statements: [ 50, 80 ],
        lines: [ 50, 80 ],
        functions: [ 50, 80],
        branches: [ 50, 80 ]
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