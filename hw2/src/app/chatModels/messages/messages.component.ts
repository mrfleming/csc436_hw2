import { Component, OnInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';
import { MessagesService } from '../../messages.service';

@Component({
  selector: 'app-messages-array',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  providers: [MessagesService]
})
export class MessagesComponent implements OnInit {
  chat: MessageComponent[];

  constructor(private service: MessagesService) { }

  append(m: MessageComponent) {
    this.chat.push(m);
  }

  ngOnInit() {
    // downloads list of strings
    this.chat = this.service.getChatLog();
   }

}
