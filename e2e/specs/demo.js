//var assert = require('assert');

const credentials = require ('../../environment').credentials;
const CommonActions = require('../core/CommonActions');
const Login = require('../pages/login');

describe('Login to todoist', () => {
    it('Login', () => {
        browser.url('https://todoist.com/users/showlogin');

        //browser.waitForVisible('#s-user-login-form',30000);
        CommonActions.waitForVisible('.login_singup_form', 30000);

       Login.loginAs(credentials.sysadmin.username,credentials.sysadmin.password);

        CommonActions.waitForInVisible('#loading');
       // CommonActions.click('//button[text()="Add a task"]');
       //

        CommonActions.waitForVisible('#top_filters');
        CommonActions.click('#filter_inbox')

        CommonActions.click('.action_add_item');
        CommonActions.setValue('.richtext_editor ', 'testingtask 1');


        CommonActions.click('.ist_button');




        //
       // CommonActions.waitForVisible('#quick_find');




        browser.pause(30000);
    });
});
