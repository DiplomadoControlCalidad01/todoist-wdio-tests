
const credentials = require ('../../environment').credentials;
const CommonActions = require('../core/CommonActions');
const Login = require('../pages/login');


describe('Seacrh tasks', ()=> {
    it('searching Tasks', () => {
        browser.url('https://todoist.com/users/showlogin');

        CommonActions.waitForVisible('.login_singup_form', 30000);

        let test1 = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password, 'topBar');

        test1.setSearchField('test');


    })
})