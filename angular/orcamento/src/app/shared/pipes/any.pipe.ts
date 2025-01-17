import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'any' })
export class AnyPipe implements PipeTransform {
  transform<T = any>(value: T, possibleValues: T[]): boolean {
    return possibleValues.includes(value);
  }
}
