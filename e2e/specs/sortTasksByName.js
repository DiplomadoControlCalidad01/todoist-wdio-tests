
const credentials = require ('../../environment').credentials;
const CommonActions = require('../core/CommonActions');
const Login = require('../pages/login');
const expect = require('chai').expect;


describe('Sort tasks by name', ()=> {
    it('Sorted', () => {
        browser.url('https://todoist.com/users/showlogin');

        CommonActions.waitForVisible('.login_singup_form', 30000);

        let test1 = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password, 'leftMenu');
        let test2 =test1.clickInboxOption();

        test2.clickProjectActionMenu();
        test2.setSortByName();
        console.log(test2.getItems().value[0]);


    })
})