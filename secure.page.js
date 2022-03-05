

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    get flashAlert() {
		console.log('flash alert');
         console.log('may be flashalert');
        return $('#flash');
    }
}

module.exports = new SecurePage();
