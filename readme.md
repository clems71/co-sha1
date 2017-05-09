# co-sha1

## Install

    $ npm install co-sha1

## Doc
- `sha1(string)` : synchronous version, returns an hex string containing the SHA1 sum
- `sha1(Buffer)` : synchronous version, returns an hex string containing the SHA1 sum
- `sha1(ReadableStream)` : asynchronous version, returns a Promise\<string\>, resolved to SHA1 sum once finished

## Usage

```js
const fs = require('fs')
const sha1 = require('co-sha1')

async function test () {
  // Synchronous with strings and Buffers
  console.log(sha1('hello world!'))
  // → 430ce34d020724ed75a196dfc2ad67c77772d169

  console.log(sha1(new Buffer('hello world!')))
  // → 430ce34d020724ed75a196dfc2ad67c77772d169

  // Asynchronous with Streams
  console.log(await sha1(fs.createReadStream('hello.txt')))
  // → 430ce34d020724ed75a196dfc2ad67c77772d169
}

test().catch(console.error);
```
