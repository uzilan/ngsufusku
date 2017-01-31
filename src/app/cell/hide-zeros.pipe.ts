import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hideZeros'
})
export class HideZerosPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value === 0 ? "" : value;
  }

}
