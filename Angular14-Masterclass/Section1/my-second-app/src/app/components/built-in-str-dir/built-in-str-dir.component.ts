import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-str-dir',
  templateUrl: './built-in-str-dir.component.html',
  styleUrls: ['./built-in-str-dir.component.scss']
})
export class BuiltInStrDirComponent implements OnInit {

  messages!: string[];

  constructor() { }

  ngOnInit(): void {
    this.messages = [
      'Message 1',
      'Message 2',
      'Message 3',
      'Message 4',
      'Message 5',
      'Message 6',
    ]
  }

}
