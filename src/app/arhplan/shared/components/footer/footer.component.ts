import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'arh-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  currentDate: Date;

  constructor() { }

  ngOnInit(): void {
    this.currentDate = new Date();
  }

}
