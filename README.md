# gulp-multi-dest

Multiple destination helpers for [Gulp](https://github.com/gulpjs/gulp)

[![Build Status](https://travis-ci.org/nju33/gulp-multi-dest.svg?branch=master)](https://travis-ci.org/nju33/gulp-multi-dest) [![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo) ![Dependencies Status](https://david-dm.org/nju33/gulp-multi-dest.svg)

## Usage

```js
const gulp = require('gulp');
const multiDest = requrie('@nju33/gulp-multi-dest');

const dest = multiDest(gulp.dest);
gulp.src(pattern).pipe(dest([dest1, dest2, ...]));
// or
gulp.src(pattern).pipe(multiDest(gulp.dest, [dest1, dest2, ...]));
```

## Install

```bash
yarn add -D @nju33/gulp-multi-dest
npm i -D @nju33/gulp-multi-dest
```

## License

The MIT License (MIT)

Copyright (c) 2016 nju33 nju33.ki@gmail.com
