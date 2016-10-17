'use strict'

const crypto = require('crypto')
const fs = require('fs')

// x can be:
// - a buffer : result is sync, an hex string
// - a string : result is sync, an hex string
// - a readable stream : result is async, a Promise with an hex string
function sha1 (x, algorithm) {
  let hash = crypto.createHash(algorithm || 'sha1')

  if (typeof x === 'string' || Buffer.isBuffer(x)) {
    hash.update(x)
    return hash.digest('hex')
  } else if (x instanceof fs.ReadStream) {
    return new Promise((resolve, reject) => {
      x.pipe(hash)
      hash.on('data', (sum) => resolve(sum.toString('hex')))
    })
  }
}

module.exports = sha1
