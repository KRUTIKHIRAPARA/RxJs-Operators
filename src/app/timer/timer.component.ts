import { Component, ElementRef, ViewChild } from '@angular/core';
import {interval, mapTo, startWith, merge, fromEvent, switchMap, scan, takeWhile, empty } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent {

  ans:string | undefined;

  @ViewChild('remaining') remaining:ElementRef | undefined;
  @ViewChild('pause') pause:ElementRef | undefined;
  @ViewChild('resume') resume:ElementRef | undefined;

  test(){
    const COUNTDOWN_SECONDS = 60;

    const interval$ = interval(1000).pipe(mapTo(-1));
    const pause$ = fromEvent(this.pause?.nativeElement, 'click').pipe(mapTo(false));
    const resume$ = fromEvent(this.resume?.nativeElement, 'click').pipe(mapTo(true));
    
    merge(pause$, resume$) 
      .pipe(
        startWith(true),
        switchMap((val) => (val ? interval$ : empty())),
        scan((acc, curr) => (curr ? curr + acc : acc), COUNTDOWN_SECONDS),
        takeWhile((v) => v >= 1)
      )
      .subscribe((val: any) => (this.ans = val));
    }

    ngAfterViewInit(): void {
      this.test();
    }
}
