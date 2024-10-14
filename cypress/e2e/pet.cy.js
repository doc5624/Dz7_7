describe("pet store api", () => {
  it("should create , get and delite pet", () => {
    let petId = Math.round(Math.random() * 9999999);
    //cy.visit('https://example.cypress.io')
    cy.request("POST", "/pet", {
      id: petId,
      name: "Dominik",
      photoUrls: [],
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.eqls({
        id: petId,
        name: "Dominik",
        photoUrls: [],
        tags: [],
      });

      cy.request(`/pet/${petId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.eqls({
          id: petId,
          name: "Dominik",
          photoUrls: [],
          tags: [],
        });
        cy.request("DELETE", `/pet/${petId}`).then((response) => {
          expect(response.status).to.eq(200);

          cy.request({
            url: `/pet/${petId}`,
            method: "GET",
            failOnStatusCode: false,
          }).then((response) => {
            expect(response.status).to.eq(404);
          });
        });
      });
    });
  });
});
