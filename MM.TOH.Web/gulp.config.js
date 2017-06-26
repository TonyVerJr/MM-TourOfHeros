module.exports = function () {

    var base = {
        webroot: "./wwwroot/",
        node_modules: "./node_modules/",
        src: "./src/",
        appSrc: "./src/app/"
    };

    var config = {
        node_modules: base.node_modules,

        // Library sources
        libraries: [
            base.node_modules + "@angular/**/*.js",
            base.node_modules + "angular-in-memory-web-api/**/*.js",
            base.node_modules + "core-js/client/shim*.js",
            base.node_modules + "zone.js/dist/zone*.js",
            base.node_modules + "systemjs/dist/*.js",
            base.node_modules + "rxjs/**/*.js"
        ],

        // App sources
        styles: [
            base.src + "styles.css"
        ],

        appBase: [
            base.src + "main.js",
            base.src + "favicon.ico",
            base.src + "index.html"
        ],

        appFiles: [
            base.appSrc + "**/*.js",
            base.appSrc + "**/*.css",
            base.appSrc + "**/*.html"
        ],

        appScripts: [
            base.src + "systemjs.config.js",
            base.src + "systemjs.config.extras.js",
            base.src + "systemjs-angular-loader.js"
        ],

        // Destinations
        appDestBase: base.webroot,
        appDest: base.webroot + "app/",
        cssDest: base.webroot + "styles/",
        libDest: base.webroot + "scripts/"
    };

    return config;

};