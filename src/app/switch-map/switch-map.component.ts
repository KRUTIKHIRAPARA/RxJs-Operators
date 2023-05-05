import { Component } from '@angular/core';
import { from, map, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent {

  getData(data:any){
    return of(data+ ' API Call..');
  }

  ngOnInit(): void {
    
      const source = from(['First','Second','Third']);


      // Switch All

      source.pipe(map(res => this.getData(res)),
          switchAll()
      )
      .subscribe(res =>{
        console.log(res);
      });


 
      // switchMap
      
      source.pipe(switchMap(res => this.getData(res)))
      .subscribe(res =>{
        console.log(res);
      });

  }

}
