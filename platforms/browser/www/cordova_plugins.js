cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/plugins/com.bunkerpalace.cordova.YoutubeVideoPlayer/www/YoutubeVideoPlayer.js",
        "id": "com.bunkerpalace.cordova.YoutubeVideoPlayer.YoutubeVideoPlayer",
        "pluginId": "com.bunkerpalace.cordova.YoutubeVideoPlayer",
        "clobbers": [
            "YoutubeVideoPlayer"
        ]
    },
    {
        "file": "plugins/com.santinowu.cordova.imagedownloader/www/imagedownloader.js",
        "id": "com.santinowu.cordova.imagedownloader.imagedownloader",
        "pluginId": "com.santinowu.cordova.imagedownloader",
        "clobbers": [
            "imagedownloader"
        ]
    },
    {
        "file": "plugins/cordova-plugin-admobpro/www/AdMob.js",
        "id": "cordova-plugin-admobpro.AdMob",
        "pluginId": "cordova-plugin-admobpro",
        "clobbers": [
            "window.AdMob"
        ]
    },
    {
        "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
        "id": "cordova-plugin-app-version.AppVersionPlugin",
        "pluginId": "cordova-plugin-app-version",
        "clobbers": [
            "cordova.getAppVersion"
        ]
    },
    {
        "file": "plugins/cordova-plugin-customconfigparameters/www/customconfigparameters.js",
        "id": "cordova-plugin-customconfigparameters.CustomConfigParameters",
        "pluginId": "cordova-plugin-customconfigparameters",
        "clobbers": [
            "CustomConfigParameters"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/network.js",
        "id": "cordova-plugin-network-information.network",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "navigator.connection",
            "navigator.network.connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/www/Connection.js",
        "id": "cordova-plugin-network-information.Connection",
        "pluginId": "cordova-plugin-network-information",
        "clobbers": [
            "Connection"
        ]
    },
    {
        "file": "plugins/cordova-plugin-network-information/src/browser/network.js",
        "id": "cordova-plugin-network-information.NetworkInfoProxy",
        "pluginId": "cordova-plugin-network-information",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-screen-orientation/www/screenorientation.js",
        "id": "cordova-plugin-screen-orientation.screenorientation",
        "pluginId": "cordova-plugin-screen-orientation",
        "clobbers": [
            "cordova.plugins.screenorientation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-shortcuts-android/www/ShortcutsPlugin.js",
        "id": "cordova-plugin-shortcuts-android.ShortcutsPlugin",
        "pluginId": "cordova-plugin-shortcuts-android",
        "clobbers": [
            "Shortcuts"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
        "id": "cordova-plugin-splashscreen.SplashScreen",
        "pluginId": "cordova-plugin-splashscreen",
        "clobbers": [
            "navigator.splashscreen"
        ]
    },
    {
        "file": "plugins/cordova-plugin-splashscreen/src/browser/SplashScreenProxy.js",
        "id": "cordova-plugin-splashscreen.SplashScreenProxy",
        "pluginId": "cordova-plugin-splashscreen",
        "runs": true
    },
    {
        "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
        "id": "cordova-plugin-statusbar.statusbar",
        "pluginId": "cordova-plugin-statusbar",
        "clobbers": [
            "window.StatusBar"
        ]
    },
    {
        "file": "plugins/cordova-plugin-statusbar/src/browser/StatusBarProxy.js",
        "id": "cordova-plugin-statusbar.StatusBarProxy",
        "pluginId": "cordova-plugin-statusbar",
        "runs": true
    },
    {
        "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
        "id": "onesignal-cordova-plugin.OneSignal",
        "pluginId": "onesignal-cordova-plugin",
        "clobbers": [
            "OneSignal"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.bunkerpalace.cordova.YoutubeVideoPlayer": "1.0.5",
    "com.santinowu.cordova.imagedownloader": "1.0.3",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-android-play-services-gradle-release": "4.0.0",
    "cordova-plugin-extension": "1.5.4",
    "cordova-plugin-admobpro": "2.49.0",
    "cordova-plugin-app-version": "0.1.9",
    "cordova-plugin-customconfigparameters": "3.0.0",
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-screen-orientation": "3.0.2",
    "cordova-plugin-shortcuts-android": "0.1.0",
    "cordova-plugin-splashscreen": "5.0.3",
    "cordova-plugin-statusbar": "2.4.3",
    "onesignal-cordova-plugin": "2.6.0"
}
// BOTTOM OF METADATA
});