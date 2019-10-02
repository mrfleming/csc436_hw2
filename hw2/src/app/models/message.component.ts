import {Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-message',
    templateUrl: `<li>{{timeStamp}} : {{text}}</li>`,
    styleUrls: ['./chat.component.css']
})

export class MessageComponent implements OnInit {
    timeStamp: string;
    text: string;

    constructor(txt) {
        this.timeStamp = (new Date()).toDateString();
        this.text = txt;
    }

    ngOnInit() {}


}
