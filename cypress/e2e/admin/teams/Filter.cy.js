import response from "../../../fixtures/teams.json";

const teams = response.items;

describe("Teams Filters", () => {
  beforeEach(() => {
    cy.fetch({
      role: "admins",
      portal: "admin",
      page: "teams",
    });
  });

  it("Default Filters", () => {
    cy.get('[data-cy="rejected-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-tags-yellow-bg", "text-white");
    cy.get('[data-cy="accepted-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-tags-red-bg", "text-white");
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "bg-hackathon-tags-green-bg", "text-white");
  });

  it("Click Filters", () => {
    cy.get('[data-cy="pending-filter"]').click();
    cy.get('[data-cy="pending-filter"]')
      .get("div")
      .should("have.class", "text-design-brown-300", "bg-design-brown-100");
    cy.get('[data-cy="rejected-filter"]').click();
    cy.get('[data-cy="rejected-filter"]')
      .get("div")
      .should("have.class", "text-design-brown-300", "bg-design-brown-100");
    cy.get('[data-cy="accepted-filter"]').click();
    cy.get('[data-cy="accepted-filter"]')
      .get("div")
      .should("have.class", "text-design-brown-300", "bg-design-brown-100");
  });

  it("Click Disqualify", () => {
    cy.get('[data-cy="rejected-filter"]').click();
    teams.forEach((team) => {
      if (team.status === -1)
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });

  it("Click Qualify", () => {
    cy.get('[data-cy="accepted-filter"]').click();
    teams.forEach((team) => {
      if (team.status === 1)
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });

  it("Click Pending", () => {
    cy.get('[data-cy="pending-filter"]').click();
    teams.forEach((team) => {
      if (team.status === 0)
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });

  it("Click 2 Filters", () => {
    cy.get('[data-cy="accepted-filter"]').click();
    cy.get('[data-cy="rejected-filter"]').click();
    teams.forEach((team) => {
      if (team.status === 1 || team.status === -1)
        cy.get(`[data-cy="${team.uid}"]`).should("not.exist");
      else cy.get(`[data-cy="${team.uid}"]`).should("exist");
    });
  });
});
