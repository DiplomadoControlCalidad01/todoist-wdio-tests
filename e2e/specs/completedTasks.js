const credentials = require ('../../environment').credentials;
const Login = require('../pages/login');

describe('review tasks completed', ()=> {
    it('Tasks completed', () => {
        browser.url('https://todoist.com/users/showlogin');

        let test1 = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password, 'leftMenu');
        let test2 = test1.clickInboxOption();

        test2.reviewCompletedTasks();

    })
})