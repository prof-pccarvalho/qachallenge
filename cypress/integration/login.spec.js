import LoginFactory from "../factories/LoginFactory"


describe('Signin', () => {
    it('Authentication-Create an account', () => {

        var login = LoginFactory.sigin()

        /* var account = {
            Firstname: 'John',
            Lastname: 'Wick',
            Email: '123456@aol.com',
            Password: '12345',
            Company: 'Warner Bros',
            Address1: '1216  BROADWAY',
            Addres2: 'Apartment 1005',
            City: 'New York',
            PostalCode: '04497',
            AdditionalInformation: 'Movie Actor',
            HomePhone: '(646) 786-8150',
            MobilePhone: '(646) 350-4645',
            Alias: 'Keenu'
            } */

            //usando faker
        cy.viewport(1440, 900)
        cy.visit('http://automationpractice.com/index.php')
        cy.get('a.login').click()
        cy.get('#columns > div.breadcrumb.clearfix > span.navigation_page').should('have.text', '	Authentication')
        cy.get('#email_create').type(login.Email)
        cy.get('#SubmitCreate').click()
        cy.get('#account-creation_form > div:nth-child(1) > h3').should('have.text', 'Your personal information')
        cy.get('#id_gender1').click()
        cy.get('#customer_firstname').type(login.Firstname)
        cy.get('#customer_lastname').type(login.Lastname)
        cy.get('#passwd').type(login.Password)
        cy.get('#days').select('15')
        cy.get('#months').select('5')
        cy.get('#years').select('1973')
        cy.get('#account-creation_form > div:nth-child(1) > div:nth-child(8) > label').click()
        cy.get('#account-creation_form > div:nth-child(1) > div:nth-child(9) > label').click()
        cy.get('#company').type(login.Company)
        cy.get('#address1').type(login.Address1)
        cy.get('#address2').type(login.Addres2)
        cy.get('#city').type(login.City)
        cy.get('#id_state').select('32')
        cy.get('#postcode').type(login.PostalCode)
        cy.get('#other').type(login.AdditionalInformation)
        cy.get('#phone').type(login.HomePhone)
        cy.get('#phone_mobile').type(login.MobilePhone)
        cy.get('#alias').type(login.Alias)
        cy.get('#submitAccount > span').click()
        cy.get('#columns > div.breadcrumb.clearfix > span.navigation_page').should('have.text', 'My account')
    })
})

 