import { Component, OnInit } from '@angular/core';
import { MessagesComponent } from '../messages/messages.component';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;

  constructor() { }

  ngOnInit() {
    const r = Math.round(1000000 * Math.random());
    this.name = `user${r}`;
    /**
     * const m = new MessageComponent('Signed on...');
     * this.history = new MessagesComponent();
     * this.history.append(m);
     */
  }

}
