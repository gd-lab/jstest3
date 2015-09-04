module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        browserify: {
            main: {
                options: {
                    browserifyOptions: {
                        debug: true
                    }
                },
                src: 'src/main.js',
                dest: 'build/all.js'
            }
        },
        watch: {
            files: ['src/**/*.js'],
            tasks: ['default']
        },
        /*concat: {
         options: {
         separator: ';',
         },
         dist: {
         src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
         dest: 'dist/built.js',
         },
         },*/
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'build/*.js',
                dest: 'build/all.min.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');



    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Default task(s).
    //grunt.registerTask('default', ['uglify']);
    grunt.registerTask('default', ['browserify', 'watch']);
    grunt.registerTask('min', ['browserify', 'uglify', 'watch']);

};
