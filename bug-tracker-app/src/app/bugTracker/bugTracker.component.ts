import { Component } from '@angular/core';

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
    bugs : string[] = [];

    onAddNewClick(bugName : string){
        this.bugs.push(bugName);
    }
}