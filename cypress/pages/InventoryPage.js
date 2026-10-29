class InventoryPage {
  selectors = {
    title: '[data-test="title"]',
    item: '[data-test="inventory-item"]',
    addBackpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
    removeBackpack: '[data-test="remove-sauce-labs-backpack"]',
    cartBadge: '[data-test="shopping-cart-badge"]',
    cartLink: '[data-test="shopping-cart-link"]',
  };

  shouldShowProducts() {
    cy.get(this.selectors.title).should('contain', 'Products');
    cy.get(this.selectors.item).should('be.visible');
  }

  shouldHaveProductCount(count) {
    cy.get(this.selectors.item).should('have.length', count);
  }

  addBackpack() {
    cy.get(this.selectors.addBackpack).click();
  }

  shouldShowCartCount(count) {
    cy.get(this.selectors.cartBadge).should('have.text', count);
  }

  shouldShowRemoveBackpackButton() {
    cy.get(this.selectors.removeBackpack).should('be.visible');
  }

  openCart() {
    cy.get(this.selectors.cartLink).click();
  }
}

export default InventoryPage;
