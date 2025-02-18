// gulpプラグインの読み込み
const gulp = require('gulp');

// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-dart-sass')(require('sass'));
const dartSass = require("gulp-dart-sass");//追加
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const ejs = require('gulp-ejs');
const rename = require("gulp-rename");

// scssのコンパイルと書き出しタスクを作成する
gulp.task('sass', function () {
  // style.scssファイルを取得
  return gulp.src(
    ["src/scss/**/*.scss",'!' + "src/scss/**/_*.scss"] //注1
)
    // Sassのコンパイルを実行
    .pipe(dartSass({outputStyle:'expanded'}))
    // ベンダープレフィックスを自動付与する
    .pipe(postcss([autoprefixer()]))
    // cssフォルダー以下に保存
    .pipe(gulp.dest('dest/assets/css/'));
});

// ejsファイルの書き出しタスクを作成する
gulp.task("ejs", function() {
    return gulp.src(
      ["src/ejs/**/*.ejs",'!' + "src/ejs/_components/_*.ejs"] //注1
  )
    .pipe(ejs({}, {}, {ext:'.html'}))
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("dest/html/"));//注2
});

//自動監視のタスクを作成(sass-watchと名付ける)
gulp.task('watch', gulp.series( gulp.parallel('sass','ejs'), function(){
    gulp.watch('src/scss/*.scss',gulp.task('sass'));
    gulp.watch('src/ejs/**/*.ejs',gulp.task('ejs'));
  }));