const path = require("path");

var config = {
    // TODO: Add common Configuration
    module: {},
};

var appConfig = Object.assign({}, config, {
    name: "app",
    entry: "./src/js/app.js",
    output: {
        path: path.resolve(__dirname, "public/assets/js"),
        filename: "app.js",
    },
        devtool: "eval-source-map",

});

var serviceWorkerConfig = Object.assign({}, config,{
    name: "serviceWorker",
    entry: "./src/firebase-messaging-sw.js",
    output: {
       path: path.resolve(__dirname, "public"),
       filename: "firebase-messaging-sw.js",
    },
        devtool: "eval-source-map",

});

// Return Array of Configurations
module.exports = [
    appConfig,
    serviceWorkerConfig
];