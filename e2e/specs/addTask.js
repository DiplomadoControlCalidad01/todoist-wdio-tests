
const credentials = require ('../../environment').credentials;
const CommonActions = require('../core/CommonActions');
const Login = require('../pages/login');
const expect = require('chai').expect;


describe('Create a Task', ()=> {
    it('New Task', () => {
        browser.url('https://todoist.com/users/showlogin');

        CommonActions.waitForVisible('.login_singup_form', 30000);

        let test1 = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password, 'leftMenu');
        let test2 =test1.clickInboxOption();

        test2.addNewTaskButton();
        test2.setNewTaskName('test1task');
        test2.setPriority2Task();
        test2.clickCreateTaskButton();

        expect(test2.getTaskName()).to.equal('test1task');


    })
})