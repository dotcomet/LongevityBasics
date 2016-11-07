// This section sets up some basic app metadata,
// the entire section is optional.
App.info({
  id: 'com.longevity.app',
  name: 'Longevity Basics',
  version: "1.0.0",
  description: 'Shortcut to a state of the art longevity strategy!',
  author: 'Mathias Brandt',
  email: 'hello@longevity-basics.com',
  website: 'http://www.longevity-basics.com'
});

// Set PhoneGap/Cordova preferences
App.setPreference('BackgroundColor', '0xffffffff');
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('Orientation', 'all', 'ios');
