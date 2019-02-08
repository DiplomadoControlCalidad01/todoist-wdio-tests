
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
        let newTask = {
            name:'test1task2'
        }
        test2.addNewTaskButton();
        test2.setNewTaskName(newTask.name);
        test2.setPriority2Task();
        test2.clickCreateTaskButton();
        test2.getParametersList();

        let createdTask = test2.getParametersList();
        expect(createdTask[createdTask.length - 2]).to.equal(newTask.name);


    })
})