import adminAvtor from "../fixtures/adminAvtor.json";
import selector from "../fixtures/selectors.json";

beforeEach(() => {
  // cy.visit("/admin");
  cy.visit("https://qamid.tmweb.ru/admin");
});

describe("Авторизация", () => {
  it("Проверка страницы авторизации", () => {
    cy.get(selector.title).should("contain", "Идёмвкино");
    cy.get(selector.pageHeader).should("contain", "Администраторррская");
    cy.get(selector.loginSection).should("contain", "Авторизация");
  });

  it("Положительный тест коректные email и пароль", () => {
    cy.login(adminAvtor.validEmail, adminAvtor.validPassword);
    cy.contains("Управление залами").should("be.visible");
  });

  it("Отрицательный тест некоректный пароль", () => {
    cy.login(adminAvtor.validEmail, adminAvtor.inValidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Отрицательный тест некоректный email", () => {
    cy.login(adminAvtor.inValidEmail, adminAvtor.validPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });

  it("Отрицательный тест некоректные email и пароль", () => {
    cy.login(adminAvtor.inValidEmail, adminAvtor.inValidPassword);
    cy.contains("Ошибка авторизации!").should("be.visible");
  });
});
