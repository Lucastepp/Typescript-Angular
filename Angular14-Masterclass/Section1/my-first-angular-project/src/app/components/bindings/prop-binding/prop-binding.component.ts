import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.scss']
})
export class PropBindingComponent implements OnInit {

  message = 'Bound via Property Binding'

  constructor() { }

  ngOnInit(): void {
  }

  getMessage() {
    console.log('This got called');
    return this.message;
  }

}
