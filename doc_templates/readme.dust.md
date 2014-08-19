# {name}
[![view on npm](http://img.shields.io/npm/v/{name}.svg)](https://www.npmjs.org/package/{name})
[![npm module downloads per month](http://img.shields.io/npm/dm/{name}.svg)](https://www.npmjs.org/package/{name})
[![Dependency Status](https://david-dm.org/Cellarise/{name}.svg)](https://david-dm.org/Cellarise/{name})

> {description}


##Usage 

###Register

Register the report using the istanbul Report factory.

```js
var cloverLimitsReport = require('{name}');
var istanbul = require('istanbul');
istanbul.Report.register(cloverLimitsReport);
```

###Create

Create a report after istanbul has collected coverage information.

```js
var report = require('istanbul').Report.create('clover-limits');
```


# API
{~lb}{~lb}>main{~rb}{~rb}
*documented by [jsdoc-to-markdown](https://github.com/75lb/jsdoc-to-markdown)*.


# License

MIT License (MIT)

Copyright (c) 2014 {author}