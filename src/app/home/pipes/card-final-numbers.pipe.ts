import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardFinalNumbers',
})
export class CardFinalNumbersPipe implements PipeTransform {
  transform(value: any): string {
    let strValue: string = value.toString();
    return strValue.substr(strValue.length - 4, 4);
  }
}
