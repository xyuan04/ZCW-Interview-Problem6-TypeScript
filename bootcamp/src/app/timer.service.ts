import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  timeConvertor(hourform: string, minform: string, ampm: string): string {
    const PM = ampm.match('PM') ? true : false;
    let hour;
    let min;
    const numbers = ['Zero', 'One', 'Two', 'Three', 'Four',
    'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen',
    'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen',
    'Eighteen', 'Nineteen', 'Twenty', 'Twenty One',
    'Twenty Two', 'Twenty Three', 'Twenty Four',
    'Twenty Five', 'Twenty Six', 'Twenty Seven',
    'Twenty Eight', 'Twenty Nine', 'Thirty', 'Thirty One',
    'Thirty Two', 'Thirty Three', 'Thirty Four', 'Thirty Five',
    'Thirty Six', 'Thirty Seven', 'Thirty Eight', 'Thirty Nine',
    'Forty', 'Forty One', 'Forty Two', 'Forty Three', 'Forty Four',
    'Forty Five', 'Forty Six', 'Forty Seven', 'Forty Eight', 'Forty Nine',
    'Fifty', 'Fifty One', 'Fifty Two', 'Fifty Three', 'Fifty Four',
    'Fifty Five', 'Fifty Six', 'Fifty Seven', 'Fifty Eight', 'Fifty Nine'];

    const timeArray = [hourform, minform, ampm];

    if (timeArray[0] === '12') {
      timeArray[0] = '0';
    }

    if (PM) {
        hour = 12 + parseInt(timeArray[0], 10);
        min = timeArray[1].replace('PM', '');
        min = parseInt(min, 10);
    } else {
        hour = timeArray[0];
        hour = parseInt(hour, 10);
        min = timeArray[1].replace('AM', '');
        min = parseInt(min, 10);
    }

    if (min < 10) {
      return `${numbers[hour]} Hundred and Zero ${numbers[min]} Hours`;
    } else {
      return `${numbers[hour]} Hundred and ${numbers[min]} Hours`;
    }
}

}
