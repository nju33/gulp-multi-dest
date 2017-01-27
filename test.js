import test from 'ava';
import gulp from 'gulp';
import del from 'del';
import pathExists from 'path-exists';
import multiDest from '.';

test.afterEach(async () => {
  await del(['./test-output/']);
});

test('gulp multi dest', async t => {
  await new Promise(resolve => {
    gulp.src('./gulp-multi-dest.js')
      .pipe(multiDest(gulp.dest, [
        'test-output/foo',
        'test-output/bar'
      ])())
      .on('end', () => {
        resolve();
      });
  });

  t.true(await pathExists('./test-output/foo/gulp-multi-dest.js'));
  t.true(await pathExists('./test-output/bar/gulp-multi-dest.js'));
  t.false(await pathExists('./test-output/baz/gulp-multi-dest.js'));
});
