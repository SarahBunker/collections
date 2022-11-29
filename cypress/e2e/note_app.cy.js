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

  describe('when logged in', function() {
    beforeEach(function() {
      cy.contains('login').click()
      cy.get('input:first').type('sarah')
      cy.get('input:last').type('Number25')
      cy.get('#login-button').click()
    })

    // it('a new note can be created', function() {
    //   cy.contains('new note').click()
    //   cy.get('input').type('a note created by cypress')
    //   cy.contains('save').click()
    //   cy.contains('a note created by cypress')
    // })
  })
})
