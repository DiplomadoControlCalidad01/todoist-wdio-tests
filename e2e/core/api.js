const credentials = require ('../../environment').credentials;
const Login = require('../pages/login');
const LeftMenu = require('../pages/leftMenu.po.js');

class Api{
    constructor(){
        this.path = 'https://todoist.com/users/showlogin';
    }

    get leftMenu () {
        let result = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password, 'leftMenu');
        return result;
    };

    open(){
        browser.url(this.path);
    }

}

module.exports = Api;