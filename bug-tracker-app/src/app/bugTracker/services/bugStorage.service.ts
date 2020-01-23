import { Bug } from '../models/Bug';

export class BugStorageService{
    private currentBugId : number = 0;
    private storage = window.localStorage;

    save(bugData) : Bug {
        if (bugData.id === 0)
            bugData.id = ++this.currentBugId;
        this.storage.setItem('bug-' + bugData.id, JSON.stringify(bugData));
        return bugData;
    }

    remove(bugData) : void {
        this.storage.removeItem('bug-' + bugData.id);
    }

    getAll() : Bug[]{
        const result : Bug[] = [];
        for(let index = 0, count = this.storage.length; index < count; index++){
            const key = this.storage.key(index);
            if (!key.startsWith('bug-')) continue;
            const rawData = this.storage.getItem(key);
            const bug = JSON.parse(rawData);
            this.currentBugId = this.currentBugId < bug.id ? bug.id : this.currentBugId;
            result.push(bug);
        }
        return result;
    }
}