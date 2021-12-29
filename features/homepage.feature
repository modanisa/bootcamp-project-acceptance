Feature: Homepage
  As a Customer
  She journey through our website

  Scenario: Check Site Title
    Given customer goes to modanisa.com
    When page is loaded
    Then title should be "Modanisa | Tesettür, Tesettür Giyim, Elbise, Abiye ve Bayan Giyim"

  @work
  Scenario: Customer search for etek
    Given customer goes to modanisa.com
    When user searches for "etek"
    Then customer should navigate to related "etek" listing page