// import response from "../../../fixtures/volunteers.json";

// const volunteers = response.items;

// describe("Volunteers Filters", () => {
//   beforeEach(() => {
//     cy.fetch({
//       role: "admins",
//       portal: "admin",
//       page: "volunteers",
//     });
//   });

//   it("Default Filters", () => {
//     cy.get('[data-cy="pending-filter"]')
//       .get("div")
//       .should("have.class", "bg-hackathon-tags-yellow-bg", "text-white");
//     cy.get('[data-cy="rejected-filter"]')
//       .get("div")
//       .should("have.class", "bg-hackathon-tags-red-bg", "text-white");
//     cy.get('[data-cy="accepted-filter"]')
//       .get("div")
//       .should("have.class", "bg-hackathon-tags-green-bg", "text-white");
//   });

//   it("Click Filters", () => {
//     cy.get('[data-cy="pending-filter"]').click();
//     cy.get('[data-cy="pending-filter"]')
//       .get("div")
//       .should("have.class", "text-design-brown-300", "bg-design-brown-100");
//     cy.get('[data-cy="rejected-filter"]').click();
//     cy.get('[data-cy="rejected-filter"]')
//       .get("div")
//       .should("have.class", "text-design-brown-300", "bg-design-brown-100");
//     cy.get('[data-cy="accepted-filter"]').click();
//     cy.get('[data-cy="accepted-filter"]')
//       .get("div")
//       .should("have.class", "text-design-brown-300", "bg-design-brown-100");
//   });

//   it("Click Confirm", () => {
//     cy.get('[data-cy="accepted-filter"]').click();
//     volunteers.forEach((volunteer) => {
//       if (volunteer.status === 1)
//         cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
//       else cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
//     });
//   });

//   it("Click Not Attending", () => {
//     cy.get('[data-cy="rejected-filter"]').click();
//     volunteers.forEach((volunteer) => {
//       if (volunteer.status === -1)
//         cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
//       else cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
//     });
//   });

//   it("Click Pending", () => {
//     cy.get('[data-cy="pending-filter"]').click();
//     volunteers.forEach((volunteer) => {
//       if (volunteer.status === 0)
//         cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
//       else cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
//     });
//   });

//   it("Click 2 Filters", () => {
//     cy.get('[data-cy="accepted-filter"]').click();
//     cy.get('[data-cy="rejected-filter"]').click();
//     volunteers.forEach((volunteer) => {
//       if (volunteer.status === 1 || volunteer.status === -1)
//         cy.get(`[data-cy="${volunteer.uid}"]`).should("not.exist");
//       else cy.get(`[data-cy="${volunteer.uid}"]`).should("exist");
//     });
//   });
// });
