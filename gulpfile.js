var gulp        = require('gulp'),
    http        = require('http'),
    connect     = require('connect'),
    serveStatic = require('serve-static'),
    open        = require('open');

gulp.task('play', [], function () {
    var port = 9000;
    var app = connect().use(serveStatic(__dirname+'/'));
    http.createServer(app).listen(port, function () {
        open('http://localhost:' + port);
    });
});
gulp.task('default', ['play']);
