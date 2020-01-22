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

    onRemoveClosedClick(): void {
        this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }

    getClosedCount() : number {
        return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}