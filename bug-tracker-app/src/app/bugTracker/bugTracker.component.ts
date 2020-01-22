import { Component } from '@angular/core';

interface Bug{
    name : string,
    isClosed : boolean
}

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
    bugs : Bug[] = [];

    onAddNewClick(bugName : string){
        const newBug : Bug = {
            name : bugName,
            isClosed : false
        } ;
        this.bugs.push(newBug);
    }

    onBugNameClick(bug : Bug) : void {
        bug.isClosed = !bug.isClosed;
    }
}