import tests from "../fixtures/movie.json";

describe("Тест бронирывания билетов", () => {
  beforeEach(() => {
    //cy.visit("/");
    cy.visit("https://qamid.tmweb.ru/client/index.php");
  });

  it("Проверка недели на 7 дней ", () => {
    cy.get(".page-nav__day").should("have.length", 7);
  });

  tests.forEach((test) => {
    it("test.name", () => {
      cy.get(".page-nav__day:nth-of-type(4)").click();
      cy.get(".movie").first().contains("13:00").click();
      test.data.forEach((seat) => {
        cy.get(
          `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
        ).click();
      });
      cy.get(".acceptin-button").click();
      cy.contains("Вы выбрали билеты:").should("be.visible");
    });
  });
});
