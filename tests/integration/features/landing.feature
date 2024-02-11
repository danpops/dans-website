Feature: Landing Page

  Scenario: Ensure navigation tabs appear
    Given I open the "landing" page
    And I see the "NAV" on the "landing" page
    And I see the "NAV_LOGO" on the "landing" page
    And I see the "NAV_MENU" on the "landing" page
    And I do not see the "PAGE_TABS" on the "landing" page
    When I use the "NAV_MENU" button on the "landing" page
    Then I see the "PAGE_TABS" on the "landing" page
    And I see the "ABOUT_NAV_TAB" on the "landing" page
    And I see the "EXPERIENCE_NAV_TAB" on the "landing" page
    And I see the "CONTACT_NAV_TAB" on the "landing" page
    And I see the "PROJECTS_NAV_TAB" on the "landing" page

  Scenario: Ensure About navigation tab navigates to About page
    Given I open the "landing" page
    And I see the "NAV_MENU" on the "landing" page
    When I use the "NAV_MENU" button on the "landing" page
    Then I see the "PAGE_TABS" on the "landing" page
    And I see the "ABOUT_NAV_TAB" on the "landing" page
    When I use the "ABOUT_NAV_TAB" button on the "landing" page
    Then I see the "about" page

  Scenario: Ensure Experience navigation tab navigates to Experience page'
    Given I open the "landing" page
    And I see the "NAV_MENU" on the "landing" page
    When I use the "NAV_MENU" button on the "landing" page
    Then I see the "PAGE_TABS" on the "landing" page
    And I see the "EXPERIENCE_NAV_TAB" on the "landing" page
    When I use the "EXPERIENCE_NAV_TAB" button on the "landing" page
    Then I see the "experience" page

  Scenario: Ensure Contact navigation tab navigates to Contact page
    Given I open the "landing" page
    And I see the "NAV_MENU" on the "landing" page
    When I use the "NAV_MENU" button on the "landing" page
    Then I see the "PAGE_TABS" on the "landing" page
    And I see the "CONTACT_NAV_TAB" on the "landing" page
    When I use the "CONTACT_NAV_TAB" button on the "landing" page
    Then I see the "contact" page

  Scenario: Ensure Projects navigation tab navigates to Projects page
    Given I open the "landing" page
    And I see the "NAV_MENU" on the "landing" page
    When I use the "NAV_MENU" button on the "landing" page
    Then I see the "PAGE_TABS" on the "landing" page
    And I see the "PROJECTS_NAV_TAB" on the "landing" page
    When I use the "PROJECTS_NAV_TAB" button on the "landing" page
    Then I see the "projects" page

  Scenario: Ensure Nav Logo navigates to Landing page
    Given I open the "about" page
    And I see the "NAV_LOGO" on the "about" page
    When I use the "NAV_LOGO" button on the "about" page
    Then I see the "landing" page

  Scenario: Ensure page content renders
    Given I open the "landing" page
    Then I see the "landing" page
    And I see the "HERO_WINDOW" on the "landing" page
    And I see the "TYPEWRITER_TEXT" on the "landing" page
    And I see the "ABOUT_LINK" on the "landing" page
    And I see the "CONTACT_LINK" on the "landing" page
    And I see the "RESUME_LINK" on the "landing" page
    And I see the "PAGE_MARQUEE" on the "landing" page
    And I see the "STICKY_GIF" on the "landing" page
    And I see the "COPYRIGHT_GITHUB_LINK" on the "landing" page
