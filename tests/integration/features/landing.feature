Feature: Landing Page

  Scenario: Ensure page content renders
    Given I open the "landing" page
    Then I see the "landing" page
    And I see the "PAGE_LOGO" on the "landing" page
    And I see the "PAGE_TABS" on the "landing" page
    And I see 4 different "TAB_ITEM" on the "landing" page
    And I see the "HERO_SECTION" on the "landing" page