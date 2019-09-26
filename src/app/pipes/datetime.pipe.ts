import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import {DateTime} from 'luxon';

@Pipe({
  name: 'datetime'
})
export class DatetimePipe implements PipeTransform {


  transform(value: any, ...args: string[]): any {
    if (args[0] === 'moment') {
      if (!value) {
        return null;
      }
      let date = moment(value);
      const isoDatetime = DateTime.fromISO(date.toISOString());
      date = moment(isoDatetime.setZone('Asia/Dubai').toISO()); // get timezone from USERPROFILE locale

      if (args[1] === 'format') {
        return date.format(args[2]);
      }
      if (args[1] === 'calendar') {
        return date.calendar();
      }
      if (args[1] === 'calendarNoAt') {
        return date.calendar().split(' at')[0];
      }
      if (args[1] === 'fromNow') {
        return date.fromNow();
      }

      if (args[1] === 'datetime_at') {
        return date.format('LL [at] h:mm a');
      }

      if (args[1] === 'datetime') {
        return date.format('LL h:mm a');
      }

      if (args[1] === 'date') {
        return date.format('LL');
      }

      if (args[1] === 'calendar2') {
        const now = moment(new Date());

        const duration = moment.duration(now.diff(date));
        const days = duration.asDays();
        return days < 1 ? date.calendar() : date.format('LL [at] h:mm a');
      }

    }
  }

}
