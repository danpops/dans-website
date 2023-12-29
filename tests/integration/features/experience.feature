Feature: Experience Page

  Scenario: Ensure page content renders
    Given I open the "experience" page
    Then I see the "experience" page
    And I see the "NAV_LOGO" on the "experience" page
    And I see the "NAV_MENU" on the "experience" page
    And I see the "EXPERIENCE_SECTION" on the "experience" page
    And I see 2 different "EXPERIENCE_CARD" on the "experience" page