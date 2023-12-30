Feature: Specialties Page

  Scenario: Ensure page content renders
    Given I open the "specialties" page
    Then I see the "specialties" page
    And I see the "NAV_LOGO" on the "about" page
    And I see the "NAV_MENU" on the "about" page
    And I see the "SPECIALTIES_SECTION" on the "specialties" page
    And I see 6 different "SPECIALTY_ITEM" on the "specialties" page
    And I see the "RANDOM_FACTS_BANNER" on the "specialties" page