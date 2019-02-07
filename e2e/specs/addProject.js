
const credentials = require ('../../environment').credentials;
const Login = require('../pages/login');
const expect = require('chai').expect;

describe('Create a Project', ()=> {
    it('New Project', () => {
        browser.url('https://todoist.com/users/showlogin');

        let test1 = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password, 'leftMenu');
        test1.clickAddProject();
        test1.setNameNewProject('testProject19');
        test1.clickAddProjectButton();

        browser.pause(30000);
        expect(test1.getProjectName()[0]).to.equal('testProject19');
    })
})