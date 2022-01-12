describe('The videos page', () => {
  it('BBB', () => {
    cy.visit('http://localhost:3000');

    //Menu
    cy.get('body').type('{downarrow}').type('{downarrow}').type('{downarrow}').type('{downarrow}');

    cy.pause();

    //BBB Info
    cy.get('body')
      .type('{rightarrow}')
      .type('{rightarrow}')
      .type('{leftarrow}')
      .type('{leftarrow}')
      .type('{rightarrow}');

    cy.pause();

    // Videos
    cy.get('body')
      .type('{downarrow}')
      .type('{rightarrow}')
      .type('{rightarrow}')
      .type('{rightarrow}')
      .type('{rightarrow}')
      .type('{rightarrow}');

    cy.pause();

    // Videos opens menu
    cy.get('body')
      .type('{leftarrow}')
      .type('{leftarrow}')
      .type('{leftarrow}')
      .type('{leftarrow}')
      .type('{leftarrow}')
      .type('{leftarrow}');

    cy.pause();

    // Comes back to BBB info
    cy.get('body').type('{rightarrow}').type('{uparrow}');
  });
});
