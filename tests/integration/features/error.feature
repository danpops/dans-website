Feature: Error Page

  Scenario: Ensure redirected to error page
    Given I open the "potato" page
    Then I see the "error" page
    And I see the "NAV_LOGO" on the "error" page
    And I see the "NAV_MENU" on the "error" page
    And I see the "ERROR_CONTENT" on the "error" page
    When I use the "NAV_LOGO" button on the "error" page
    Then I see the "landing" page