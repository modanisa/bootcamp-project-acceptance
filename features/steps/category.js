const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const checkElementExists = require("../support/check/checkElementExists");
const checkUrlContains = require("../support/check/checkUrlContains")

Given("that User is on Product Listing Page", async function () {
    await openUrl.call(this, "http://localhost:8080/")
    await checkElementExists.call(this, "#searchbar", false)
})

When(/^User clicks to the Go to Detail button of "([^"]*)"$/, async function (productName) {
    const selector = '.product-list-item'
    this.melvinSlug = await this.page.$$eval(
        selector,
        async (items, productName) => {
            const melvin = items
                .find(item => item.querySelector("#title").textContent === productName)
            console.log(melvin.dataset)
            const button = melvin.querySelector("#detail")
            const {slug} = melvin.dataset
            await button.click()
            return slug
        },
        productName
    )
});

Then(/^User should navigate to Product Detail page of "([^"]*)"$/, async function (productName) {
    const not = false
    await checkUrlContains.call(this, not, `/${this.melvinSlug}`)
});