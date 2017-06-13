(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            //'npm:': 'node_modules/'
            'scripts:': 'scripts/'
        },

        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': 'app',

            // angular bundles
            '@angular/core': 'scripts:@angular/core/bundles/core.umd.js',
            '@angular/common': 'scripts:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'scripts:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'scripts:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'scripts:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'scripts:@angular/http/bundles/http.umd.js',
            '@angular/router': 'scripts:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'scripts:@angular/forms/bundles/forms.umd.js',

            // other libraries
            'rxjs': 'scripts:rxjs',
            'angular-in-memory-web-api': 'scripts:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
        },

        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                defaultExtension: 'js',
                meta: {
                    './*.js': {
                        loader: 'scripts:systemjs-angular-loader.js'
                    }
                }
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);
