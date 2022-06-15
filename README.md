## Usage

Browser CDN

```html
<!-- Base64 -->
<script src="https://cdn.jsdelivr.net/npm/min-1px"></script>
<script>
  const img1 = document.createElement('img')
  img1.src = px.GIF
  document.body.appendChild(img1)

  //  PNG
  const img2 = document.createElement('img')
  img2.src = px.png
  document.body.appendChild(img2)
</script>

<!-- Image -->

<img src="https://cdn.jsdelivr.net/npm/min-1px/dist/1px.gif" alt="min-1px GIF" />
<img src="https://cdn.jsdelivr.net/npm/min-1px/dist/1px.png" alt="min-1px PNG" />
```

ESModule Modules

```js
import px from 'min-1px'
import gif from 'min-1px/dist/1px.gif' // image
import png from 'min-1px/dist/1px.png' // image
console.log(px.GIF) // base64
console.log(px.PNG) // base64
```

CommonJS Modules

```js
const px = require('min-1px')
const gif = require('min-1px/dist/1px.gif') // image
const png = require('min-1px/dist/1px.png') // image
console.log(px.GIF) // base64
console.log(px.PNG) // base64
```
