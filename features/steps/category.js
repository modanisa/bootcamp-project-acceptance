const {Given, When, Then} = require("cucumber");
const openUrl = require("../support/action/openUrl");
const checkElementExists = require("../support/check/checkElementExists");
const checkUrlContains = require("../support/check/checkUrlContains")
const checkContainsText = require("../support/check/checkContainsText")

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

Given(/^that User clicks to the Favorite button of$/, async function (arr) {
    const selector = ".product-list-item"

    for (let [ productName ] of arr.rawTable) {
        await this.page.$$eval(
            selector,
            async (items, productName) => {
                const relatedProduct = items
                    .find(item => item.querySelector("#title").textContent === productName)
                const favoriteBtn = relatedProduct.querySelector("#favorite")
                await favoriteBtn.click()
            },
            productName
        )
    }
});

When(/^User clicks to the Favorites link$/, async function () {
    const favoriteLink = await this.page.$("#favorites-link")
    await favoriteLink.click()
});

Then(/^User should navigate to Favorites page$/, async function () {
    await this.page.waitForNavigation()
    await checkUrlContains.call(this, false, "/favorites")
});

Then(/^User should see the quantity of his\/her favorite products as "([^"]*)"$/, async function (favoriteProductCount) {
    const selector = "#favorite-count"
    await checkContainsText.call(this, selector, false, favoriteProductCount)
});

When(/^User clears all favorite products$/, async function () {
    const deleteAllBtn = await this.page.$("#clear-all-favorites")
    await deleteAllBtn.click()
});