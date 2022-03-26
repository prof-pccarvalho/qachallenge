describe('home page', ()=>{
    it('the home page must be online', ()=>{
        cy.viewport(1440, 900)
        cy.visit('http://automationpractice.com/index.php')
        //cy.get('h1').should('have.text', 'Automation Practice Website')
        cy.get('#editorial_block_center > h1').should('have.text', 'Automation Practice Website')
    })
})