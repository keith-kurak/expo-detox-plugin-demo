
module.exports = {
  testRunner: "jest",
  runnerConfig: require.resolve("./e2e/config.json",),
  "skipLegacyWorkersInjection": true,
  apps: {
    "ios.release": {
      "binaryPath": "./ios/build/Build/Products/Release-iphonesimulator/expodetoxplugindemo.app",
      "build": "xcodebuild clean build ARCHS=x86_64 ONLY_ACTIVE_ARCH=NO -workspace ios/expodetoxplugindemo.xcworkspace -configuration Release -scheme expodetoxplugindemo -sdk iphonesimulator -derivedDataPath ios/build -UseModernBuildSystem=NO",
      "type": "ios.app"
    },
    "android.release": {
      type: "android.apk",
      binaryPath: "android/app/build/outputs/apk/release/app-release.apk",
      build:
        "pushd android; ./gradlew app:assembleRelease app:assembleAndroidTest -DtestBuildType=release; popd",
    },
  },
  devices: {
    simulator: {
      type: "ios.simulator",
      device: {
        type: "iPhone 11",
      },
    },
    emulator: {
      type: "android.emulator",
      device: {
        avdName: "Pixel_3a_API_30",
      },
    },
  },
  configurations: {
    "ios.sim.release": {
      device: "simulator",
      app: "ios.release",
    },
    "android.emu.release": {
      device: "emulator",
      app: "android.release",
    },
  },
};
