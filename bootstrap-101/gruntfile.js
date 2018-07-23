const sass = require('node-sass');

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        connect: {
            use_defaults: {}
        },
        sass: {
            dev: {
                options: {
                    implementation: sass,
                    sourceMap: true
                },
                files: {
                    'assets/dev/css/style.css': 'assets/dev/scss/style.scss'
                }
            },
            prod: {
                options: {
                    implementation: sass,
                    sourceMap: false,
                    outputStyle: 'compressed'
                },
                files: {
                    'assets/prod/css/style.css': 'assets/dev/scss/style.scss'
                }
            }
        },
        watch: {
            css: {
                files: 'assets/dev/scss/**/*.scss',
                tasks: ['sass:dev'],
                options: {
                    livereload: true
                }
            }
        },
        uglify: {
            my_targets: {
                files: {
                    'assets/prod/js/output.min.js': ['assets/dev/js/**/*.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['connect', 'watch']);
}