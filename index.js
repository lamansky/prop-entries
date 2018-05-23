'use strict'

const ownAll = require('own-all')
const ownEntries = require('own-entries')
const sbo = require('sbo')

module.exports = sbo((obj, {own, enumOnly} = {}) => (enumOnly ? Object.entries : ownEntries)(own ? obj : ownAll(obj)))
