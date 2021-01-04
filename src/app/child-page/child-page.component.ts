import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-page',
  template: `
    <p>
      child-page works!
    </p>
  `,
  styles: [
  ]
})
export class ChildPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
