Feature: Category
  As Product Owner I want to navigate to Product Detail and Favorite pages
  So that I can go see detail of a product and my favorite list

  @work
  Scenario: User should navigate to Product Detail Page when he/she select to Go to Detail
    Given that User is on Product Listing Page
    When User clicks to the Go to Detail button of "Mervin Şal"
    Then User should navigate to Product Detail page of "Mervin Şal"