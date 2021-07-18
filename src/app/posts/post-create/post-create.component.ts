import { Component } from '@angular/core';

@Component({   //any thing starting with a @ is called as decorator
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  newPost = "No  content";  //property name
  onAddPost(postInput: HTMLTextAreaElement) {
    // console.dir(postInput);
    this.newPost = postInput.value;
  }
}
