const { src, dest, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

// Static server
function bs () {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./src"
    }
  });

  watch("./src/*.html").on("change", browserSync.reload);
  watch("./src/scss/**/*.scss", serveSass);
  watch("./src/js/*.js").on("change", browserSync.reload);
}

function minifyCss () {
  return src('./src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(dest('./src/css'));
}

function serveSass () {
  return src("./src/scss/**/*.scss")
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest("./src/css"))
    .pipe(browserSync.stream());
}

exports.serve = bs;