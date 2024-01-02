Feature: Contact Page

  Scenario: Ensure page content renders
    Given I open the "contact" page
    Then I see the "contact" page
    And I see the "NAV_LOGO" on the "contact" page
    And I see the "NAV_MENU" on the "contact" page
    And I see the "CONTACT_WINDOW" on the "contact" page
    And I see the "EMAIL_FORM" on the "contact" page
    And I see 2 different "CONTACT_LINK" on the "contact" page
    And I see the "PAGE_MARQUEE" on the "contact" page