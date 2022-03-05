

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
		console.log('input get username');
        console.log('may be username');
        return $('#username');
    }

    get inputPassword() {
        console.log('may be password');
        return $('#password');
    }

    get btnSubmit() {
		console.log('input get submit button');
         console.log('may be submit');
        return $('button[type="submit"]');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
		console.log("calling parent open method");
         console.log('may be open parent');
        return super.open('login');
    }
}

module.exports = new LoginPage();
