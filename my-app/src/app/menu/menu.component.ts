import { Component, OnInit } from '@angular/core';
import { animate, trigger, state, style, transition } from '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  animations: [
    trigger( 'openClose', [
      state('open', style({
        transform: 'translateX(0)'
      })),
      state('close', style({
        transform: 'translateX(300px)'
      })),
      transition('* => *', animate('0.2s'))
    ])
  ]
})
export class MenuComponent implements OnInit {
  isOpen = false;

  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    this.isOpen = true;
  }

  hideMenu() {
    this.isOpen = false;
  }
}
