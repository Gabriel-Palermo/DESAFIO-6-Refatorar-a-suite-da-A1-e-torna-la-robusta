class LoginPage {
  selectors = {
    username: '[data-test="username"]',
    password: '[data-test="password"]',
    loginButton: '[data-test="login-button"]',
    error: '[data-test="error"]',
  };

  fillUsername(username) {
    cy.get(this.selectors.username).clear().type(username);
  }

  fillPassword(password) {
    cy.get(this.selectors.password).clear().type(password, { log: false });
  }

  submit() {
    cy.get(this.selectors.loginButton).click();
  }

  shouldShowErrorContaining(message) {
    cy.get(this.selectors.error).should('be.visible').and('contain', message);
  }

  shouldShowLoginButton() {
    cy.get(this.selectors.loginButton).should('be.visible');
  }
}

export default LoginPage;
