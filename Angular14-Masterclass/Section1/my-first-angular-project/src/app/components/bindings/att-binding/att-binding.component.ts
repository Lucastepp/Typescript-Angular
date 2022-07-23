import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-att-binding',
  templateUrl: './att-binding.component.html',
  styleUrls: ['./att-binding.component.scss']
})
export class AttBindingComponent {
  actionName: string = 'Alert';
  numbers = [1, 2]

}
