

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
        return $('#flash');
    }
}

module.exports = new SecurePage();
