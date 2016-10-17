/* global describe it */

'use strict'

const fs = require('fs')

const sha1 = require('..')

describe('sha1 [string]', function () {
  it('returns a valid sha1', function * () {
    const sum = sha1('hello world!')
    sum.should.be.equal('430ce34d020724ed75a196dfc2ad67c77772d169')
  })

  it('works with empty string', function * () {
    const sum = sha1('')
    sum.should.be.equal('da39a3ee5e6b4b0d3255bfef95601890afd80709')
  })
})

describe('sha1 [Buffer]', function () {
  it('returns a valid sha1', function * () {
    const sum = sha1(new Buffer('hello world!', 'utf8'))
    sum.should.be.equal('430ce34d020724ed75a196dfc2ad67c77772d169')
  })
})

describe('sha1 [Stream]', function () {
  it('returns a valid sha1', function * () {
    const sum = yield sha1(fs.createReadStream(`${__dirname}/lorem-ipsum.txt`))
    sum.should.be.equal('4518012e1b365e504001dbc94120624f15b8bbd5')
  })
})
