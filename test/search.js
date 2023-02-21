module.exports = {
  '@tags': ['search'],

  before(browser) {
    browser.page.wiki()
      .navigate()
      .waitForElementVisible('@welcome', 'Welcome title visible')
      .assert.textContains('@welcome', 'Welcome to Wikipedia', 'Welcome title ok')
    
    console.log('--- UPDATED ---');
  },
  after(browser) {
    browser.end();
  },

  'Search for word': function (browser) {
    let word = browser.globals.searchText;

    browser.assert.notEmpty('#mp-welcome')

    browser.page.wiki()
      .search(word)
      .waitForElementVisible('@pageTitle', 'Page title here')
      .assert.titleContains(`${word} - Wikipedia`, 'title ok')
      .assert.textContains('@pageTitle', word, `${word} title ok`);

    browser
      .page.wiki()
      .section.topMenu
      .assert.textContains('@logIn', 'Log in');
  },

};
