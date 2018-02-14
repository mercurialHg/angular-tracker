import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {

  private running: boolean = false;
  private time: number = 0;
  private hours: string;
  private minutes: string;
  private seconds: string;
  private timer;
  @Output('receive-time') sendTime = new EventEmitter();

  transform():void {
    let time = this.time,
      hours = time / 3600 | 0,
      minutes = time % 3600 / 60 | 0,
      seconds = time % 60;

    this.hours = hours >= 10 ? "" + hours : "0" + hours;
    this.minutes = minutes >= 10 ? "" + minutes : "0" + minutes;
    this.seconds = seconds >= 10 ? "" + seconds : "0" + seconds;
  }

  run() {
    let _ = this;
    if (this.running === false) {
      this.running = true;
      this.timer = setInterval(function () {
        _.time++
        _.transform();
      }, 1000)
    } else {
      this.running = false;
      clearInterval(this.timer);
    }
  }

  reset() {
    this.running = false;
    this.time = 0;
    this.transform();
  }

  complete() {
    this.sendTime.emit(`${this.hours}:${this.minutes}:${this.seconds}`)
    this.reset();
  }


  constructor() { }

  ngOnInit() {
    this.transform();
  }

}
