import { Component, OnInit } from '@angular/core';
import {TimerService} from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  militaryTime = '';
  hourselect = '';
  minselect = '';
  apmpmselect = '';

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
  }

  convertTime(): void {
    this.militaryTime = this.timerService.timeConvertor(this.hourselect, this.minselect, this.apmpmselect);
  }


  log(): void {
    console.log(this.hourselect);
  }
}
