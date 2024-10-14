import user from "../fixtures/user.json";
import createUser from "../fixtures/userCreat.json";

describe("Создание, обновление, удаление пользователя", () => {
  it("Создание пользователя", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/user", user).then(
      (response) => {
        expect(response.status).be.eq(200);
      }
    );
  });

  it("Обновление данных пользователя", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/user", user).then(
      (response) => {
        expect(response.status).be.eq(200);
      }
    );
    cy.request(
      "PUT",
      `https://petstore.swagger.io/v2/user/${user.username}`,
      createUser
    ).then((response) => {
      expect(response.status).to.eq(200);
    });
    cy.request(
      "GET",
      `https://petstore.swagger.io/v2/user/${createUser.username}`
    ).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.deep.eq(createUser);
    });
  });

  it("Удаление пользователя", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/user", createUser).then(
      (response) => {
        expect(response.status).to.eq(200);
        cy.request(
          "DELETE",
          `https://petstore.swagger.io/v2/user/${createUser.username}`
        ).then((response) => {
          expect(response.status).to.eq(200);
        });
      }
    );
  });
});
