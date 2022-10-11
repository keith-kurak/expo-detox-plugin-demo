import { device, element, by } from "detox";
const { openAppForDebugBuild } = require('./utils/openAppForDebugBuild');

jest.setTimeout(120000);

describe("Example", () => {
  beforeAll(async () => {
    await device.launchApp({
      newInstance: true,
    });
    await openAppForDebugBuild();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it("should have a text node", async () => {
    await expect(element(by.id("Text1"))).toBeVisible();
  });

  it("should have a button that shows some text when pressed", async () => {
    await element(by.id("Button1")).tap();
    await expect(element(by.id("Text2"))).toBeVisible();
  });

  it("should not have the hidden text node", async () => {
    await expect(element(by.id("Text2"))).not.toBeVisible();
  });
});
