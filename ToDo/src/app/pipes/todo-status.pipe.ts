import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoStatus'
})
export class TodoStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return (value) ? "Done" : "Pending";
  }
}
