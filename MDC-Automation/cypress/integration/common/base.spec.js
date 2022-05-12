import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/PageObjects/LoginPage";
import BasePage from "../../support/PageObjects/BasePage";
import MainPage from '../../support/PageObjects/components/MainPage';
import ServicesPage from "../../support/Services/ServicesPage";
//import { url } from "wd/lib/commands";


describe('Base', () => {

        //const aleatory = Math.floor(Math.random() *100)+1
        //var valueRandom = aleatory

        Given('I take token whit my {string} and my {string}', () => {
            LoginPage.token()
        })

        Given('I open MDC page on Chrome Browser', () => {
            LoginPage.navigate()
            BasePage.waitSpinnerLoggin()
            BasePage.screen()
            cy.wait(2000)
            //cy.document().toMatchImageSnapshot()  

            MainPage.footer()
            //Second Element Screenshot
            MainPage.menu()
            //cy.exec("rm cypress/integration/features/__image_snapshots__")
            //Full page plus renaming screenshot
           // cy.document().toMatchImageSnapshot({
               // name: 'Screenshot Blogs related to Cypress'
            //})
        })
        
        Given('I check services {string}', (service) => {
            ServicesPage.validationService(service)
        })

        When('I complete my {string} and my {string}', (username, password) => {
            LoginPage.getUsernameInput().type(username)
            LoginPage.getPasswordInput().type(password)
            LoginPage.getIntoButton().click()
            cy.wait(10000)
        })

        When('I go to the Node {string} of the menu', (node) => {
            cy.wait(2000)
            BasePage.getNode(node).click()
        })

        When('I go to the subNode {string} of the menu', (subNode) => {
            cy.wait(2000)
            BasePage.getSubNode(subNode).click()
        })

        When('I go to the subNodeChild {string} of the menu', (subNodeChild) => {
            BasePage.getSubNodeChild(subNodeChild).click()
            BasePage.waitSpinnerSection()
        })

        When('I press on New button', () => {
            BasePage.getNewButton().click()
        })

        When('I type {string} in the field {string}', (value,field) => {
            BasePage.getField(field).type(value)
        })


        When('I select {string} in the field {string}', (value,selectField) => {
            BasePage.getSelectField(selectField).click()
            BasePage.getInputOption().type(value)
            BasePage.getOptionList(value).click()
        })

        When('I press on the Save button', () => {
            BasePage.getSaveButton().click()
            BasePage.waitSpinnerSection()
        })

        When('I press on the Save button of modal', () => {
            BasePage.getSaveButtonModal().click()
            BasePage.waitSpinnerSection()
        })

        When('I press on the Save&Continue', () => {
            BasePage.getEllipseButton().click()
            BasePage.getSaveContinue().click()
            BasePage.waitSpinnerSection()
            //BasePage.getTooltipSave().should('exist', 'The component was created correctly')
        })

        When('I go to {string} tab', (tabName) => {
            cy.wait(3000)
            BasePage.waitSpinnerSection()
            BasePage.getTab(tabName).click({force: true})
            BasePage.waitSpinnerSection()
        })

        When('I validate that not exist in the {string} database the value {string} for the {string} field', (database, value, field) => {
            cy.sqlServer(`DELETE FROM dbo.` + database + ` WHERE ` + field + `= '`+ value + `'`).then((result) => {
                cy.log("Result query delete: " + result)
              });
        })

        Then('I see the menssage that indicate the correctly save', () => {
            BasePage.getTooltipSave().should('exist', 'The component was created correctly')
        })

        When('I press on New button', () => {
            BasePage.getNewButton().click()
        })

        Then('I verify that in the {string} database there is a record with the value {string} for the {string} field', (database,value,field) => {
            cy.sqlServer(`SELECT ` + field + ` FROM dbo.` + database + ` WHERE ` + field + `= '`+ value + `'`).then((result) => {
                expect(result).to.equal(value)
              });
        })
    
        Then('I filter by {string} for {string}', (value, field) => {
            BasePage.waitSpinnerSection()
            cy.wait(2000)
            BasePage.getFilter().click()
            BasePage.waitSpinnerSection()
            BasePage.getFieldFilter(field).click()
            BasePage.getFieldFilter(field).type(value)
            BasePage.getFindButton().click()
            BasePage.getResultSearch(value)
            cy.wait(2000)
        })
    })
