import { Component } from '@angular/core';
import { asyncScheduler, from } from 'rxjs';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent {


  // Creates an Observable from an Array, an array-like object, a Promise, an iterable object, or an Observable-like object.

  ngOnInit(): void {
    
    console.log('start');
 
    const array = [10, 20, 30];
    const result = from(array, asyncScheduler);
    // const result = from(array);
    
    result.subscribe(x => console.log(x));
    
    console.log('end');

  }

}
