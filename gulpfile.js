var gulp = require("gulp");
var livereload = require("gulp-livereload");
var sass = require("gulp-sass");
gulp.task("sass", function() {
  return gulp.src("src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src"))
});

gulp.task("watch", function() {
    livereload.listen();
    gulp.watch(['src/components/**/*.scss'], gulp.series('sass')) ;
})