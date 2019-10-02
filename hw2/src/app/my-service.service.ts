import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  constructor() { }

  likeImage(state: boolean): boolean {
    return !state;
  }

}
