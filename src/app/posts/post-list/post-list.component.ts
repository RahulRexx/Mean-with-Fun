import { Component } from '@angular/core';

@Component({   //any thing starting with a @ is called as decorator
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent {
  posts = [
    { title: 'First Post', content: 'This is the content of the first post.' },
    {
      title: 'Second Post', content: 'This is the content of the second post.'
    },
    { title: 'Third Post', content: 'This is the content of the third post.' }
  ];
}
