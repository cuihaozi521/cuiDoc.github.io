/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "04ff4a5ccd28c47beb96139912918fd2"
  },
  {
    "url": "accumulate/index.html",
    "revision": "40a3365993f9d0eb4afd666323212b8b"
  },
  {
    "url": "algorithm/index.html",
    "revision": "20012bcb61c5d73df4177e35f2f81f29"
  },
  {
    "url": "assets/css/0.styles.9047b579.css",
    "revision": "e0cf3df08a028ac5a6343d0dcc58705f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.a4cf675e.js",
    "revision": "1c6b048b81dfea0ce9854bdbb68e1bc2"
  },
  {
    "url": "assets/js/3.714ccf8c.js",
    "revision": "25736110cec757dd28c29b723ed9166a"
  },
  {
    "url": "assets/js/4.71260581.js",
    "revision": "7d0e7480b1e7ae957f5638d4f3b98387"
  },
  {
    "url": "assets/js/5.a946abeb.js",
    "revision": "b57887c077b395deb71fbc38f39686c5"
  },
  {
    "url": "assets/js/6.cb61860c.js",
    "revision": "c4976dfa68e416f3e172f5a9bc656cc9"
  },
  {
    "url": "assets/js/7.538ba2ee.js",
    "revision": "a24bf1cc7da5744281675d9d507b6549"
  },
  {
    "url": "assets/js/8.28b627c0.js",
    "revision": "55d7d2e82a5f9dca8ebfced5317bae02"
  },
  {
    "url": "assets/js/app.ec1f26fb.js",
    "revision": "da8d9ae6b481ac327a9a6a8f7eeee47e"
  },
  {
    "url": "guide.html",
    "revision": "f946b8ae35e0fb99b77a687e970d7a11"
  },
  {
    "url": "images/eg1.png",
    "revision": "b6e00451aa6e2fb07803babc3be44fe3"
  },
  {
    "url": "images/eg12.png",
    "revision": "716c3bede731ed6eecb026377f31aac1"
  },
  {
    "url": "images/eg13.png",
    "revision": "022c1e3380b12aa21dd816cd4f1aeaae"
  },
  {
    "url": "images/eg14.png",
    "revision": "c0b03bb9c818398235ae5ac24fe91204"
  },
  {
    "url": "images/eg2.png",
    "revision": "1c31890ab04672b5b9daad1f8216a89b"
  },
  {
    "url": "images/eg3.png",
    "revision": "c3145209954ef832a2c62740a2133a8b"
  },
  {
    "url": "images/eg4.png",
    "revision": "7b4a9dd311c20e60f1f67205845deca1"
  },
  {
    "url": "images/eg5.png",
    "revision": "d70a372965f420d2faaf40259dce9a1c"
  },
  {
    "url": "images/eg6.png",
    "revision": "64c96504fe466f4baa99423a71573892"
  },
  {
    "url": "images/eg7.png",
    "revision": "5814399d3ba9bdcedb588e2b65059e67"
  },
  {
    "url": "images/eg8.png",
    "revision": "cd30b75ad80917829755a2693a374b02"
  },
  {
    "url": "images/photo.jpg",
    "revision": "d4d77052d44bea42bbfc4dba196bde93"
  },
  {
    "url": "index.html",
    "revision": "8df8442bb17713fe068b31833709ba7f"
  },
  {
    "url": "others/index.html",
    "revision": "a54d09d298b19bb47f434c2b9f0d4d18"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
