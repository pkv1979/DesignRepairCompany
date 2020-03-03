const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");

// Static server
gulp.task('browser-sync',() => {
    browserSync.init({
        server: {
          baseDir: "./src"
        }
    });

    gulp.watch("./src/*.html").on("change", reload);
});

gulp.task('minify-css', () => {
  return gulp.src('./src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./src/css'));
});

gulp.task('default', gulp.parallel('minify-css', 'browser-sync'));