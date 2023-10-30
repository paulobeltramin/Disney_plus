const gulp = require ("gulp");
const sass = require ("gulp-sass")(require("sass"));
const image = require ("gulp-imagemin");
const html = require ("gulp-htmlmin");

function styles () {
    return gulp.src("src/styles/*scss")
    .pipe(sass({outputStyle:"compressed"}))
    .pipe(gulp.dest("dist/css"))
  }

  function images () {
    return gulp.src("./src/images/**/*")
    .pipe(image())
    .pipe(gulp.dest("./dist/images"))
  }










exports.default = gulp.parallel(styles ,images)


exports.watch = function () { 
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles))
 }