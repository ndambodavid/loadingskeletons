import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({opacity: 0})),
      state('*', style({opacity: 1})),
      transition('void => *', animate('100ms ease-in')),
      transition('* => void', animate('100ms ease-out'))
    ])
  ]
})
export class HomePage {

  loading = true;

  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }

}
