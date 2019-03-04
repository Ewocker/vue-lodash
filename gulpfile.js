const gulp = require('gulp')
const babel = require('gulp-babel')
const uglify = require('gulp-uglifyjs')
const rename = require('gulp-rename')

gulp.task('default', () => {
  return gulp.src('src/index.mjs')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(rename('vue-lodash.es5.js'))
    .pipe(gulp.dest('dist'))
    .pipe(uglify())
    .pipe(rename('vue-lodash.min.js'))
    .pipe(gulp.dest('dist'))
})