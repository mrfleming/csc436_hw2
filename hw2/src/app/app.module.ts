import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyImageComponent } from './my-image/my-image.component';
import { MyButtonComponent } from './my-button/my-button.component';

import { MessageComponent } from './chatModels/message/message.component';
import { MessagesComponent } from './chatModels/messages/messages.component';
import { UserComponent } from './chatModels/user/user.component';

import { MessagesService } from './messages.service';

@NgModule({
  declarations: [
    AppComponent,
    MyImageComponent,
    MyButtonComponent,
    MessageComponent,
    MessagesComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MessagesService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
