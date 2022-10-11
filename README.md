# Development Build Detox Demo
Expo managed workflow project running Detox tests on Github Actions on the iPhone simulator

## Prerequisites (for running locally)
- Detox CLI is installed (`npm install -g detox-cli`)
- Apple Simutils is installed (`brew tap wix/brew; brew install applesimutils`)

### How to run locally
1. Run `yarn`
2. Download your development build to bin (should be named **expodetoxplugindemo.app**)
3. Run `yarn run-detox-local`

### How to run in Github Actions
By default, the "dev-build" workflow will run when updates are pushed. It can also be run manually from Github.

### How it works
A detox-ready development build can be built in EAS by using the `@config-plugins/detox` config plugin. This build can run URL's from Metro much like Expo Go does, but is customized to your development environment. See e2e/utils/openAppForBuild.js for the hooks needed to do this. Note that some of the values may need to bhe changed.

### Prerequisites
- Create an [access token and register it on Github](https://docs.expo.dev/accounts/programmatic-access/#using-access-tokens)
- Login to EAS (`npx expo login`)
- Run `eas build --profile detox --platform ios`

## Setting up in your own Expo project
- Follow Detox's [Getting Started](https://wix.github.io/Detox/docs/introduction/getting-started/) and [iOS Setup](https://wix.github.io/Detox/docs/introduction/ios-dev-env) documents
- Run `expo install @config-plugins/detox`.
- Setup your **detoxrc.json** and Github workflows similar to this repo
- Build a development build just like the one in the "detox" profile in this project's **eas.json**
- Adapt **openAppForBuild.js** for your project and use in your tests as showin in **firstTest.e2e.js**

## Running with a published update
This should also work for not only running code locally, but also running against an update published to EAS Update. The `EXPO_USE_UPDATES` flag will need to be set and the **openAppForBuild.js** needs to be updated accordingly with project-specific details.
