
const CommonActions = require('../core/CommonActions');
const {explicit} = require ('../../environment').timeout;


class InboxPage{

    constructor(){
        this.addTaskButton  = '.action_add_item';
        this.completedtasks= '.history_icon';
        this.setPriority   = '.icon_priority[data-track="task_form|priority"]';
        this.setProject    = '.form_action_icon[data-track="task_form|project"]';
        this.setTaskName   = '.richtext_editor.sel_richtext_editor';
        this.priorityTask2 = '.ist_menu.priority_menu .priorities .icon_priority_2';
        this.createTaskButton = '.manager.indent_1 .ist_button';
        this.projectActions = '.gear_icon';
        this.sortByName     ='.menu_item [data-track="project|actions_sort_by_name"]';
        this.taskName       = './/span[.=\'test1task\']';
        this.tasksItems     = '.list_editor .items';
    }

    addNewTaskButton(){
       CommonActions.click(this.addTaskButton);
    }
    setNewTaskName(taskName){
        CommonActions.setValue(this.setTaskName, taskName);
    }
    setPriority2Task(){
        CommonActions.click(this.setPriority);
        CommonActions.click(this.priorityTask2);
    }
    reviewCompletedTasks (){
        CommonActions.click(this.completedtasks);
    }
    clickCreateTaskButton(){
        CommonActions.click(this.createTaskButton);
    }
    clickProjectActionMenu(){
        CommonActions.click(this.projectActions);
    }
    setSortByName(){
        CommonActions.click(this.sortByName);
    }
    getTaskName() {
        return CommonActions.getTaskName(this.taskName);
    }
    getItems(){
        return CommonActions.getItems(this.tasksItems);
    }
}

module.exports =InboxPage;