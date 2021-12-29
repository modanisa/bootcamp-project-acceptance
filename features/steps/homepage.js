const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const waitForSelector = require("../support/action/waitForSelector")
const checkTitle = require("../support/check/checkTitle")
const sendKeys = require("../support/action/sendKeys");
const clickElement = require("../support/action/clickElement");
const checkUrlContains = require("../support/check/checkUrlContains")

Given("customer goes to modanisa.com", async function () {
    await openUrl.call(this, "/")
})

When("page is loaded", async function () {
    await waitForSelector.call(this, '#search')
});

Then(`title should be {string}`, async function (title) {
    await checkTitle.call(this, title)
});

When("user searches for {string}", async function (searchedText) {
    await sendKeys.call(this, "#search", searchedText)
    await clickElement.call(this, "#newHeaderFooter-search")
});

Then("customer should navigate to related {string} listing page", async function (pageType) {
    await checkUrlContains.call(this, false, "etek.htm?q=Etek")
    await this.page.waitForTimeout(3000)
});