Feature: Landing Page

  Scenario: Ensure Sections Render
    Given I open the "landing" page
    Then I see the "landing" page
    And I see the "ABOUT_SECTION" on the "landing" page
    And I see the "SPECIALTIES_SECTION" on the "landing" page
    And I see 6 different "SPECIALTY_ITEM" on the "landing" page
    And I see the "EXPERIENCE_SECTION" on the "landing" page
    And I see 2 different "EXPERIENCE_CARD" on the "landing" page
    And I see the "CONTACT_SECTION" on the "landing" page
    And I see 3 different "CONTACT_LINK" on the "landing" page