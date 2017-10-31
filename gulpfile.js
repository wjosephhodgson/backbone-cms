var
	gulp         = require('gulp'),
	plumber      = require('gulp-plumber'),
	sass         = require('gulp-ruby-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss    = require('gulp-minify-css'),
	jshint       = require('gulp-jshint'),
	changed      = require('gulp-changed'),
	compile      = require('gulp-jst'),
	browserSync  = require('browser-sync'),
	header       = require('gulp-header'),
	footer       = require('gulp-footer'),
	reload       = browserSync.reload;

// Compile Sass --> autoprefix --> minify --> trigger reload
gulp.task('build:styles', function() {
	return gulp.src('sass/styles.scss')
		.pipe(plumber())
		.pipe(sass({
			lineNumbers: true,
			compass: true,
			precision: 10,
			style: 'expanded'
		}))
		.pipe(autoprefixer())
		.pipe(gulp.dest('css/'))
		.pipe(reload({stream:true}));
});

// Start browsersync, with a simple server at './'
gulp.task('browsersync', function() {
	browserSync({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('lint', function() {
	return gulp.src('js/**/*.js')
		.pipe(changed('linted'))
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'));
});

// Watch file changes and respond with appropriate task
// Requires browsersync task to be run first
gulp.task('watch', ['browsersync', 'build:styles'], function() {
	// On changes to any sass file, call the build:styles task
	// build:styles task includes a pipe at end to trigger a reload
	gulp.watch('sass/**/*.scss', ['build:styles']);

	// On changes to any Javascript file, lint all Javascript files
	// gulp.watch('js/**/*.js', ['lint']);
	gulp.watch('js/app/**/*.html', ['precompile']);

	// On any changes to html, login, or any file in js/, reload the page
	gulp.watch(['index.html', 'login/**/*', 'lookup/**/*', 'js/**/*', 'mock/**/*'], reload);
});

gulp.task('precompile', function() {
	return gulp.src('js/app/**/*.html')
		.pipe(plumber())
		.pipe(changed('js/app/', {extension: '.js'}))
		.pipe(compile())
		.pipe(header('define(function(){ return '))
		.pipe(footer(';});'))
		.pipe(gulp.dest('js/app/'))
});

gulp.task('default', ['watch']);