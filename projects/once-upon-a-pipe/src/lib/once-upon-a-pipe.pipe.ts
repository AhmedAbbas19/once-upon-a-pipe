import { Pipe, PipeTransform } from '@angular/core';

interface Interval {
  unit: string;
  value: number;
}

@Pipe({
  name: 'onceUponAPipe'
})
export class OnceUponAPipePipe implements PipeTransform {
  intervals: Interval[] = [
    {unit: 'year', value: 31536000},
    {unit: 'month', value: 2592000},
    {unit: 'week', value: 604800},
    {unit: 'day', value: 86400},
    {unit: 'hour', value: 3600},
    {unit: 'minute', value: 60},
    {unit: 'second', value: 1}
  ]

  transform(value: any, args?: any): any {
    if (value) {
      let counter = 0;
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      const suffix = seconds < 0 ? 'from now' : 'ago';

      if (seconds > -1 && seconds < 29) return 'Just now';

      const interval = this.intervals.find( interval => {
        counter = Math.floor(Math.abs(seconds) / interval.value);
        return counter > 0;
      });

      return `${counter} ${interval?.unit}${counter > 1 ? 's' : ''} ${suffix}`;
    }
    return value;
  }
}
