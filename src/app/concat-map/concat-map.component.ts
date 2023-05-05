import { Component } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent {

  getData(data:any){
    return of(data+ ' API Call..');
  }

  ngOnInit(): void {
    
      const source = from(['First','Second','Third']);

      // Concat Map

      source.pipe(map(res => this.getData(res)))
      .subscribe(res =>{
        console.log(res);
      });



      // Concat All

      source.pipe(map(res => this.getData(res)),
          concatAll()
      )
      .subscribe(res =>{
        console.log(res);
      });



      // concatMap
      
      source.pipe(concatMap(res => this.getData(res)))
      .subscribe(res =>{
        console.log(res);
      });

}
}
