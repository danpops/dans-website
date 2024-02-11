Feature: Projects Page

  Scenario: Ensure page content renders
    Given I open the "projects" page
    Then I see the "projects" page
    And I see the "NAV_LOGO" on the "projects" page
    And I see the "NAV_MENU" on the "projects" page
    And I see the "PROJECTS_WINDOW" on the "projects" page
    And I see the "PROJECTS_TITLE" on the "projects" page
    And I see the "PROJECTS_CONTAINER" on the "projects" page
    And I see 2 different "PROJECT_CARD" on the "projects" page
    And I see the "PAGE_MARQUEE" on the "projects" page
    And I see the "COPYRIGHT_GITHUB_LINK" on the "projects" page
