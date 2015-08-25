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