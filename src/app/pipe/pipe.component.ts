import { Component } from '@angular/core';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {

  // pipe() can be called on one or more functions, each of which can take one argument ("UnaryFunction") and uses it to return a value. It returns a function that takes one argument, passes it to the first UnaryFunction, and then passes the result to the next one, passes that result to the next one, and so on.

  source = of(1,2,3,4,5,6);
  ngOnInit(): void {
    
    const res = this.source.pipe(map((val)=>{ return val*2}), filter((val)=>{ return val % 2 == 0}))
                .subscribe({
                  next:(res)=>{console.log(res)},
                  error:(err)=>{console.log(err);},
                  complete:()=>{console.log('Done');}
                });
    
    console.log(res);
  }
}
