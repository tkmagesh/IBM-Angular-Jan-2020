import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'sort'
})
export class SortPipe implements PipeTransform{
    private getDescendingCompare(comparer)  {
        return function comparerByName(o1, o2) : number {
            return comparer(o1, o2) * -1;
        }
    }
    private getComparerFor(attrName){
        return function comparerByName(o1, o2) : number {
            if (o1[attrName] < o2[attrName]) return -1;
            if (o1[attrName] > o2[attrName]) return 1;
            return 0;
        }
    }
    transform(data : any[], attrName : string, isDesc : boolean = false) : any[]{
        if (!data || !data.length || !attrName) return data;
        let comparer = this.getComparerFor(attrName);
        if (isDesc)
            comparer = this.getDescendingCompare(comparer);
        return data.sort(comparer);
    }
}