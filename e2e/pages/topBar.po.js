const CommonActions = require('../core/CommonActions');
const {explicit} = require ('../../environment').timeout;

class TopBarPo{

    constructor(){
        this.SearchField = '.quick_find';
        this.AddButton   = 'quick_add_task_holder';

    }

    clickAddTaskButton(){
        CommonActions.click(this.AddButton);
    }

    setSearchField(item){
        CommonActions.setValue(this.SearchField, item);
        CommonActions.enter(this.SearchField);
    }
}