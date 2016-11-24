// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.longevitybasics.app',
  name: 'Longevity Basics',
  version: "1.0.2",
  description: 'Shortcut to a state of the art longevity strategy!',
  author: 'Mathias Brandt',
  email: 'hello@longevity-basics.com',
  website: 'http://www.longevity-basics.com'
});

App.accessRule('*');

App.icons({
  //ios
  'iphone_2x': '_icons/ios/icons/iphone_2x.png', //(120x120)
  'iphone_3x': '_icons/ios/icons/iphone_3x.png', //(180x180)
  'ipad': '_icons/ios/icons/ipad.png', //(76x76)
  'ipad_2x': '_icons/ios/icons/ipad_2x.png', //(152x152)
  'ipad_pro': '_icons/ios/icons/ipad_pro.png', //(167x167)
  'ios_settings': '_icons/ios/icons/ios_settings.png', //(29x29)
  'ios_settings_2x': '_icons/ios/icons/ios_settings_2x.png', //(58x58)
  'ios_settings_3x': '_icons/ios/icons/ios_settings_3x.png', //(87x87)
  'ios_spotlight': '_icons/ios/icons/ios_spotlight.png', //(40x40)
  'ios_spotlight_2x': '_icons/ios/icons/ios_spotlight_2x.png', //(80x80)
  // ANDROID
  'android_mdpi': '_icons/mipmap-mdpi/ic_launcher.png',
  'android_hdpi': '_icons/mipmap-hdpi/ic_launcher.png',
  'android_xhdpi': '_icons/mipmap-xhdpi/ic_launcher.png',
  'android_xxhdpi': '_icons/mipmap-xxhdpi/ic_launcher.png',
  'android_xxxhdpi': '_icons/mipmap-xxxhdpi/ic_launcher.png',
  // ... more screen sizes and platforms ...
});
App.launchScreens({
  //ios
  'iphone_2x': '_icons/ios/splash/iphone_2x.png', //(640x960)
  'iphone5': '_icons/ios/splash/iphone5.png', //(640x1136)
  'iphone6': '_icons/ios/splash/iphone6.png', //(750x1334)
  'iphone6p_portrait': '_icons/ios/splash/iphone6p_portrait.png', //(1242x2208)
  'iphone6p_landscape': '_icons/ios/splash/iphone6p_landscape.png', //(2208x1242)
  'ipad_portrait': '_icons/ios/splash/ipad_portrait.png', //(768x1024)
  'ipad_portrait_2x': '_icons/ios/splash/ipad_portrait_2x.png', //(1536x2048)
  'ipad_landscape': '_icons/ios/splash/ipad_landscape.png', //(1024x768)
  'ipad_landscape_2x': '_icons/ios/splash/ipad_landscape_2x.png', //(2048x1536)
  // ANDROID
  'android_mdpi_portrait': '_splash/mdpi_portrait.png',
  'android_hdpi_portrait': '_splash/hdpi_portrait.png',
  'android_xhdpi_portrait': '_splash/xhdpi_portrait.png',
  'android_xxhdpi_portrait': '_splash/xxhdpi_portrait.png',

  'android_mdpi_landscape': '_splash/mdpi_landscape.png',
  'android_hdpi_landscape': '_splash/hdpi_landscape.png',
  'android_xhdpi_landscape': '_splash/xhdpi_landscape.png',
  'android_xxhdpi_landscape': '_splash/xxhdpi_landscape.png',

});


// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xffffffff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');
App.setPreference('StatusBarStyle', 'default');
