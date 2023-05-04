import { Component } from '@angular/core';
import { filter, fromEvent } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {

  ngOnInit(): void {
    
    
  const div = document.createElement('div');
  div.style.cssText = 'width: 200px; height: 200px; background: #000;';
  document.body.appendChild(div);

  const clicks = fromEvent(document, 'click');
  console.log(clicks);
  const clicksOnDivs = clicks.pipe(filter(ev => (<HTMLElement>ev.target).tagName === 'DIV'));
  clicksOnDivs.subscribe(x => console.log(x));


  }
}
