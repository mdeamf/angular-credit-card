import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardNumbers',
})
export class CardNumbersPipe implements PipeTransform {
  transform(value: any): string {
    let strValue: string = value.toString();
    let strValueFragment: string = '';
    let strValueSeparated: string = '';

    strValue.padStart(16, '0');

    for (let char of strValue) {
      strValueFragment += char;
      if (strValueFragment.length === 4) {
        strValueFragment += ' ';
        strValueSeparated += strValueFragment;
        strValueFragment = '';
      }
    }

    return strValueSeparated.trim();
  }
}
