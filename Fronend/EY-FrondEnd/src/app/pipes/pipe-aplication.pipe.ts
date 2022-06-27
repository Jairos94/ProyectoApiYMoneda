import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeAplication'
})
export class PipeAplicationPipe implements PipeTransform {
  DateT: Date = new Date();

  transform(name: string): string {
    let hi: string = '';
    if (this.DateT.getHours() > 0 && this.DateT.getHours() < 11) {
      hi = `Good morning ${name}`;
    }
    else {
      if (this.DateT.getHours() > 12 && this.DateT.getHours() < 18) {
        hi = `Good affternoon ${name}`;
      }
      else {
        hi = `Good evening ${name}`;
      }
    }

    return hi;
  }

}
