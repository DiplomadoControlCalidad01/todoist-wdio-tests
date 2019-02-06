//var assert = require('assert');

const credentials = require ('../../environment').credentials;
const CommonActions = require('../core/CommonActions');
const Login = require('../pages/login');


describe('Create a Task', () => {
    it('Login', () => {
        browser.url('https://todoist.com/users/showlogin');

        //browser.waitForVisible('#s-user-login-form',30000);
        CommonActions.waitForVisible('.login_singup_form', 30000);

       let topBar = Login.loginAs(credentials.sysadmin.username,credentials.sysadmin.password);
       topBar.searchItem('testingtask 1');

       let content = new Content();
       content.clickAddButton();
       content.setName('test');
       //
       //
       //  CommonActions.waitForInVisible('#loading');
       // // CommonActions.click('//button[text()="Add a task"]');
       // //
       //
       //  CommonActions.waitForVisible('#top_filters');
       //  CommonActions.click('#filter_inbox')
       //
       //  CommonActions.click('.action_add_item');
       //  CommonActions.setValue('.richtext_editor ', 'testingtask 8');
       //
       //
       //  CommonActions.click(' .icon_priority[data-track="task_form|priority"]');
       //  CommonActions.click(' .ist_menu.priority_menu .priorities .icon_priority_2');
       //
       //  CommonActions.click('.input_due_date');
       //  CommonActions.click('.scheduler-suggestions-item[data-track="scheduler|date_shortcut_tomorrow"] .scheduler-suggestions-item-label ');
       //
       //
       //  CommonActions.click('.form_action_icon[data-track="task_form|project"]');
       //  CommonActions.click('#ist_complete_result .ist_complete_item.current_match .ist_complete_content .truncated.p_name');
       //  //
       //  // CommonActions.click('.form_action_icon[data-track="task_form|project"]');
       //  // CommonActions.click('.form_action_icon[data-track="task_form|project"]');
       //
       //
       //
       //
       //
       //
       //  CommonActions.click('.ist_button');
       //
       //
       //
       //
       //  //
       // // CommonActions.waitForVisible('#quick_find');
       //



        browser.pause(30000);
    });
});
