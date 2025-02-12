import { Builder, By } from "selenium-webdriver";
import { expect } from "chai";

describe("Web Chat Application Tests - Registration", function () {
  this.timeout(10000);
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get("http://localhost:3000/email");
  });

  after(async function () {
    await driver.quit();
  });

  it("should load the chat application", async function () {
    await driver.sleep(1000);
    const title = await driver.getTitle();
    await driver.sleep(1000);
    expect(title).to.equal("Chat Application");
  });
});
