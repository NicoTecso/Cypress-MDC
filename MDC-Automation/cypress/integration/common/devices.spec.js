import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../support/PageObjects/LoginPage";
import BasePage from "../../support/PageObjects/BasePage";


describe('Devices', () => {

    When('I press on add', () => {
        //Click asociar
        cy.wait(2000)
        BasePage.waitSpinnerSection()
        BasePage.getAdd().click()
    })

    When('I press on Add Device', () => {
        //Click asociar
        cy.wait(2000)
        BasePage.waitSpinnerSection()
        BasePage.getAddDevice().click()
    })
           
    When('I press on Asociar button', () => {
        //Click asociar
        cy.wait(2000)
        BasePage.waitSpinnerSection()
        BasePage.getAsociarButton().click()
    })

         
    When('I press on Generar script instalación', () => {
        //Click Generar Script
        cy.wait(2000)
        BasePage.waitSpinnerSection()
        BasePage.getCreateScript().click()
        cy.wait(2000)
        BasePage.waitSpinnerSection()
        BasePage.getScript()
        BasePage.runScriptAgent()
    })

    When('I press on Aceptar button of modal', () => {
        //Click Aceptar
        cy.wait(2000)
        BasePage.waitSpinnerSection()
        cy.wait(2000)
        BasePage.getAcceptButton().click()
    })

    When('I press on Copiar', () => {
        //Click para Copiar Script
        cy.wait(2000)
        BasePage.waitSpinnerSection()
        BasePage.getCopyButton().click()
    })

    When('In the modal I select {string} in the field {string}', (value,field) => {
        //seleccion de driver
        BasePage.getModalSelectField(field).click()
        BasePage.getInputOption().type(value)
        BasePage.getOptionList(value).click()
    })

    When('In the modal I type {string} in the field {string}', (value,field) => {
        //seleccion de driver
        BasePage.getModalSelectField(field).click()
        BasePage.getModalSelectField(field).type(value)
    })

    When('In the existing modal I type {string} in the field {string}', (value,field) => {
        //seleccion de driver
        BasePage.getModalNewField(field).click()
        BasePage.getModalNewField(field).type(value)
    })

    When('I press on Save button modal', () => {
        //Guardar
        BasePage.waitSpinnerSection()
        BasePage.getModalSaveButton().click()

        //validacion de asociacion correcta
        BasePage.getTooltipSave().should('exist', 'The component was created correctly')
    })
    
    When('I press on Save Device', () => {
        //Guardar
        BasePage.waitSpinnerSection()
        BasePage.getSaveDevice().click()

        //validacion de asociacion correcta
        BasePage.getTooltipSave().should('exist', 'The component was created correctly')
    })
    
    When('I press on Save button modal Asociar', () => {
        //Guardar
        BasePage.waitSpinnerSection()
        BasePage.getModalSaveButtonAsociar().click()

    })
    When('I press on Save button modal Commands', () => {
        //Guardar
        BasePage.waitSpinnerSection()
        BasePage.getSaveButtonModalCommands().click()

    })

    //SaveButtonModalCommands
    

    When('I activate the driver', () => {
        //Click asociar
        BasePage.waitSpinnerSection()
        BasePage.getActivateButton().click()
        BasePage.getSelectFileButtonModal().attachFile("virtual_a_vm_tcp.1.0.3_fix3.zip")
        BasePage.waitSpinnerSection()
        cy.wait(2000)
        BasePage.getSaveButtonModal0().click()
        BasePage.waitSpinnerSection()
        cy.wait(2000)
        BasePage.getSaveButtonModal0().click()
        BasePage.waitSpinnerSection()
        cy.wait(2000)
        BasePage.getSaveButtonModal0().click()
        BasePage.waitSpinnerSection()
        cy.wait(2000)
        BasePage.getFinishButtonModal().click()
        BasePage.waitSpinnerSection()
        cy.wait(2000)
    })
})