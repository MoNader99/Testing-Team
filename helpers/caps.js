exports.android = {
  browserName: '',
  platformName: 'Android',
  platformVersion: '7',
  deviceName: 'Pixel 2 API 24',
  appActivity: undefined // will be set later
};

exports.options = {
  desiredCapabilities:{
  browserName: '',
  platformName: 'Android',
  platformVersion: '7',
  deviceName: 'Pixel 2 API 24',
  automationName: 'UiAutomator2',
  appPackage: 'com.example.spotify',
  appActivity: 'com.example.spotify.MainActivity'
},
host:'localhost',
port:4723
};
exports.androidHA = {
  browserName: '',
  platformName: 'Android',
  platformVersion: '7',
  deviceName: 'Pixel 2 API 24',
  appActivity: undefined // will be set later
};

exports.androidAS = {
  browserName: '',
  platformName: 'Android',
  platformVersion: '9',
  deviceName: 'Pixel 3a API 28',
  appActivity: undefined // will be set later
};

exports.androidMM = {
  browserName: '',
  platformName: 'Android',
  platformVersion: '6',
  deviceName: 'Galaxy Grand Prime+',
  appActivity: undefined // will be set later
};