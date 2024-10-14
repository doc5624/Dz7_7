describe.skip("Тестирывание библиотеки", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get(".ml-auto > .ml-2").click();
  });
  it.only("Тест на ввод авторизацию", () => {
    cy.get("#mail").type("bropet@mail.ru");
    cy.get("#pass").type("123");
    cy.get("form > .ml-2").click();
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible", true);
  });

  it("Тест на пустое поле ввода логина", () => {
    cy.get("#pass").type("123");
    cy.get("form > .ml-2").click();
    cy.get("#mail").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });

  it("Тест на пустое поле ввода пароля", () => {
    cy.get("#mail").type("bropet@mail.ru");
    cy.get("form > .ml-2").click();
    cy.get("#pass").then((elements) => {
      expect(elements[0].checkValidity()).to.be.false;
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.");
    });
  });
});
