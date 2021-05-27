export default class loginPage {
    loginInput() {
        return '#username';
    }
    passwordInput() {
    return '#password';
    }
    loginButton() {
        return '.login-page-form-button';
    }
    forgotPasswordLink() {
        return '.login-page-form-forgot-password';
    }
    registerLink() {
        return 'a[href*="https://www.beatport.com/account/signup"]';
    }
}