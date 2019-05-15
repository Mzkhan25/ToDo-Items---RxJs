import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoStatus'
})
export class TodoStatusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value)
    return "Done"
    else
      return "Pending"

    
  }

}
