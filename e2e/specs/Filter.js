//var assert = require('assert');

const credentials = require ('../../environment').credentials;
const CommonActions = require('../core/CommonActions');
const Login = require('../pages/login');

describe('Filter tasks, Projects', () => {
    it('Login', () => {
        browser.url('https://todoist.com/users/showlogin');

        //browser.waitForVisible('#s-user-login-form',30000);
        CommonActions.waitForVisible('.login_singup_form', 30000);

        Login.loginAs(credentials.sysadmin.username,credentials.sysadmin.password);

        CommonActions.waitForInVisible('#loading');
        // CommonActions.click('//button[text()="Add a task"]');
        //

        //CommonActions.waitForVisible('.reactist[data-track="navigation|filters_panel"]');
        CommonActions.click('.reactist[data-track="navigation|filters_panel"]');

        // CommonActions.click('.action_add_item');
       // CommonActions.setValue('.sel_richtext_editor', 'testingProject 1');


        CommonActions.click('.//span[.=\'Assigned to me\']');

        CommonActions.click('.//span[.=\'Assigned to others\']');







        //
        // CommonActions.waitForVisible('#quick_find');




        browser.pause(30000);
    });
});
