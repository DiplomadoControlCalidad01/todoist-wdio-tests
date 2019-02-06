const CommonActions = require('../core/CommonActions');
const {explicit} = require ('../../environment').timeout;
const TopBar = require('./topBar.po');
const InboxPage = require('./inboxPage.po');
const LeftMenu = require('./leftMenu.po');

class Login{

    setEmailTextField(username){

        CommonActions.setValue('#email', username);

    }
    setPasswordTextField(password){

        CommonActions.setValue('#password',password);


    }
    clickLoginButton(){
        CommonActions.click('#login_form a[href="#"');
    }
    static loginAs(username, password, component){
        let login = new Login();
        login.setEmailTextField(username);
        login.setPasswordTextField(password);
        login.clickLoginButton();

        let componentResult;
        switch(component){
            case "inboxPage":
                componentResult = new InboxPage();
                break;
            case "leftMenu":
                componentResult = new LeftMenu();
                break;
            case "topBar":
                componentResult = new TopBar();
                break;
        }
        CommonActions.waitForInVisible('#loading');
        return componentResult;

    }

}
module.exports =Login;