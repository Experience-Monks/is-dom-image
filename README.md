# is-dom-image

[![frozen](http://badges.github.io/stability-badges/dist/frozen.svg)](http://github.com/badges/stability-badges)

Returns true if the element is a DOM image, video, canvas, or `ImageData`.

These are the same image types supported by the [WebGL 1.0 Spec](https://www.khronos.org/registry/webgl/specs/1.0/).

Runs in Node and the Browser.

## Example

```js
var isDOMImage = require('is-dom-image')

if (isDOMImage(data)) {
  // got an image
  console.log(data.width, data.height)
}
```

## Install

```sh
npm install is-dom-image --save
```

## Usage

[![NPM](https://nodei.co/npm/is-dom-image.png)](https://www.npmjs.com/package/is-dom-image)

#### `isDOMImage(element)`

Returns true if `element` is an instance of HTMLImageElement, HTMLVideoElement, HTMLCanvasElement or ImageData. Otherwise returns false.

## License

MIT, see [LICENSE.md](http://github.com/Jam3/is-dom-image/blob/master/LICENSE.md) for details.