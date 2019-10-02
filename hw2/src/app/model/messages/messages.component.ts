import { Component, OnInit } from '@angular/core';
import {MessageComponent} from '../message/message.component';

@Component({
  selector: 'app-messages-array',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  chat: MessageComponent[];

  constructor() { }

  append(m: MessageComponent) {
    this.chat[this.chat.length] = m;
  }

  ngOnInit() { }

}
