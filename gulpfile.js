const { src, dest, watch, series } = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

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

function buildCss (done) {
  src('./src/css/**/**.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('./dist/css'));
  done();
}

function buildJs(done) {
  src(['./src/js/**.js', '!./src/js/**.min.js'])
    .pipe(minify({ext: {
      min: '.js'
    }
    }))
    .pipe(dest('./dist/js'));
  src('./src/js/**.min.js')
    .pipe(dest('./dist/js'));
  done();
}

function buildHTML(done) {
  src('./src/**.html')
  .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./dist'));
  done();
}

function buildPHP(done) {
  src('./src/**.php')
    .pipe(dest('./dist'));
  src('./src/phpmailer/**/**')
    .pipe(dest('./dist/phpmailer'));
  done();
}

function buildFonts(done) {
  src('./src/fonts/**/**')
    .pipe(dest('./dist/fonts'));
  done();
}

function buildImg(done) {
  src('./src/img/**/**')
    .pipe(tinypng({
      key: 'qSmSjKG5l11YgLCTsNMlsyqFmBr7x81F',
      // sigFile: 'images/.tinypng-sigs',
      // log: true
    }))
    .pipe(dest('./dist/img'));
  src('./src/img/**/*.svg')
    .pipe(dest('./dist/img'));
  done();
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
exports.build = series(buildCss, buildJs, buildHTML, buildPHP, buildFonts);