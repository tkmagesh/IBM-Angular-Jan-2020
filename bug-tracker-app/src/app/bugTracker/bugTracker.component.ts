import { Component } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from "./services/bugOperations.service";

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent{
    bugs : Bug[] = [];
    
    /* bugOperations : BugOperationsService ;

    constructor(operations : BugOperationsService){
        this.bugOperations = operations;
    } */

    constructor(private bugOperations : BugOperationsService){
        
    }

    onAddNewClick(bugName : string){
        const newBug = this.bugOperations.createNew(bugName);    
        this.bugs.push(newBug);
    }

    onBugNameClick(bug : Bug) : void {
        this.bugOperations.toggle(bug);
    }

    onRemoveClosedClick(): void {
        this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }

    getClosedCount() : number {
        return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}