'use strict'

const assert = require('assert')
const props = require('.')

describe('propEntries()', function () {
  it('should return an array', function () {
    assert(Array.isArray(props({})))
  })

  it('should iterate an object’s own properties', function () {
    assert(props({key: 'value'}).some(([k, v]) => k === 'key' && v === 'value'))
  })

  it('should iterate an object’s inherited properties', function () {
    assert(props({key: 'value'}).some(([k]) => k === 'toString'))
  })

  it('should exclude inherited properties if `own` is true', function () {
    assert(!props({key: 'value'}, {own: true}).some(([k]) => k === 'toString'))
  })

  it('should include only enumerable properties if `enumOnly` is true', function () {
    const obj = {own: 'value'}
    Object.defineProperty(obj, 'key', {value: 'value', enumerable: false})
    assert(props(obj).some(([k, v]) => k === 'key' && v === 'value'))
    assert(!props(obj, {enumOnly: true}).some(([k]) => k === 'key'))
  })

  it('should support the bind operator', function () {
    assert(props.call({key: 'value'}).some(([k, v]) => k === 'key' && v === 'value'))
  })
})
