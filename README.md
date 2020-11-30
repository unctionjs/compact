# @unction/compact

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> ListType<A | null> | RecordType<unknown, A | null> => Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string

Takes a collection (Array or Object) and returns a copy of that value without `null` or `undefined` values.


``` javascript
avatarUrls // => [null, "/1.jpg", null, "/3.jpg"]
compact(avatarUrls)  // => ["/1.jpg", "/3.jpg"]

user // {"avatar": null, "name": "Kurtis Rainbolt-Greene"}
compact(head(user)) // {"name": "Kurtis Rainbolt-Greene"}
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/compact.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/compact.svg?maxAge=2592000&style=flat-square
