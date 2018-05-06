import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isMousedown;

  @Input() message;

  @Output() update = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }

}
