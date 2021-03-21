const { expect } = require('chai')
var strictEqual = require('../strictEqual.js')
const { describe, it } = require('mocha')

describe('strictEqual', () => {
  it('checks strict string type equality', () => {
    var value1 = '5'
    var value2 = '6'
    var result = strictEqual(value1, value2)

    expect(result).to.be.false
  })
  it('checks strict string value equality', () => {
    var value1 = '5'
    var value2 = '5'
    var result = strictEqual(value1, value2)

    expect(result).to.be.true
  })
  it('checks number string value equality', () => {
    var value1 = 5
    var value2 = '5'
    var result = strictEqual(value1, value2)

    expect(result).to.be.false
  })
  it('checks number value equality', () => {
    var value1 = 5
    var value2 = 5
    var result = strictEqual(value1, value2)

    expect(result).to.be.true
  })
  it('checks object and string equality', () => {
    var value1 = {}
    var value2 = '5'
    var result = strictEqual(value1, value2)

    expect(result).to.be.false
  })
  it('checks strict string value equality', () => {
    var value1 = 'a'
    var value2 = 'b'
    var result = strictEqual(value1, value2)

    expect(result).to.be.false
  })
})



