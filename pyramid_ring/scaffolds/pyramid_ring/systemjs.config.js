/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
/**
 * TODO: Update System.js
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': '/ngmodules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            // all paths are relative for different apps.
            homeapp: '/ngapps/home',
            common: '/ngapps/common',
            // angular bundles with aliased path
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:/@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:/@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:/@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:/@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:/@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:/@angular/forms/bundles/forms.umd.js',
            // other libraries
            'rxjs': 'npm:/rxjs',
            'angular-in-memory-web-api': 'npm:/angular-in-memory-web-api'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            homeapp: {
                main: './main.js',
                defaultExtension: 'js'
            },
            common:{
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            },
            'angular-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);
