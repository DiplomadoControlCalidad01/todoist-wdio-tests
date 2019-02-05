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

    static enter(locator) {
        browser.waitForVisible(locator, explicit);
        browser.keys('\n');
    }
}
module.exports = CommonActions;