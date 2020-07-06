/// <reference types="cypress" />

context('Waiting', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/form')
  })
  // BE CAREFUL of adding unnecessary wait times.
  // https://on.cypress.io/best-practices#Unnecessary-Waiting

  // https://on.cypress.io/wait
  it('user_fillIn', () => {
    cy.get('input[name="fname"]').type("sananda")
    cy.get('input[name="lname"]').type("ravva")
    cy.get('input[name="dateofbirth"]').type("2001-06-15")
    cy.get('input[id="female"]').click()
    cy.get('input[name="cname"]').type("BV raju institution of technology")
    cy.get('select[name="Courses"]').select("Machine learning")
    cy.get('button[type="submit"]').click()

    cy.contains('YOU HAVE REGISTERED!')


  })
})
