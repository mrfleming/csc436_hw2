import { Injectable } from '@angular/core';
import { MessageComponent } from './chatModels/message/message.component';

@Injectable({
  providedIn: 'root'
})

export class MessagesService {
  private msgs: MessageComponent[] = [];

  constructor() { }

  private chatLog() {
    const theMatrix: string[] = [
    'Smith: tell me mr.anderson what good is a phone call if you aren\'t able to speak ?',
    'Morpheus: Unfortunately, no one can be told what The Matrix is.  You\'ll have to see it for yourself.',
    'Neo: Woah! I know kung fu...',
    'Morpheus: Throughout human history, we have been dependent on machines to survive. Fate, it seems, is not without a sense of irony.',
    'Smith: I\'d like to share a revelation that I\'ve had during my time here. It came to me when I tried to classify your species and I realized that you\'re not actually mammals. Every mammal on this planet instinctively develops a natural equilibrium with the surrounding environment but you humans do not. You move to an area and you multiply and multiply until every natural resource is consumed and the only way you can survive is to spread to another area. There is another organism on this planet that follows the same pattern. Do you know what it is ? A virus. Human beings are a disease, a cancer of this planet.  You\'re a plague and we are the cure.',
    'Kid: There is no spoon!',
    'Morpheus: If real is what you can feel, smell, taste and see, then \'real\' is simply electrical signals interpreted by your brain.',
    'Smith: You hear that Mr. Anderson?... That is the sound of inevitability...',
    'Neo: I know you\'re out there.  I can feel you now.  I know that you\'re afraid... you\'re afraid of us.  You\'re afraid of change.  I don\'t know the future.  I didn\'t come here to tell you how this is going to end.  I came here to tell you how it\'s going to begin.  I\'m going to hang up this phone, and then I\'m going to show these people what you don\'t want them to see. I\'m going to show them a world without you.  A world without rules and controls, without borders or boundaries.  A world where anything is possible.  Where we go from there is a choice I leave to you..'
  ];
    return theMatrix;
  }
  getChatLog() {
    const chat = this.chatLog();
    chat.forEach((item, index) => {
      console.log(`${index} : ${item}`);
      const msg = new MessageComponent();
      msg.setMessage(item);
      this.msgs.push(msg);
    });
    return this.msgs;
  }
}
