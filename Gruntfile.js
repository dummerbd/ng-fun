module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        bowercopy: {
            options: {
                srcPrefix: 'bower_components'
            },
            scripts: {
                options: {
                    destPrefix: 'src/vendor'
                },
                files: {
                    'angular.js': 'angular/angular.js',
                    'css/bootstrap.css': 'bootstrap/dist/css/bootstrap.css',
                    'css/bootstrap-theme.css': 'bootstrap/dist/css/bootstrap-theme.css',
                    'jquery.js': 'jquery/dist/jquery.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-bowercopy');
};
