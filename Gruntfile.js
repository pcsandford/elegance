module.exports = function(grunt) {

 // Project configuration.
 grunt.initConfig({
   pkg: grunt.file.readJSON('package.json'),
   sass: {
   	dist: {
   		files: {
   			'dist/css/styles.css' : 'dev/css/styles.scss'
   		}
   	}
   },
   watch: {
   	css: {
   		files: ['dev/css/*.scss'],
   		tasks: ['sass', 'autoprefixer'],
         options: {
            livereload: true
         }
   	},
      jade: {
         files: ['dev/templates/*.jade'],
         tasks: ['jade'],
         options: {
            livereload: true
         }
      }
   },
   autoprefixer: {
   	options: {
   	  browsers: ['last 5 version', 'ie 7', 'ie 8', 'ie 9']
   	},
   	no_dest: {
   		src: 'dist/css/styles.css'
   	}
   },
   connect: {
   	server: {
   		options: {
   			port: 1111, 
   			base:'dist/'
   		}
   	}
   },
   jade: {
     compile: {
      options: {
         client: false,
         pretty: true,
      },
      files: [{
         cwd: 'dev/templates',
         src:'**/*.jade',
         dest: 'dist/',
         expand: true,
         ext: '.html'
      }]
     }
   },
   smushit: {
    mygroup: {
      src: ['dist/assets/images/*.png','dist/assets/images/*.jpg'],
      dest: 'dist/assets/images'
    }
  }

 });

 grunt.loadNpmTasks('grunt-contrib-sass');
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-autoprefixer');
 grunt.loadNpmTasks('grunt-contrib-connect');
 grunt.loadNpmTasks('grunt-contrib-jade');
 grunt.loadNpmTasks('grunt-smushit');

 // Default task(s).
 grunt.registerTask('default', ['connect', 'smushit', 'watch']);
};