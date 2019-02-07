const {explicit} = require ('../../environment').timeout;

class CommonActions {

    static setValue(locator, value){
        browser.waitForVisible(locator,explicit);
        browser.element(locator).setValue(value);

    }

    static click(locator){

        browser.waitForVisible(locator,explicit);
        browser.element(locator).click();

    }

    static waitForVisible(locator){
        browser.waitForVisible(locator,explicit);

    }
    static waitForInVisible(locator){
        browser.waitForVisible(locator,explicit, true);

    }

    static selectByValue(locator, value){
        browser.waitForVisible(locator,explicit);
        browser.element(locator).selectByValue(value);
    }

    static enter() {
       // browser.waitForVisible(locator, explicit);
        browser.keys('\n');
    }
    static getTaskName(locator){
        browser.waitForVisible(locator,explicit);
        return browser.getText(locator);
    }
    static getProjectName(locator){
        browser.waitForVisible(locator,explicit);
        return browser.getText(locator);
    }

    static getItems(locator){
        browser.waitForVisible(locator,explicit);
        return browser.elements(locator);
    }
}
module.exports = CommonActions;