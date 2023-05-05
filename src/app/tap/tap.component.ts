import { Component } from '@angular/core';
import { Subscription, from, map, of, tap } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent {
  arr: any;

  observ : Subscription | undefined;


  ngOnInit(): void {
    
      const arr = ['Red','Blue','Green','Orange','Yellow','Purple','Pink','Violet'];

        this.observ = from(arr).pipe( tap(res =>{
        if(res == 'Orange'){
          this.observ?.unsubscribe();
        }
      }))
      .subscribe(res => console.log(res));

  }

}
