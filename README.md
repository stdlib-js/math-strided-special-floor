<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

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

# floor

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] [![dependencies][dependencies-image]][dependencies-url]

> Round each element in a strided array toward negative infinity.

<section class="intro">

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-strided-special-floor
```

</section>

<section class="usage">

## Usage

```javascript
var floor = require( '@stdlib/math-strided-special-floor' );
```

#### floor( N, x, strideX, y, strideY )

Rounds each element in a strided array `x` toward negative infinity and assigns the results to elements in a strided array `y`.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ -1.5, 2.3, -3.9, 4.2, -5.0 ] );

// Perform operation in-place:
floor( x.length, x, 1, x, 1 );
// x => <Float64Array>[ -2.0, 2.0, -4.0, 4.0, -5.0 ]
```

The function accepts the following arguments:

-   **N**: number of indexed elements.
-   **x**: input array-like object.
-   **strideX**: index increment for `x`.
-   **y**: output array-like object.
-   **strideY**: index increment for `y`.

The `N` and `stride` parameters determine which elements in `x` and `y` are accessed at runtime. For example, to index every other value in `x` and the first `N` elements of `y` in reverse order,

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ -1.5, 2.3, -3.9, 4.2, -5.0, -6.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

floor( 3, x, 2, y, -1 );
// y => <Float64Array>[ -5.0, -4.0, -2.0, 0.0, 0.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial arrays...
var x0 = new Float64Array( [ -1.5, 2.3, -3.9, 4.2, -5.0, -6.0 ] );
var y0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*3 ); // start at 4th element

floor( 3, x1, -2, y1, 1 );
// y0 => <Float64Array>[ 0.0, 0.0, 0.0, -6.0, 4.0, 2.0 ]
```

#### floor.ndarray( N, x, strideX, offsetX, y, strideY, offsetY )

Rounds each element in a strided array `x` toward negative infinity and assigns the results to elements in a strided array `y` using alternative indexing semantics.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ -1.5, 2.3, -3.9, 4.2, -5.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );

floor.ndarray( x.length, x, 1, 0, y, 1, 0 );
// y => <Float64Array>[ -2.0, 2.0, -4.0, 4.0, -5.0 ]
```

The function accepts the following additional arguments:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying `buffer`, the `offsetX` and `offsetY` parameters support indexing semantics based on starting indices. For example, to index every other value in `x` starting from the second value and to index the last `N` elements in `y`,

```javascript
var Float64Array = require( '@stdlib/array-float64' );

var x = new Float64Array( [ -1.5, 2.3, -3.9, 4.2, -5.0, -6.0 ] );
var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

floor.ndarray( 3, x, 2, 1, y, -1, y.length-1 );
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
var uniform = require( '@stdlib/random-base-uniform' ).factory;
var filledarray = require( '@stdlib/array-filled' );
var dtypes = require( '@stdlib/array-dtypes' );
var gfillBy = require( '@stdlib/blas-ext-base-gfill-by' );
var floor = require( '@stdlib/math-strided-special-floor' );

var dt;
var x;
var y;
var i;

dt = dtypes();
for ( i = 0; i < dt.length; i++ ) {
    x = filledarray( 0.0, 10, dt[ i ] );
    gfillBy( x.length, x, 1, uniform( -100.0, 100.0 ) );
    console.log( x );

    y = filledarray( 0.0, x.length, 'generic' );
    console.log( y );

    floor.ndarray( x.length, x, 1, 0, y, -1, y.length-1 );
    console.log( y );
    console.log( '' );
}
```

</section>

<!-- /.examples -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-strided-special-floor.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-strided-special-floor

[test-image]: https://github.com/stdlib-js/math-strided-special-floor/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/math-strided-special-floor/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-strided-special-floor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-strided-special-floor?branch=main

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-strided-special-floor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-strided-special-floor/main

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-strided-special-floor/main/LICENSE

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
