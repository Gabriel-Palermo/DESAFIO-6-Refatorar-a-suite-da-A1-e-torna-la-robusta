import LoginPage from '../pages/LoginPage';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';

describe('SauceDemo - Testes E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('CT-01 - Login com sucesso', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.valid);

      cy.url().should('include', '/inventory.html');

      const inventory = new InventoryPage();
      inventory.shouldShowProducts();
      inventory.shouldHaveProductCount(6);
    });
  });

  it('CT-02 - Login com senha inválida', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.invalidPassword);

      const login = new LoginPage();
      login.shouldShowErrorContaining(
        'Username and password do not match'
      );

      cy.url().should('eq', 'https://www.saucedemo.com/');
    });
  });

  it('CT-03 - Bloqueio de usuário', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.locked);

      const login = new LoginPage();
      login.shouldShowErrorContaining('locked out');
      login.shouldShowLoginButton();
    });
  });

  it('CT-04 - Adicionar produto ao carrinho', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.valid);
      cy.addBackpackToCart();

      const inventory = new InventoryPage();
      inventory.shouldShowCartCount('1');
      inventory.shouldShowRemoveBackpackButton();
    });
  });

  it('CT-05 - Remover produto do carrinho', () => {
    cy.fixture('users').then((users) => {
      cy.login(users.valid);
      cy.addBackpackToCart();
      cy.openCart();

      const cart = new CartPage();
      cart.shouldContainBackpack();
      cart.removeBackpack();
      cart.shouldNotContainBackpack();
      cart.shouldShowCheckoutButton();
    });
  });
});
