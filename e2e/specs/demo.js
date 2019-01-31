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
        CommonActions.setValue('.richtext_editor ', 'testingtask 8');


        CommonActions.click(' .icon_priority[data-track="task_form|priority"]');
        CommonActions.click(' .ist_menu.priority_menu .priorities .icon_priority_2');


        CommonActions.click('.input_due_date');








        CommonActions.click('.ist_button');




        //
       // CommonActions.waitForVisible('#quick_find');




        browser.pause(30000);
    });
});
