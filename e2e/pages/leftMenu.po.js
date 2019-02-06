const CommonActions = require('../core/CommonActions');
const {explicit} = require ('../../environment').timeout;
const inboxPage = require ('../pages/inboxPage.po');
class LeftMenu{
    constructor(){
        this.inboxOption    ='#filter_inbox';
        this.todayOption    ='.filter[data-track="navigation|today"]';
        this.next7Days      ='.filter[data-track="navigation|next_7_days"]';
        this.Projects       ='.reactist[data-track="navigation|projects_panel"]';
        this.addProject     ='.action[data-track="projects|add"]';
        this.filterOption   ='.reactist[data-track="navigation|filters_panel"]';
        this.welcomeProject ='.clickable.menu_clickable.indent_1.current';
        this.setNameProject ='.richtext_editor.sel_richtext_editor';
        this.filterToMe     ='.//span[.=\'Assigned to me\']';
        this.filterToOthers ='.//span[.=\'Assigned to others\']';
        this.addProjectButton='.ist_button';

    }

       clickInboxOption (){

        CommonActions.click(this.inboxOption);
        return new inboxPage();
       }
       clickTodayOption(){
        CommonActions.click(this.todayOption);
       }
       clickNext7Days(){
        CommonActions.click(this.next7Days);
       }
       clickNewProject(){
        CommonActions.click(this.Projects);
       }
       clickAddProject(){
        CommonActions.click(this.addProject);
       }
       clickFilterOption(){
        CommonActions.click(this.filterOption);
       }
       clickWelcomeProject(){
        CommonActions.click(this.welcomeProject);
       }
       setNameNewProject(nameProject){
        CommonActions.setValue(this.setNameProject, nameProject);
       }
       clickFilterToMe(){
        CommonActions.click(this.filterToMe);
       }
       clickFilterToOthers(){
        CommonActions.click(this.filterToOthers);
       }
}
module.exports =LeftMenu;