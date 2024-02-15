Feature: Records Page

  Scenario: Ensure page content renders
    Given I open the "records" page
    Then I see the "records" page
    And I see the "NAV_LOGO" on the "records" page
    And I see the "NAV_MENU" on the "records" page
    And I see the "RECORDS_WINDOW" on the "records" page
    And I see the "RECORDS_INFO" on the "records" page
    And I see the "DISCOGS_TOTAL_ALBUMS" on the "records" page
    And I see the "RECORD_COLLECTION" on the "records" page
    And I see 50 different "ALBUM_RELEASE_ROW" on the "records" page
    And I see the "PAGINATION" on the "records" page
    And I see the "PAGE_MARQUEE" on the "records" page
    And I see the "COPYRIGHT_GITHUB_LINK" on the "records" page

  Scenario: Ensure release row redirects to record detail page
    Given I open the "records" page
    Then I see the "records" page
    When I use the "ALBUM_RELEASE_ROW" button on the "records" page
    Then I see the "record" page
