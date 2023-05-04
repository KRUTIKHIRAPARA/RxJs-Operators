import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  templateUrl: './of.component.html',
  styleUrls: ['./of.component.scss']
})
export class OFComponent {

  source = of(10,20,30);
  source2 = of({name:'Krutik'},[1,2,3],function hello(){return 'Hello'});

  ngOnInit(): void {

    const res = this.source.subscribe({
      next: (val:any) => console.log('next:', val),
      error: (err:any) => console.log('error:', err),
      complete: () => console.log('the end'),
    });

    const res2 = this.source2.subscribe({
      next: (val:any) => console.log('next:', val),
      error: (err:any) => console.log('error:', err),
      complete: () => console.log('the end'),
    });

    console.log(res);
    console.log(res2);

  }

  

  
  
}
