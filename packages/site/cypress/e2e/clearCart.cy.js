// Adds a Cypress test that simulates adding a slow async operation inside of an afterEach hook.

async function clearCart() {
  const res = await fetch("/api/clearCart");
  const body = await res.json();
  return body;
}

describe("Clearing the cart", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("awaits blue", () => {
    cy.get("[data-cy=red]").click();
  });

  it("gets green", () => {
    cy.get("[data-cy=green]").click();
  });

  it("awaits blue", () => {
    cy.get("[data-cy=red]").click();
  });

  afterEach(() => {
    cy.wrap(clearCart(), { timeout: 10_000 }).then(({ success }) => {
      expect(success).to.be.true;
    });
  });
});
