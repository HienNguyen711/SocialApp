import { Component,Input,OnInit,OnChanges } from '@angular/core';
import {TimeAgoPipe,FromUnixPipe}from 'angular2-moment';
import {SocialProvider} from '../../providers/social';
/*
  Generated class for the Post component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'post',
  templateUrl: 'post.html'
  // pipe:[TimeAgoPipe,FromUnixPipe]
})
export class PostComponent {
  @Input() feed;
  post;
  poster;

  text: string;

  constructor(public socialProvider:SocialProvider) {
    console.log('Hello Post Component');

  }
  ngOnInit(){
    let postID = this.feed.$key;
    this.post =this.socialProvider.getPost(postID);
    this.post.subscribe(value => {
      this.poster = this.socialProvider.getUser(value.from);
    });
  }

}
