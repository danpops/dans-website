Feature: Landing Page

  Scenario: Ensure page tabs are rendering
    Given I open the "landing" page
    And I see the "NAV" on the "landing" page
    And I see the "NAV_LOGO" on the "landing" page
    And I see the "NAV_MENU" on the "landing" page
    And I do not see the "PAGE_TABS" on the "landing" page
    When I use the "NAV_MENU" button on the "landing" page
    Then I see the "PAGE_TABS" on the "landing" page
    And I see 4 different "TAB_ITEM" on the "landing" page

  Scenario: Ensure page content renders
    Given I open the "landing" page
    Then I see the "landing" page
    And I see the "HERO_SECTION" on the "landing" page