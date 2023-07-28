# qachallenge

## Project Description
<p align="justify"> Assess skills in quality engineering software. </p>

<img src="https://img.shields.io/static/v1?label=cypress&message=framework&color=blue&style=for-the-badge&logo=CYPRESS"/>

Test execution material: http://automationpractice.com/index.php .

In this link is a virtual store.

In this virtual store, we have several products, male and female.

With a few clicks and a few fills, we can easily make purchases on the site.

### This challenge must have: :trophy: :trophy: :trophy:
You will need to create a login on the platform.

Navigate through the menu, select a product and make a purchase in the online store.

Verify the purchase status is correct in the purchase history.

Assemble a test suite and write at least one End To End test and one API test.

Feel free to create new test cases if you prefer.
At the end the result of the challenge should have:

A report with all the bugs found in case there is a bug, following a methodology of your choice.
A test suite with End To End tests.
A test suite with API tests.
A documentation of how the test environment runs.
An open Pull Request for this repository, with the entire solution implemented in it.

:blue_heart: :blue_heart: :blue_heart:
:pray: :pray: :pray: :pray:

#### Initial procedures :running: :running: :running:

:small_blue_diamond: open hyper and navigate to project folder

:small_blue_diamond: run npm init and answer questions

                        package name:**project name**
                        version:**retain**
                        description: **short description**
                        entry point:**retain**
                        test command: **npx cypress open**
                        git repository:**retain**
                        keywords:**retain**
                        author:**your name**
                        license(ISC): **MIT**
:small_blue_diamond: check if package package.json was created witj ls command in hyper

:small_blue_diamond: run npm i cypress --save-dev

:small_blue_diamond: run npm run test

:small_blue_diamond: run code .

:small_blue_diamond: in the explorer (VSCode), find integration folder and delete sub folder was there

:small_blue_diamond: create a .gitignore file in the VSCode root with the name of the folders and files you want to delete. In this case, node_modules

:small_blue_diamond: To update the repository in git, follow the steps below in hyper, after create o repository in git

                            echo "# qachallenge" >> README.md
                            git init
                            git add README.md
                            git commit -m "first commit - create repositoy"
                            git branch -M main
                            git remote add origin https://github.com/"your project".git
                            git push -u origin main
:small_blue_diamond: run npm install faker --save-dev to install library that make dynamic data. This is use in Automation test. Not now. Second test case.                

##### Creating the automation
** :bar_chart: First test case

:ballot_box_with_check: in the explorer on the VSCode, open integration folder and create home.spec.js file.

:ballot_box_with_check: In the home.spec.js put:

                describe('home page', ()=>{
                    it('the home page must be online', ()=>{
                        cy.viewport(1440, 900)
                        cy.visit('http://automationpractice.com/index.php')
                        //cy.get('h1').should('have.text', 'Automation Practice Website')
                        cy.get('#editorial_block_center > h1').should('have.text', 'Automation Practice Website')
                    })
                })
                
:ballot_box_with_check: run npm run test (case cypress is closed)

:ballot_box_with_check: if all is OK, we have our first successful test case.

** :bar_chart: Second test case
:stars: :star:
:statue_of_liberty: in the explorer on the VSCode, open integration folder and create login.spec.js file.

:star: In the login.spec.js put:

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

 
:ballot_box_with_check: in the explorer on the VSCode, cypress root, new folder "factories".

:ballot_box_with_check: in the new folder "factories", create new file "LoginFactory.js".

:ballot_box_with_check: in the 'LoginFactory.js" put:

                        var faker = require('faker')

                        export default {

                            sigin: function() {

                                var firstName = faker.name.firstName()
                                var lastName = faker.name.lastName()

                                var account = {
                                    Firstname: `${firstName} `,
                                    Lastname: `${lastName} `,
                                    Email: faker.internet.email(firstName), //'1234567@aol.com',    //faker.internet.Email(firstName),
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
                                    }
                                return account
                            }

                        }

:trophy: :trophy: :trophy: if all is OK, we have our second successful test case.

###### *****Cypress Dashboard and Github Actions
access cypress.io
create account or access account
access Projects
create new project
choose CI provider as GitHub Actions
click next step
copy the contents of the next page:
To record your first run, complete these 2 steps.
1) Insert ProjectID into your cypress.json file
Your unique project ID allows us to connect your project to this organization. Insert the key below into your cypress.json file to get started.

{
    "projectId": "*******"
}
2) Run cypress while passing the record key
Run the command below to start recording your tests!

npx cypress run --record --key 2f434333-ad17-41a9-ae26-c9eec32cf9be


>>>>>>>>>
copy and paste the project id into your project's cypress.json
update project git
>>>>>>>>>
inside your project on Github, click on Actions
then click on set up a workflow yourself
change filename from "main.yml" to "workflow-cypress.yml"
Paste the content below into this file:

name: Cypress Regression Tests

on: [push]

jobs:

  ui-chrome-tests:
    runs-on: ubuntu-latest
    container: cypress/browsers:node14.17.0-chrome88-ff89
    strategy:
      fail-fast: false
    steps:
      - name: Checkout
        uses: actions/checkout@v2
      
      - name: 'UI Tests - Chrome'
        uses: cypress-io/github-action@v2
        with:
          install-command: yarn install
          wait-on: ${{ secrets.BASE_URL }}
          wait-on-timeout: 120
          browser: chrome
          record: true
          group: 'UI - Chrome'
          spec: cypress/integration/*
        env:
          CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

>>>>>>>>>>>
open the engine settings tab of the Github page in a new tab
click on Secrets in this new tab and then on Actions
click on New repository secret
put the same name as the wait-on of the workflow-cypress.yml file = BASE_URL
and Value fill with the URL of the site to be tested
click on Add secret

click on New repository secret
put the name equal to the CYPRESS_RECORD_KEY: from the workflow-cypress.yml file = CYPRESS_RECORD_KEY
and the Value fill with the record key generated by cypress.io
click on Add secret
>>>>>>>>>>>>>
we will have 2 secret keys
>>>>>>>>>>>>>
return to Actions page
click on Start commit and then on Commit new file
when clicking on Actions again, the created workflow will appear
run the workflow
click on ui-chrome-tests to track the execution

after successful completion
access the cypress.io URL and verify that the dashboard is ready
click on the dashboard and check the result
click on Test Results and explore
in the name of the test case we can check the evidence, including the video of the execution.


:trophy: :trophy: :trophy: we finished using Continuous Testing with Cypress Dashboard and Github Actions. :trophy: :trophy: :trophy:

