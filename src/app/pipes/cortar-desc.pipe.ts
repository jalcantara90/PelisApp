import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cortarDesc'
})
export class CortarDescPipe implements PipeTransform {

  transform(value: string): string {

    if ( value.length > 200) {

      return value = value.substr(0,199) + '...';
    }
    
  }

}
