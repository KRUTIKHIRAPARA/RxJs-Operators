import { Component } from '@angular/core';
import { interval, merge, take } from 'rxjs';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent {

  // Creates an output Observable which concurrently emits all values from every given input Observable.

  // merge subscribes to each given input Observable (as arguments), and simply forwards (without doing any transformation) all the values from all the input Observables to the output Observable. The output Observable only completes once all input Observables have completed. Any error delivered by an input Observable will be immediately emitted on the output Observable.
  

    ngOnInit(): void {
      
      const timer1 = interval(1000).pipe(take(10));
      const timer2 = interval(2000).pipe(take(6));
      const timer3 = interval(500).pipe(take(10));
      
      const concurrent = 2; // the argument

      const merged = merge(timer1, timer2, timer3, concurrent);
      merged.subscribe(x => console.log(x));

    }

}
