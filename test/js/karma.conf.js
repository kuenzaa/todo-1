module.exports = function (config) {
    config.set({
        basePath: "../..",
        browsers: ['PhantomJS'],
        frameworks: ['jasmine'],
        files: [
            'public/javascripts/lib/jquery/jquery.min.js',
            'public/javascripts/lib/lodash/dist/lodash.min.js',
            'public/javascripts/lib/angular/angular.min.js',
            'test/js/lib/**/*.js',
            'public/javascripts/lib/*.js',
            'public/javascripts/todolist/**/*.js',
            'test/js/tests/**/*.js'
        ]
    });
};