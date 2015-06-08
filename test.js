var isDomImage = require('./')
var test = require('tape')

test('test whether an object is a DOM image or canvas', function(t) {
  var e1 = document.createElement('video')
  var e2 = document.createElement('img')
  var e3 = document.createElement('canvas')
  var e4 = e3.getContext('2d').createImageData(512, 512)
  var e5 = new Image()

  t.deepEqual(isDomImage(e1), true, 'video')
  t.deepEqual(isDomImage(e2), true, 'image element')
  t.deepEqual(isDomImage(e5), true, 'image')
  t.deepEqual(isDomImage(e3), true, 'canvas')
  t.deepEqual(isDomImage(e4), true, 'image data')
  t.deepEqual(isDomImage({}), false)
  t.deepEqual(isDomImage(), false)
  t.deepEqual(isDomImage(new Array(5)), false)
  t.end()

  if (window.close)
    window.close()
})