import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {

  @Input() timeStamp: string;
  @Input() text: string;

  constructor() {}

  ngOnInit() {
  }

  setMessage(txt: string) {
    const today = new Date();
    const day = today.toDateString();
    const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    this.timeStamp = `(${day}) --> ${time}`;
    this.text = txt;
  }
}
