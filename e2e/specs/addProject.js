
const credentials = require ('../../environment').credentials;
const Login = require('../pages/login');
const Api = require('../core/api.js');
const expect = require('chai').expect;

describe('Create a Project', ()=> {
    let page;

    beforeEach(function () {
        page = new Api();
        page.open();
    })

    it('New Project', function () {
        page.leftMenu.clickAddProject();
        page.leftMenu.setNameNewProject('TestProject');
        page.leftMenu.clickAddProjectButton();
        let createdProject = page.leftMenu.getProjectsList();
        expect(createdProject[createdProject.length - 2]).to.equal('TestProject');
    })
    // it('New Project', () => {
    //     // browser.url('https://todoist.com/users/showlogin');
    //     //
    //     // let test1 = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password, 'leftMenu');
    //     // let newProject = {
    //     //     name:'testProject19'
    //     // }
    //     // test1.clickAddProject();
    //     // test1.setNameNewProject(newProject.name);
    //     // test1.clickAddProjectButton();
    //     //
    //     //        let createdProject = test1.getProjectsList();
    //     // expect(createdProject[createdProject.length - 2]).to.equal(newProject.name);
    //
    //
    //
    //     // expect(test1.getProjectName()[0]).to.equal('testProject19');
    // })
})