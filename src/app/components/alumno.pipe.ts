import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alumno'
})
export class AlumnoPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
