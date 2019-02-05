const CommonActions = require('../core/CommonActions');
const {explicit} = require ('../../environment').timeout;

class LeftMenu{
    constructor(){
        this.inboxOption= '#filter_inbox';
        this.todayOption= '.filter[data-track="navigation|today"]';
        this.next7Days  = '.filter[data-track="navigation|next_7_days"]';
        this.newProject = '.reactist[data-track="navigation|projects_panel"]';
        this.addProject = '.action[data-track="projects|add"]';
        this.filterOption ='.reactist[data-track="navigation|filters_panel"]';
    }

       clickInboxOption (){
        CommonActions.click(this.inboxOption);
       }

       

}