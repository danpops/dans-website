Feature: Experience Page

  Scenario: Ensure page content renders
    Given I open the "experience" page
    Then I see the "experience" page
    And I see the "NAV_LOGO" on the "experience" page
    And I see the "NAV_MENU" on the "experience" page
    And I see the "EXPERIENCE_WINDOW" on the "experience" page
    And I see 2 different "EXPERIENCE_CARD" on the "experience" page
    And I see the "SPECIALTIES_WINDOW" on the "experience" page
    And I see the "SPECIALTIES_TEXT" on the "experience" page
    And I see 6 different "SPECIALTY_ITEM" on the "experience" page
    And I see the "PAGE_MARQUEE" on the "experience" page
    And I see the "COPYRIGHT_GITHUB_LINK" on the "experience" page