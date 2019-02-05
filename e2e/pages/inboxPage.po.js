
const CommonActions = require('../core/CommonActions');
const {explicit} = require ('../../environment').timeout;


class InboxPage{

    constructor(){
        this.addTaskInbox  = '.action_add_item';
        this.completedtasks= '.history_icon';
        this.setPriority   = '.icon_priority';
        this.setProject    = '.form_action_icon[data-track="task_form|project"]';
    }

    addNewTaskInbox(){


    }

}