import Page from "./page.js";

class LoginPage extends Page {
  get username() {
    return $("#username");
  }
  get password() {
    return $("#password");
  }
  get submitBtn() {
    return $('form button[type="submit"]');
  }
  get flash() {
    return $("#flash");
  }

  async open() {
    await super.open("login");
  }

  async submit() {
    await this.submitBtn.click();
  }
}

export default new LoginPage();
