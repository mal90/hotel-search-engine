import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shortDescription'})
export class HotelShortDescription implements PipeTransform {
  transform(value: string): string {
    /**
     * Make a short description for display purpose and better UX
    */
    return value === undefined || value === ""  
      ? "" 
        : value.substring(0, 55).concat("...");
  }
}