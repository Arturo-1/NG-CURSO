import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miCustom'
})
export class MiCustomPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.toUpperCase();
  }

}
