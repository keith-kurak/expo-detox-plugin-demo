# Expo-Prebuild Friendly Detox Demo
Expo managed workflow project running Detox tests on Github Actions on the iPhone simulator

## Prerequisites (for running locally)
- Detox CLI is installed (`npm install -g detox-cli`)
- Apple Simutils is installed (`brew tap wix/brew; brew install applesimutils`)

## "Inline-build" version
This version runs the build on whatever hardware is also running the tests. This has the advantage of being able to run the tests immediately after the build is completed; however, the build is likely to be slow on CI, and extra configuration of native build tools may be needed in some environments.

### How to run locally
1. Run `yarn`
2. Run `npx expo prebuild`
2. Run `detox build --configuration ios.sim.release`
3. Run `detox test --configuration ios.sim.release`

### How to run in Github Actions
By default, the "inline-build" workflow will run when updates are pushed. It can also be run manually from Github.

### How it works
A detox-ready app can be built in EAS by using the `@config-plugins/detox` config plugin. We simulate the part of the EAS build process essential to running the tests by running `prebuild` to generate the native project, and then building a version, which is then tested by Detox. This allows for Detox integration that's quite close to the workflow described by the Detox documentation, and avoids the added complexity of using the Expo Go app (e.g., supporting multiple SDK's as well as many libraries that may not be needed by your app). In certain edge cases, this build will result in a test much more accurate to a production EAS build.

## "EAS Build" version
_Coming soon!_
This version runs the build on EAS Build, and then downloads the completed build from EAS, running the tests on that build. This test has the advantage of running faster, but only if a build is already completed. This workflow is a good option if you need to regularly produce a simulator build, anyway- the test can use the same simulator build instead of building its own copy. It would also be possible to run `eas build` from the Github Action itself

### Prerequisites
- Create an [access token and register it on Github](https://docs.expo.dev/accounts/programmatic-access/#using-access-tokens)
- Login to EAS (`npx expo login`)
- Run `eas build --profile detox --platform ios`

### How to run locally
1. Run `yarn`
2. Save the build from EAS as **bin/detoxbuild.ipa**.
3. Run `detox test --configuration ios.sim.eas.release`

### How to run in Github Actions
This one does not run by default, so specifically select "Use an existing EAS Build for Detox testing" from Github Actions

### How it works
This is about the same as the above workflow, except, instead of building the app itself, it downloads the app from EAS, using JSON output from `eas build:list` to find the latest build for that profile. From there, the test runs the same.

## Setting up in your own Expo project
- Follow Detox's [Getting Started](https://wix.github.io/Detox/docs/introduction/getting-started/) and [iOS Setup](https://wix.github.io/Detox/docs/introduction/ios-dev-env) documents
- Run `expo install @config-plugins/detox`.
- Setup your **detox.config.js** and Github workflows similar to this repo
