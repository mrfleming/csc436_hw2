import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {

  timeStamp: string;
  text: string;

  constructor() {}

  ngOnInit() {
  }

  setMessage(txt: string) {
    this.timeStamp = (new Date()).toDateString();
    this.text = txt;
  }
}
