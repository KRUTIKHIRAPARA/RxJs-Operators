import { Component } from '@angular/core';
import { concat, interval, range, take } from 'rxjs';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.scss']
})
export class ConcatComponent {

  // Creates an output Observable which sequentially emits all values from the first given Observable and then moves on to the next.

  ngOnInit(): void {
    
    // const timer = interval(1000).pipe(take(4));
    // const sequence = range(1, 10);
    // const result = concat(timer, sequence);
    // result.subscribe(x => console.log(x));

    const timer1 = interval(1000).pipe(take(10));
    const timer2 = interval(2000).pipe(take(6));
    const timer3 = interval(500).pipe(take(10));
    
    const result2 = concat(timer1, timer2, timer3);
    result2.subscribe(x => console.log(x));

  }

}
