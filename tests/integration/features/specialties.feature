Feature: Specialties Page

  Scenario: Ensure page content renders
    Given I open the "specialties" page
    Then I see the "specialties" page
    And I see the "NAV_LOGO" on the "about" page
    And I see the "NAV_MENU" on the "about" page
    And I see the "SPECIALTIES_WINDOW" on the "specialties" page
    And I see 6 different "SPECIALTY_ITEM" on the "specialties" page
    And I see the "PAGE_MARQUEE" on the "specialties" page