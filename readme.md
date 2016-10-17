# co-sha1

## Install

    $ npm install co-sha1

## Usage

```js
const fs = require('fs')
const sha1 = require('co-sha1')

// Synchronous with strings and Buffers
console.log(sha1('hello world!'))
// → 430ce34d020724ed75a196dfc2ad67c77772d169

console.log(sha1(new Buffer('hello world!')))
// → 430ce34d020724ed75a196dfc2ad67c77772d169

// Asynchronous with Streams
console.log(yield sha1(fs.createReadStream('hello.txt')))
// → 430ce34d020724ed75a196dfc2ad67c77772d169
```
