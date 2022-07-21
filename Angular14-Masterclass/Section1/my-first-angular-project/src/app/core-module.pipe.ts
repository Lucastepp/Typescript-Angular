import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coreModule'
})
export class CoreModulePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
