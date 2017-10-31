// Configure requireJS
require.config({
    // Path to resolve dependencies relative to
    // Ex: ['dependency'] --> 'js/app/dependency.js'
    baseUrl:'js/app',

    // Declare dependencies and their paths relative to baseUrl
    // Ex: ['jquery'] --> 'js/vendor/jquery.js'
    paths:{
        jquery: '../vendor/jquery',
        underscore: '../vendor/underscore',
        backbonebase: '../vendor/backbone',
        backbone:'../vendor/backbone-custom',
        text: '../vendor/text',
        jqueryui: '../vendor/jquery-ui',
        datatables: '../vendor/jquery-datatables',
        dynatables: '../vendor/jquery-dynatable',
        jqueryvalbase: '../vendor/jquery-validate-base',
        jqueryval: '../vendor/jquery-validate',
        jquerymask: '../vendor/jquery-maskedinput',
        hoverintent: '../vendor/jquery-hover-intent',
        tinymce: '../vendor/tinymce/tinymce',
        rivets: '../vendor/rivets',
        sightglass: '../vendor/sightglass',
        deepmodel: '../vendor/deepmodel',
        nestedmodel: '../vendor/nestedmodel',
        deepextend: '../vendor/deep-extend',
        scrollwindowto: '../vendor/scrollwindowto',
        ie8nodeenum: '../vendor/ie8nodeenum',
        nest2: '../vendor/nest2',
        formbuilder: '../vendor/formbuilder',
        spectrum: '../vendor/spectrum'
    },

    // Load dependencies that don't have AMD support
    // These don't have the 'if (typeof define === 'function' && define.amd)'
    shim: {
        // Depends on jQuery to be loaded first (as specified above)
        // Exports a variable called $
        jqueryui: {
            deps: ['jquery'],
            exports: '$'
        },

        formbuilder: {
            deps: ['rivets','deepmodel','scrollwindowto','ie8nodeenum'],
            exports: 'formbuilder'
        },

        spectrum: {
            exports: 'spectrum'
        },

        sightglass: {
            exports: 'sightglass'
        },

        deepmodel: {
            exports: 'deepmodel'
        },

        nestedmodel: {
            exports: 'nestedmodel',
            deps: ['underscore']
        },

        nest2: {
            exports: 'nest2'
        },

        rivets: {
            deps: ['sightglass'],
            exports: 'rivets'
        },

        tinymce: {
            exports: 'tinymce'
        },

        hoverintent: {
            deps: ['jquery'],
            exports: '$'
        }
    },

    // Cache buster
    urlArgs: 'bust=' + new Date().getTime()
});

require([
    'backbone',
    'router',

    // Load AppView and Mappings
    'app-view',
    'link',
    'content/category-sections/category-section-view-map',
    'content/category-sections/more/image-management/views/image-management-view'
], function(Backbone, Router){
    'use strict';

    // Instantiate Backbone router
    Router.get();

    // Call the appropriate code according to the current hash value
    Backbone.history.start();
});