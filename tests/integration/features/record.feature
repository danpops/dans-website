Feature: Record Page

  Scenario: Ensure page content renders
    Given I open the "records" page
    And I see the "ALBUM_RELEASE_ROW" on the "records" page
    When I use the "ALBUM_RELEASE_ROW" button on the "records" page
    Then I see the "record" page
    And I see the "NAV_LOGO" on the "record" page
    And I see the "NAV_MENU" on the "record" page
    And I see the "HOME_BUTTON" on the "record" page
    And I see the "ALBUM_DETAILS" on the "record" page
    And I see the "ALBUM_COVER_ART" on the "record" page
    And I see the "ALBUM_INFO" on the "record" page
    And I see the "ALBUM_TITLE" on the "record" page
    And I see the "ALBUM_ARTIST" on the "record" page
    And I see the "RELEASE_YEAR" on the "record" page
    And I see the "ALBUM_COUNTRY" on the "record" page
    And I see the "ALBUM_GENRES" on the "record" page
    And I see the "ALBUM_LABELS" on the "record" page
    And I see the "ALBUM_FORMAT" on the "record" page
    And I see the "ALBUM_TRACKLIST" on the "record" page
    And I see the "ALBUM_COMMUNITY_STATS" on the "record" page
    And I see the "HAVE_RELEASE_BAR" on the "record" page
    And I see the "WANT_RELEASE_BAR" on the "record" page
    And I see the "PAGE_MARQUEE" on the "records" page
    And I see the "COPYRIGHT_GITHUB_LINK" on the "records" page
    # Redirect back to records
    When I use the "HOME_BUTTON" button on the "record" page
    Then I see the "records" page
