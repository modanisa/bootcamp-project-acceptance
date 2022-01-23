Feature: Category
  As Product Owner I want to navigate to Product Detail and Favorite pages
  So that I can go see detail of a product and my favorite list

  Scenario: User should navigate to Product Detail Page when he/she select to Go to Detail
    Given that User is on Product Listing Page
    When User clicks to the Go to Detail button of "Mervin Şal"
    Then User should navigate to Product Detail page of "Mervin Şal"

  Scenario: User should navigate to Favorite Page when he/she clicks to Favorites link
    Given that User is on Product Listing Page
    Given that User clicks to the Favorite button of
      | Peressa    |
      | Sweatshirt |
    When User clicks to the Favorites link
    Then User should navigate to Favorites page

  Scenario: User should see the quantity of his/her favorite products
    Given that User is on Product Listing Page
    When that User clicks to the Favorite button of
      | Tesettür Dünyası |
      | Tuva             |
    Then User should see the quantity of his/her favorite products as "2"

  @work
  Scenario: User should be able to clear his/her all favorite products
    Given that User is on Product Listing Page
    Given that User clicks to the Favorite button of
      | Tesettür Dünyası |
      | Tuva             |
    When User clears all favorite products
    Then User should see the quantity of his/her favorite products as "0"
