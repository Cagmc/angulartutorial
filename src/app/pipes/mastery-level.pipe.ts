import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'masteryLevel'})
export class MasteryLevelPipe implements PipeTransform {
  transform(value: number): string {
    let level;

    switch (value) {
        case 0:
            level = 'None';
            break;
        case 1:
            level = '3rd Class';
            break;
        case 2:
            level = '2nd Class';
            break;
        case 3:
            level = '1st Class';
            break;
        case 4:
            level = 'Ace Tanker';
            break;
    }

    return level;
  }
}
