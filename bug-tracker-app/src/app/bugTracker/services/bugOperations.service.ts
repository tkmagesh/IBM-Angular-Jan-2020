import { Bug } from '../models/Bug';
import { Injectable } from '@angular/core';
import { BugApi } from "./bugApi.service";
import { Observable } from 'rxjs';

@Injectable()
export class BugOperationsService{

    constructor(private bugApi : BugApi){

    }
    createNew(bugName : string) : Observable<Bug>{
        const newBug: Bug = {
            id : 0,
            name: bugName,
            isClosed: false,
            createdAt : new Date()
        };
        return this.bugApi.save(newBug);
    }

    toggle(bugToToggle : Bug) : Observable<Bug> {
        const toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
        return this.bugApi.save(toggledBug);
    }

    remove(bug : Bug) : Observable<any>{
        return this.bugApi.remove(bug);
    }

    getAll() : Observable<Bug[]> {
        return this.bugApi.getAll();
    }
}

//key - 'Bug-1