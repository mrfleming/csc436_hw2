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
    const today = new Date();
    const day = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.timeStamp = `(${day}) --> ${time}`;
    this.text = txt;
  }
}
