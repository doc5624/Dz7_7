describe("template spec", () => {
  beforeEach(() => {
    //cy.visit("/");
    cy.visit("https://qamid.tmweb.ru/client/index.php");
  });

  it("Бронирывание мест", () => {
    cy.fixture("movies").then((seats) => {
      cy.get(".page-nav__day:nth-of-type(4)").click();
      cy.get(".movie").first().contains("13:00").click();
      seats.forEach((seat) => {
        cy.get(
          `.buying-scheme__wrapper > :nth-child(${seat.row}) >:nth-child(${seat.seat})`
        ).click();
      });
    });
  });
});
