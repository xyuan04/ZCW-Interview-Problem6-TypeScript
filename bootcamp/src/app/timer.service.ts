import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  timeConvertor(time: string): string {
    let PM = time.match('PM') ? true : false
    let hour;
    let min;
    let numbers = ["zero", "one", "two", "three", "four",
    "five", "six", "seven", "eight", "nine",
    "ten", "eleven", "twelve", "thirteen",
    "fourteen", "fifteen", "sixteen", "seventeen",
    "eighteen", "nineteen", "twenty", "twenty one",
    "twenty two", "twenty three", "twenty four",
    "twenty five", "twenty six", "twenty seven",
    "twenty eight", "twenty nine", "thirty", "thirty one",
    "thirty two", "thirty three", "thirty four", "thirty five",
    "thirty six", "thirty seven", "thirty eight", "thirty nine",
    "forty", "forty one", "forty two", "forty three", "forty four",
    "forty five", "forty six", "forty seven", "forty eight", "forty nine",
    "fifty", "fifty one", "fifty two", "fifty three", "fifty four",
    "fifty five", "fifty six", "fifty seven", "fifty eight", "fifty nine"];
    
    let timeArray = time.split(':')

    
    if (PM) {
        hour = 12 + parseInt(timeArray[0],10);
        min = timeArray[1].replace('PM', '');
        min = parseInt(min);
    } else {
        hour = timeArray[0];
        hour = parseInt(hour);
        min = timeArray[1].replace('AM', '');    
        min = parseInt(min); 
    }

    // console.log(hour + ':' + min)
    
    if(hour === 0 && min === 0) {
      return 'Zero Hundred Hours'
    } else if (min < 10) {
      return `${numbers[hour]} Hundred and Zero ${numbers[min]} Hours`;
    } else {
      return `${numbers[hour]} Hundred and ${numbers[min]} Hours`;
    }
}

timeConverter('1:30PM')

}
