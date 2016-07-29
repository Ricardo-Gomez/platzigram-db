'use strict'

const test = require('ava')
const utils = require('../lib/utils')

test('extracting hashtags from text', t => {
  let tags = utils.extractTags('A #picture with tags #awesome #Platzi #AVA #100 ##yes')
  t.deepEqual(tags, [
    'picture',
    'awesome',
    'platzi',
    'ava',
    '100',
    'yes'
  ])

  tags = utils.extractTags('a picture with no tags')
  t.deepEqual(tags, [])

  tags = utils.extractTags(null)
  t.deepEqual(tags, [])
})