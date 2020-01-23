import { Component, OnInit } from '@angular/core';
import { Bug } from './models/Bug';
import { BugOperationsService } from "./services/bugOperations.service";

@Component({
    selector : 'app-bug-tracker',
    templateUrl : 'bugTracker.component.html'
})
export class BugTrackerComponent implements OnInit{
    bugs : Bug[] = [];
    bugSortBy : string = 'name';
    bugSortDescending : boolean = false;
    
    newBugName : string = '';

    /* bugOperations : BugOperationsService ;

    constructor(operations : BugOperationsService){
        this.bugOperations = operations;
    } */

    constructor(private bugOperations : BugOperationsService){

    }

    ngOnInit(){
        this.bugs.push({ name : 'Server communicatioin failure', isClosed : false});
        this.bugs.push({ name: 'User actions not recognized', isClosed: true });
        this.bugs.push({ name: 'Data integrity checks failed', isClosed: false });
        this.bugs.push({ name: 'Application not responding', isClosed: true });
    }

    onAddNewClick(bugName : string){
        const newBug = this.bugOperations.createNew(bugName);    
        this.bugs = [...this.bugs, newBug];
    }

    onBugNameClick(bugToToggle : Bug) : void {
        const toggledBug = this.bugOperations.toggle(bugToToggle);
        this.bugs = this.bugs.map(bug => bug === bugToToggle ? toggledBug : bug);
    }

    onRemoveClosedClick(): void {
        this.bugs = this.bugs.filter(bug => !bug.isClosed);
    }

    getClosedCount() : number {
        return this.bugs.reduce((result, bug) => bug.isClosed ? ++result : result, 0);
    }
}