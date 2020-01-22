import { Component } from '@angular/core';
import { CalculatorModel } from './CalculatorModel';

@Component({
    selector : 'app-calculator-1',
    styles : [
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
        <h3>Calculator-1</h3>
        <hr>
        <input type="number" (change)="model.n1 = $event.target.valueAsNumber">
        <input type="number" (change)="model.n2 = $event.target.valueAsNumber">
        <br>
        <input type="button" value="Add" (click)="model.add()" >
        <input type="button" value="Subtract" (click)="model.subtract()">
        <input type="button" value="Multiply" (click)="model.multiply()">
        <input type="button" value="Divide" (click)="model.divide()">
        <div [ngClass]="{positive : model.result >= 0, negative : model.result < 0}">
            {{model.result  | currency:'INR'}}
        </div>
    `
})
export class CalculatorOneComponent{

    model : CalculatorModel = new CalculatorModel();
    
}