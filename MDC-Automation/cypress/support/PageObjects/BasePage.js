import 'cypress-wait-until';

class BasePage {

    waitSpinnerLoggin() {
        cy.xpath("//*[@calss='splash-spinner']").should('not.exist')
    }

    screen() {
        cy.compareSnapshot('Home Page', {
            capture: 'fullPage',
            errorThreshold: 0.0
        });
    }

    waitSpinnerSection(node) {
        cy.xpath("//*[@calss='ngx-overlay ngx-position-absolute loading foreground']").should('not.exist')
    }

    waitSpinnerTable(node) {
        cy.xpath("//mat-spinner").should('not.exist')
    }

    getNode(node) {
        node = "//*[@id='kt_aside']//a[@class='menu-link menu-toggle ng-star-inserted']//span[contains(text(), '" + node + "')]"
        return cy.waitUntil(() => cy.xpath(node).first())
    }

    getSubNode(subNode) {
        subNode = "//*[@id='kt_aside']//ul[@class='menu-subnav ng-star-inserted']//span[contains(text(), '" + subNode + "')]"
        return cy.waitUntil(() => cy.xpath(subNode).first())
    }

    getSubNodeChild(subNodeChild) {
        subNodeChild = "//*[@id='kt_aside']//li[@class='menu-item ng-star-inserted']//span[contains(text(), '" + subNodeChild + "')]"
        return cy.waitUntil(() => cy.xpath(subNodeChild).first())


        //Boton para agregar puerto
    }
    getNewButton() {
        return cy.waitUntil(() => cy.xpath("//button//span[contains(text(), 'Nuevo')]").first())
    }


    getCreateScript() {
        return cy.waitUntil(() => cy.xpath("//a[@mattooltip= 'Generar Script']").first())
    }
    getAcceptButton() {

        return cy.waitUntil(() => cy.xpath("//button[contains(text(), 'Aceptar')]").first())
    }

    getCopyButton() {

        return cy.waitUntil(() => cy.xpath("//a[@mattooltip= 'Copiar']").first())
    }
    getField(nameField) {
        nameField = "//input[contains(@data-placeholder, '" + nameField + "')]"
        return cy.waitUntil(() => cy.xpath(nameField).first())
    }

    getSelectField(selectField) {
        selectField = "//mat-select//span[contains(text(), '" + selectField + "')]"
        return cy.waitUntil(() => cy.xpath(selectField).first())
    }

    getInputOption() {
        return cy.waitUntil(() => cy.xpath("//span/ngx-mat-select-search/div/input").first())
    }

    getOptionList(value) {
        value = "//mat-option//span[contains(text(), '" + value + "')]"
        return cy.waitUntil(() => cy.xpath(value).first())
    }

    getSaveButton() {
        return cy.waitUntil(() => cy.xpath("//a[@mattooltip= 'Guardar']").first())
    }

    getSaveButtonModal() {
        return cy.waitUntil(() => cy.xpath("//*[@class='cdk-overlay-pane']//a[@maltooltip= 'Guardar')]").first())
    }

    getSaveButtonModalCommands() {
        return cy.waitUntil(() => cy.xpath("//*[@class='cdk-overlay-pane']//a[@mattooltip= 'Guardar']").first())
    }

    getSaveButtonModal0() {
        return cy.waitUntil(() => cy.xpath("//div[@style='transform: none;']//span[contains(text(), 'Guardar')]"))
    }

    getSaveButtonModal1() {
        return cy.waitUntil(() => cy.xpath("//div[@id='cdk-step-content-1-1']//span[contains(text(), 'Guardar')]").first())
    }

    getSaveButtonModal2() {
        return cy.waitUntil(() => cy.xpath("//div[@id='cdk-step-content-1-2']//span[contains(text(), 'Guardar')]").first())
    }

    getFinishButtonModal() {
        return cy.waitUntil(() => cy.xpath("//span[contains(text(), 'Finalizar')]").first())
    }

    getTooltipSave() {
        return cy.waitUntil(() => cy.xpath("//div[contains(text(), 'Guardado exitosamente')]").first())
    }

    getEllipseButton() {
        return cy.waitUntil(() => cy.xpath("//mat-icon").first())
    }

    getSaveContinue() {
        cy.wait(1000)
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Guardar y Continuar']").first())
    }

    getTab(value) {
        value = "//div[@class='mat-tab-label-content'][contains(text(), '" + value + "')]"
        return cy.waitUntil(() => cy.xpath(value).first())
    }

    getAdd() {
        return cy.waitUntil(() => cy.xpath("//i[@class='fa fa-plus']").first())
    }

    getAddDevice() {
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Agregar Dispositivo']"))
    }


    getModalSelectField(field) {
        return cy.waitUntil(() => cy.xpath("//*[@class='cdk-overlay-pane']//span[contains(text(), '" + field + "')]").first())
    }

    getModalNewField(field) {
        return cy.waitUntil(() => cy.xpath("//div[@class='cdk-overlay-pane']//input[contains(@data-placeholder,'" + field + "')]").first())
    }

    runScriptAgent() {
        cy.exec("sudo powershell C:\Users\pedro\OneDrive\Escritorio\MDC-Automation05-05Nuevo\MDC-Automation\cypress\scriptsPS\scriptInstall.ps1")
    }

    getModalSaveButton(field) {
        return cy.waitUntil(() => cy.xpath("//button[@maltooltip='Guardar']").first())
    }

    getSaveDevice(field) {
        return cy.waitUntil(() => cy.xpath("//a[@maltooltip='Guardar']").first())
    }

    getModalSaveButtonAsociar(field) {
        return cy.waitUntil(() => cy.xpath("//model-associate//a[@mattooltip='Guardar']").first())
    }


    getActivateButton() {
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Activar']").first())
    }

    getFindButton() {
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Buscar']").first())
    }

    getAceptPopUp() {
        return cy.waitUntil(() => cy.xpath("//button[contains(text(),'Aceptar')]").first())
    }

    getSelectFileButtonModal() {
        return cy.waitUntil(() => cy.xpath("//input[@formcontrolname='driverFile']").first())
    }

    getScript() {
        cy.xpath("//label").invoke('text').then((script) => {
            //cy.log("script del agente1: " + script.toString())
            cy.writeFile('cypress/scriptsPS/scriptInstall.ps1', script.toString())
            cy.exec(script.toString())
        })

    }

    getAsociarButton() {
        return cy.waitUntil(() => cy.xpath("//button[@mattooltip='Asociar Modelo']").first())
    }

    getSearchButtonModal() {
        return cy.waitUntil(() => cy.xpath("//a[@mattooltip= 'Buscar']").first())
    }

    //Botón nuevo grupo de dispositivos

    getNewDeviceGroup() {
        return cy.waitUntil(() => cy.xpath("//span[contains(text(), 'Nuevo')]").first())
    }

    getSelectField(selectField) {
        selectField = "//mat-select//span[contains(text(), '" + selectField + "')]"
        return cy.waitUntil(() => cy.xpath(selectField).first())
    }

    getFilter() {
        return cy.waitUntil(() => cy.xpath("//mat-panel-title").first())
    }

    getResultSearch(selectResult) {
        selectResult = "//mat-cell[contains(text(), '" + selectResult + "')]"
        return cy.waitUntil(() => cy.xpath(selectResult).first())
    }

    getFieldFilter(fieldFilter) {
        fieldFilter = "//input[@data-placeholder = '" + fieldFilter + "']"
        return cy.waitUntil(() => cy.xpath(fieldFilter).first())
    }
}
export default new BasePage