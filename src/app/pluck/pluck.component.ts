import { Component } from '@angular/core';
import { of, pluck } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent {

      source = of({name:'Krutik',lastName:'Hirapara'});

      ngOnInit(): void {
    
        const src = this.source.pipe(pluck('name'));
    
        src.subscribe(val => console.log(val));
    
      }


}
