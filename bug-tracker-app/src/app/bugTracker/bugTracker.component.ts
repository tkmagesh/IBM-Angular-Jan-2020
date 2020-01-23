import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from "./services/bugOperations.service";
import { forkJoin } from "rxjs";

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
    bugs : Bug[] = [];
    bugSortBy : string = 'name';
    bugSortDescending : boolean = false;
  
    constructor(private bugOperations : BugOperationsService){

    }

    ngOnInit(){
        //this.bugs = this.bugOperations.getAll();
        this.bugOperations
            .getAll()
            .subscribe(bugs => this.bugs = bugs);
    }

    onNewBugAdded(bug : Bug) : void{
        this.bugs = [...this.bugs, bug];
    }

    onBugNameClick(bugToToggle : Bug) : void {
        this.bugOperations
            .toggle(bugToToggle)
            .subscribe(toggledBug => this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug));
    }

    onRemoveClosedClick(): void {
        
        const allRemoveBugObservables = this.bugs
                .filter(bug => bug.isClosed)
                .map(closedBug => this.bugOperations.remove(closedBug));
        forkJoin(allRemoveBugObservables)
            .subscribe(() => this.bugs = this.bugs.filter(bug => !bug.isClosed));
        
    }

    
}