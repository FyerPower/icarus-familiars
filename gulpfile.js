var gulp        = require('gulp'),
    http        = require('http'),
    connect     = require('connect'),
    serveStatic = require('serve-static'),
    livereload  = require('gulp-livereload'),
    open        = require('open');



gulp.task('refreshJS', function() {
    return gulp.src("js/**/*.js").pipe(livereload());
});

gulp.task('refreshCSS', function() {
    return gulp.src("css/**/*.css").pipe(livereload());
});

gulp.task('play', [], function () {
    livereload.listen();
    gulp.watch('js/**/*.js', ['refreshJS']);
    gulp.watch('css/**/*.css', ['refreshCSS']);

    var port = 9000;
    var app = connect().use(serveStatic(__dirname+'/'));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});
gulp.task('default', ['play']);
