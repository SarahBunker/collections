describe('Note app', function() {
  beforeEach(function() {
    cy.visit('http://localhost:3000')
  })

  it('front page can be opened', function() {
    cy.contains('Notes')
    cy.contains('Note app, Created by Sarah Bunker')
  })

  it('login form can be opened', function() {
    cy.contains('login').click()
  })

  it('user can log in', function() {
    cy.contains('login').click()
    cy.get('#username').type('sarah')
    cy.get('#password').type('Number25')
    cy.get('#login-button').click()

    cy.contains('Sarah logged in')
  })
})
