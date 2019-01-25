const commonActions = require('../core/CommonActions');

const AppLauncherModal = require('../pages/appLauncherModal.po');

class Header {

    constructor() {
        this.appLaucherButton = '#top_bar_inner';
    }

    clickAppLauncherButton()  {
        commonActions.click(this.appLaucherButton);
        return new AppLauncherModal();
    }

}

module.exports = Header;



