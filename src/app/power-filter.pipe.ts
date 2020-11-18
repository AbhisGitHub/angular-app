import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powerFilter'
})
export class PowerFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}