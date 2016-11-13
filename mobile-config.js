// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.longevity-basics.app',
  name: 'Longevity Basics',
  version: "1.0.0",
  description: 'Shortcut to a state of the art longevity strategy!',
  author: 'Mathias Brandt',
  email: 'hello@longevity-basics.com',
  website: 'http://www.longevity-basics.com'
});


App.icons({
  // ANDROID
  'android_mdpi': '_icons/mipmap-mdpi/ic_launcher.png',
  'android_hdpi': '_icons/mipmap-hdpi/ic_launcher.png',
  'android_xhdpi': '_icons/mipmap-xhdpi/ic_launcher.png',
  'android_xxhdpi': '_icons/mipmap-xxhdpi/ic_launcher.png',
  'android_xxxhdpi': '_icons/mipmap-xxxhdpi/ic_launcher.png',
  // ... more screen sizes and platforms ...
});
App.launchScreens({
  // ANDROID
  'android_mdpi_portrait': '_splash/portrait_470.png',
  'android_hdpi_portrait': '_splash/portrait_640.png',
  'android_xhdpi_portrait': '_splash/portrait_960.png',
  'android_xxhdpi_portrait': '_splash/portrait_1920.png',

  'android_mdpi_landscape': '_splash/landscape_470.png',
  'android_hdpi_landscape': '_splash/landscape_640.png',
  'android_xhdpi_landscape': '_splash/landscape_960.png',
  'android_xxhdpi_landscape': '_splash/landscape_1920.png',

});


// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xffffffff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');
