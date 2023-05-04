import { Component } from '@angular/core';
import { first, of } from 'rxjs';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  source = of(67,2,3,4,5);

  ngOnInit(): void {

    const src = this.source.pipe(first((val:any)=>{return val}));

    src.subscribe(val => console.log(val));

  }
}
