module.exports = function(grunt){

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		//grunt tasks configuration
		
		uglify: {
			options: {
				mangle: true,
				separator: ';',
                preserveComments: 'some'
			},
			my_target: {
				files: {
					'dist/randomSentence.min.js' : 'dev/randomSentence.js',
					'dist/sentences.json' : 'dev/sentences.json'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['uglify']);

};