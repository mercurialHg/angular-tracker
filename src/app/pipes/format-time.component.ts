import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : "format"
})

export class Format implements PipeTransform {
    transform(value: number):string {
        return value < 10 ? "0" + value : "" + value;
    }
}