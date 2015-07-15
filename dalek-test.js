module.exports = {
  'Google.com has proper title': function(test) {
    test
      .open('http://google.com')
      .assert.title().is('Google', 'It has title')
      .done();
  },

	'Search demo' : function(test) {
		test
			.open('http://google.com')
			.type('#lst-ib', 'dalekjs')
			.click('button.lsb')
			.waitForElement('span.csb')
			.assert.exists('#res')
			.done();	
	}
};


