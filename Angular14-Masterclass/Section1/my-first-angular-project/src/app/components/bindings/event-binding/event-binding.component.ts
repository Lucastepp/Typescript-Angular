import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {
  animal = 'Cat'

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    alert('Button was clicked')
  }

  onKeyUp(keyUpEvent: any) {
    keyUpEvent.code === 'Enter' && alert('Enter was pressed')

  }
}
