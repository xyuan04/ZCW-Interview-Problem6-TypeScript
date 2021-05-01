import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimerService {

  constructor() { }

  timeConvertor(time) {
    let PM = time.match('PM') ? true : false
    let hour;
    let sec;
    
    time = time.split(':')
    let min = time[1]
    
    if (PM) {
        hour = 12 + parseInt(time[0],10)
        sec = time[2].replace('PM', '')
    } else {
        hour = time[0]
        sec = time[2].replace('AM', '')       
    }
    
    console.log(hour + ':' + min + ':' + sec)
}

}
