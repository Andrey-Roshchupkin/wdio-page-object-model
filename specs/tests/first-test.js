import LoginPage from "../pages/login.page.js";

describe("login form", () => {
  it("should deny access with wrong creds", async () => {
    await LoginPage.open();
    await LoginPage.username.setValue("foo");
    await LoginPage.password.setValue("bar");
    await LoginPage.submit();

    await expect(LoginPage.flash).toHaveTextContaining(
      "Your username is invalid!"
    );
  });

  it("should allow access with correct creds", async () => {
    await LoginPage.open();
    await LoginPage.username.setValue("tomsmith");
    await LoginPage.password.setValue("SuperSecretPassword!");
    await LoginPage.submit();

    await expect(LoginPage.flash).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });
});
