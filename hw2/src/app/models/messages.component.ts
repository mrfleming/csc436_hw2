import { Component, OnInit } from '@angular/core';
import { MessageComponent } from './message.component';

@Component({
    selector: 'app-messages',
    templateUrl: ``,
    styleUrls: ['./chat.component.css']
})

export class MessagesComponent implements OnInit {
    chat: MessageComponent[];

    constructor() { }

    append(m: MessageComponent) {
        this.chat[this.chat.length] = m;
    }

    ngOnInit() { }


}
