module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            styles: {
                files: {
                    "css/nav.css": "less/nav.less"
                }
            }

        },
        watch: {
            scripts: {
                files: ['less/*.less'],
                tasks: ['less'],
                options : {
                    spawn : false
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.registerTask('default', ['less']);
};