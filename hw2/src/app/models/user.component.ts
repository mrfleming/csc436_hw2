import { Component, OnInit } from '@angular/core';
import { MessagesComponent } from './messages.component';
import { MessageComponent } from './message.component';

@Component({
    selector: 'app-user',
    templateUrl: ``,
    styleUrls: ['./chat.component.css']
})

export class UserComponent implements OnInit {
    name: string;
    history: MessagesComponent;

    constructor() { }

    ngOnInit() {
        const r = Math.round(1000000 * Math.random());
        this.name = `user${r}`;
        const m = new MessageComponent('Signed on...');
        this.history = new MessagesComponent();
        this.history.append(m);
    }


}
