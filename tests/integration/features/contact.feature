Feature: Contact Page

  Scenario: Ensure page content renders
    Given I open the "contact" page
    Then I see the "contact" page
    And I see the "PAGE_LOGO" on the "contact" page
    And I see the "PAGE_TABS" on the "contact" page
    And I see the "CONTACT_SECTION" on the "contact" page
    And I see 3 different "CONTACT_LINK" on the "contact" page