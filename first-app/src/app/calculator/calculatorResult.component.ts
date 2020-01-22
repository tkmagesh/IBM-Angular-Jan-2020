import { Component, Input } from "@angular/core";

@Component({
    selector : 'app-calculator-result',
    styles: [
        `
            .positive {
                color : green
            }
        `,
        `
            .negative{
                color : red
            }
        `
    ],
    template : `
        <div [ngClass]="{positive : data >= 0, negative : data < 0}">
            {{data  | currency:'INR'}}
        </div>
    `
})
export class CalculatorResultComponent{
    @Input()
    data : number = 0;
}