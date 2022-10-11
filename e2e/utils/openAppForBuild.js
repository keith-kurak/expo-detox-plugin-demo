const appConfig = require('../../app.json');

module.exports.openAppForBuild = async function openAppForBuild() {
  const [platform] = process.env.DETOX_CONFIGURATION.split('.');
  await sleep(1000);
  await device.openURL({
    url: process.env.EXPO_USE_UPDATES
      ? // Testing latest published EAS update for the detox channel
        getDeepLinkUrl(getLatestUpdateUrl())
      : // Local testing with packager
        getDeepLinkUrl(getDevLauncherPackagerUrl(platform)),
  });
  await sleep(3000);
};

// the scheme here will need to be customized based on your app scheme
const getDeepLinkUrl = url =>
  `exp+com.expo.expodetoxplugindemo://expo-development-client/?url=${encodeURIComponent(url)}`;

// disableOnboarding prevents the onboarding screen for the dev client from blocking Detox
const getDevLauncherPackagerUrl = platform =>
  `http://localhost:8081/index.bundle?platform=${platform}&dev=true&minify=false&disableOnboarding=1`;

// channel-name should be updated based on the actual channel where updates are published
const getLatestUpdateUrl = () =>
  `https://u.expo.dev/${getAppId()}?channel-name=detox&disableOnboarding=1`;

const getAppId = () => appConfig?.expo?.extra?.eas?.projectId ?? '';

const sleep = t => new Promise(res => setTimeout(res, t));