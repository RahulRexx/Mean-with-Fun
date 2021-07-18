import { Component } from '@angular/core';

@Component({   //any thing starting with a @ is called as decorator
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent {
  newPost = "No  content";  //property name
  enteredValue = "";
  onAddPost() {
    // console.dir(postInput);
    this.newPost = this.enteredValue;
  }
}
