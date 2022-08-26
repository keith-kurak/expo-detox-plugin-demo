
module.exports = {
  testRunner: "jest",
  runnerConfig: require.resolve("./e2e/config.json",),
  "skipLegacyWorkersInjection": true,
  apps: {
    "ios.release": {
      "binaryPath": "./ios/build/Build/Products/Release-iphonesimulator/expodetoxplugindemo.app",
      "build": "xcodebuild -workspace ios/expodetoxplugindemo.xcworkspace -configuration release -scheme expodetoxplugindemo -sdk iphonesimulator -derivedDataPath ios/build -UseModernBuildSystem=NO",
      "type": "ios.app"
    },
    ios: {
      type: "ios.app",
      binaryPath: "bin/Exponent.app",
    }
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
        avdName: "Pixel_3a_API_30"",
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
