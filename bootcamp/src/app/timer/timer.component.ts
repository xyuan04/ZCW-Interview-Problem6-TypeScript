import { Component, OnInit } from '@angular/core';
import {TimerService} from '../timer.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  militaryTime = '';

  constructor(private timerService: TimerService) { }

  ngOnInit(): void {
  }

  convertTime(time: string): void {
    this.militaryTime = this.timerService.timeConvertor(time);
  }

}
