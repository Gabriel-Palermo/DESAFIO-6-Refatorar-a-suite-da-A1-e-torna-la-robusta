class CartPage {
  selectors = {
    itemName: '[data-test="inventory-item-name"]',
    removeBackpack: '[data-test="remove-sauce-labs-backpack"]',
    cartList: '[data-test="cart-list"]',
    checkout: '[data-test="checkout"]',
  };

  shouldContainBackpack() {
    cy.get(this.selectors.itemName).should('contain', 'Sauce Labs Backpack');
  }

  removeBackpack() {
    cy.get(this.selectors.removeBackpack).click();
  }

  shouldNotContainBackpack() {
    cy.get(this.selectors.cartList).should('not.contain', 'Sauce Labs Backpack');
  }

  shouldShowCheckoutButton() {
    cy.get(this.selectors.checkout).should('be.visible');
  }
}

export default CartPage;
