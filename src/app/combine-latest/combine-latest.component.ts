import { Component } from '@angular/core';
import { combineLatest, timer } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  templateUrl: './combine-latest.component.html',
  styleUrls: ['./combine-latest.component.scss']
})
export class CombineLatestComponent {

    ngOnInit(): void {
  
      const firstTimer = timer(0, 1000); // emit 0, 1, 2... after every second, starting from now
      const secondTimer = timer(500, 1000); // emit 0, 1, 2... after every second, starting 0,5s from now
      
      const combinedTimers = combineLatest([firstTimer, secondTimer]);
      combinedTimers.subscribe(value => console.log(value));

    }

}
