import { Component, OnInit } from '@angular/core';
import { MyService} from '../my-service.service';
@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css'],
  providers: [MyService]
})
export class MyButtonComponent implements OnInit {

  liked: boolean;

  constructor(private service: MyService) {}

  toggleLike() {
    // this.liked = !this.liked;
    this.liked = this.service.likeImage(this.liked);
    console.log(`The state is now ${this.liked}`);
  }

  ngOnInit() {
    this.liked = false;
  }

}
