const CommonActions = require('../core/CommonActions');
const {explicit} = require ('../../environment').timeout;

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
    static loginAs(username, password){
        let login = new Login();
        login.setEmailTextField(username);
        login.setPasswordTextField(password);
        login.clickLoginButton();
    }

}
module.exports =Login;