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