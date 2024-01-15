Feature: Records Page

  Scenario: Ensure page content renders
    Given I open the "records" page
    Then I see the "records" page
    And I see the "NAV_LOGO" on the "records" page
    And I see the "NAV_MENU" on the "records" page
    And I see the "RECORDS_WINDOW" on the "records" page
    And I see the "RECORDS_INFO" on the "records" page
    And I see the "DISCOGS_COLLECTION_LINK" on the "records" page
    And I see the "RECORDS_TABLE" on the "records" page
    And I see the "TOTAL_ALBUMS" on the "records" page
    And I see the "PAGINATION" on the "records" page
    And I see the "PAGE_MARQUEE" on the "records" page

  Scenario: Ensure sticky gif redirects to Records page
    Given I open the "landing" page
    And I see the "STICKY_GIF" on the "landing" page
    When I use the "STICKY_GIF" button on the "landing" page
    Then I see the "records" page