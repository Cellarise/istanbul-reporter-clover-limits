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
{{>main}}
*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.


# License

MIT License (MIT)

Copyright (c) 2014 John Barry