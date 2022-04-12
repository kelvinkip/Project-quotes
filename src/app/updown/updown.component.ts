import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updown',
  templateUrl: './updown.component.html',
  styleUrls: ['./updown.component.css']
})
export class updownComponent implements OnInit {

  numberOfupvotes: number = 0;
  likes() {
    this.numberOfupvotes++;
  }
numberOfdownvotes: number = 0;
  dislikes() {
    this.numberOfdownvotes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
