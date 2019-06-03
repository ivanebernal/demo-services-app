# How to run
1. Clone the project: `git clone https://github.com/ivanebernal/demo-services-app.git`
2. Go to the created folder `cd demo-services-app`
3. Run `npm install`

## iOS
1. Go to the ios directory: `cd ios`
2. Run `pod install`
3. Copy `Google-Services.plist` on the `/ios/DemoServicesApp` directory
4. Go to the project root directory and run `react-native run-ios`

## Android
1. Go to the android directory and create a `local.properties` file
2. On that file, add the following:
```
ndk.dir=/Users/{your_user}/Library/Android/sdk/ndk-bundle
sdk.dir=/Users/{your_user}/Library/Android/sdk
```
3. Copy `google-services.json` into `android/app/`
4. Run `export PATH=$PATH:~/Library/Android/sdk/platform-tools/`
5. Run `react-native run-android` from the project root directory
