const theme = require('./theme.json')
const DEFAULT_CONFIG = {
  format: [
    '@cucumber/pretty-formatter',
    'json:tests/integration/report/cucumber.json'
  ],
  formatOptions: { colorsEnabled: true, theme },
  noStrict: true,
  forceExit: true,
  // DO NOT CHANGE THE ORDER OF INTEGRATION TEST PATHS.
  // CHANGING THE ORDER WILL RESULT IN BROKEN TESTS.
  // DATA IS RECYCLED THROUGHOUT ALL FEATURES.
  paths: [
    'tests/integration/features/landing.feature',
    'tests/integration/features/about.feature',
    'tests/integration/features/specialties.feature',
    'tests/integration/features/experience.feature',
    'tests/integration/features/contact.feature',
    'tests/integration/features/projects.feature',
    'tests/integration/features/records.feature',
    'tests/integration/features/record.feature',
    'tests/integration/features/error.feature'
  ],
  require: [
    'tests/integration/actions/**/*.js',
    'tests/integration/page/**/*.js',
    'tests/integration/support/**/*.js',
    'tests/integration/steps/**/*.js'
  ],
  tags: 'not @flaky'
}
module.exports = {
  default: DEFAULT_CONFIG,
  smoke: { ...DEFAULT_CONFIG, tags: 'not @local and not @flaky' }
}
