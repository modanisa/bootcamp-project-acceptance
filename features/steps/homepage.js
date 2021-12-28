const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const waitForSelector = require("../support/action/waitForSelector")
const checkTitle = require("../support/check/checkTitle")

Given("customer goes to modanisa.com", async function () {
    await openUrl.call(this, "/")
})

When("page is loaded", async function () {
    await waitForSelector.call(this, '#search')
});

Then(`title should be {string}`, async function (title) {
    await checkTitle.call(this, title)
});