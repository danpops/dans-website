Feature: About Page

  Scenario: Ensure page content renders
    Given I open the "about" page
    Then I see the "about" page
    And I see the "NAV_LOGO" on the "about" page
    And I see the "NAV_MENU" on the "about" page
    And I see the "ABOUT_SECTION" on the "about" page
    And I see the "PAGE_MARQUEE" on the "about" page