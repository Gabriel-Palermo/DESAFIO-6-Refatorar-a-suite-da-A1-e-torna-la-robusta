import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

Cypress.Commands.add('login', (user) => {
  const page = new LoginPage();
  page.fillUsername(user.username);
  page.fillPassword(user.password);
  page.submit();
});

Cypress.Commands.add('addBackpackToCart', () => {
  new InventoryPage().addBackpack();
});

Cypress.Commands.add('openCart', () => {
  new InventoryPage().openCart();
});

Cypress.Commands.add('loginPage', () => {
  return new LoginPage();
});

Cypress.Commands.add('inventoryPage', () => {
  return new InventoryPage();
});

Cypress.Commands.add('cartPage', () => {
  return new CartPage();
});
