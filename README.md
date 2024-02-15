<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# floor

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Round each element in a strided array toward negative infinity.

<section class="intro">

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-strided-special-floor@deno/mod.js';
```

#### floor( N, dtypeX, x, strideX, dtypeY, y, strideY )

Rounds each element in a strided array `x` toward negative infinity and assigns the results to elements in a strided array `y`.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ -1.5, 2.3, -3.9, 4.2, -5.0 ] );

// Perform operation in-place:
floor( x.length, 'float64', x, 1, 'float64', x, 1 );
// x => <Float64Array>[ -2.0, 2.0, -4.0, 4.0, -5.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **dtypeX**: [data type][@stdlib/strided/dtypes] for `x`.
-   **x**: input array-like object.
-   **strideX**: index increment for `x`.
-   **dtypeY**: [data type][@stdlib/strided/dtypes] for `y`.
-   **y**: output array-like object.
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to index every other value in `x` and the first `N` elements of `y` in reverse order,

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ -1.5, 2.3, -3.9, 4.2, -5.0, -6.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

floor( 3, 'float64', x, 2, 'float64', y, -1 );
// y => <Float64Array>[ -5.0, -4.0, -2.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

// Initial arrays...
var x0 = new Float64Array( [ -1.5, 2.3, -3.9, 4.2, -5.0, -6.0 ] );
var y0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

floor( 3, 'float64', x1, -2, 'float64', y1, 1 );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, -6.0, 4.0, 2.0 ]
```

#### floor.ndarray( N, dtypeX, x, strideX, offsetX, dtypeY, y, strideY, offsetY )

Rounds each element in a strided array `x` toward negative infinity and assigns the results to elements in a strided array `y` using alternative indexing semantics.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ -1.5, 2.3, -3.9, 4.2, -5.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

floor.ndarray( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 );
// y => <Float64Array>[ -2.0, 2.0, -4.0, 4.0, -5.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';

var x = new Float64Array( [ -1.5, 2.3, -3.9, 4.2, -5.0, -6.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

floor.ndarray( 3, 'float64', x, 2, 1, 'float64', y, -1, y.length-1 );
// y => <Float64Array>[ 0.0, 0.0, 0.0, -6.0, 4.0, 2.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var uniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-uniform' ).factory;
import filledarray from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled@deno/mod.js';
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@deno/mod.js';
import dtypes from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-typed-real-float-dtypes@deno/mod.js';
import floor from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-strided-special-floor@deno/mod.js';

var dt;
var x;
var y;
var i;

dt = dtypes();
for ( i = 0; i < dt.length; i++ ) {
    x = filledarrayBy( 10, dt[ i ], uniform( -100.0, 100.0 ) );
    console.log( x );

    y = filledarray( 0.0, x.length, 'generic' );
    console.log( y );

    floor.ndarray( x.length, dt[ i ], x, 1, 0, 'generic', y, -1, y.length-1 );
    console.log( y );
    console.log( '' );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-strided/special/ceil`][@stdlib/math/strided/special/ceil]</span><span class="delimiter">: </span><span class="description">round each element in a strided array toward positive infinity.</span>
-   <span class="package-name">[`@stdlib/math-strided/special/dfloor`][@stdlib/math/strided/special/dfloor]</span><span class="delimiter">: </span><span class="description">round each element in a double-precision floating-point strided array toward negative infinity.</span>
-   <span class="package-name">[`@stdlib/math-strided/special/trunc`][@stdlib/math/strided/special/trunc]</span><span class="delimiter">: </span><span class="description">round each element in a strided array toward zero.</span>
-   <span class="package-name">[`@stdlib/math-strided/special/sfloor`][@stdlib/math/strided/special/sfloor]</span><span class="delimiter">: </span><span class="description">round each element in a single-precision floating-point strided array toward negative infinity.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-strided-special-floor.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-strided-special-floor

[test-image]: https://github.com/stdlib-js/math-strided-special-floor/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/math-strided-special-floor/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-strided-special-floor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-strided-special-floor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-strided-special-floor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-strided-special-floor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-strided-special-floor/tree/deno
[deno-readme]: https://github.com/stdlib-js/math-strided-special-floor/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/math-strided-special-floor/tree/umd
[umd-readme]: https://github.com/stdlib-js/math-strided-special-floor/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/math-strided-special-floor/tree/esm
[esm-readme]: https://github.com/stdlib-js/math-strided-special-floor/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/math-strided-special-floor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-strided-special-floor/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/strided/dtypes]: https://github.com/stdlib-js/strided-dtypes/tree/deno

<!-- <related-links> -->

[@stdlib/math/strided/special/ceil]: https://github.com/stdlib-js/math-strided-special-ceil/tree/deno

[@stdlib/math/strided/special/dfloor]: https://github.com/stdlib-js/math-strided-special-dfloor/tree/deno

[@stdlib/math/strided/special/trunc]: https://github.com/stdlib-js/math-strided-special-trunc/tree/deno

[@stdlib/math/strided/special/sfloor]: https://github.com/stdlib-js/math-strided-special-sfloor/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
