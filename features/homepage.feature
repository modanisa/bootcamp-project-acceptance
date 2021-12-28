Feature: Homepage
  As a Customer
  She journey through our website

  Scenario: Check Site Title
    Given customer goes to modanisa.com
    When page is loaded
    Then title should be "Modanisa | Tesettür, Tesettür Giyim, Elbise, Abiye ve Bayan Giyim"