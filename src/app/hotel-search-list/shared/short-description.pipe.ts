import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'shortDescription'})
export class ShortDescription implements PipeTransform {
  transform(value: string): string {
    return value === undefined || value === ""  
      ? "" 
        : value.substring(0, 55).concat("...");
  }
}