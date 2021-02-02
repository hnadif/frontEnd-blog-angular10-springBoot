import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router'
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  
  post: Post = {
    title: '',
    content: '',
    published: new Date(Date.now())
  };
  
  constructor(private route:ActivatedRoute, 
              private service:PostService) {
     }
  
  ngOnInit(): void {
    this.getPost();
  }

  getPost(){
    const id = this.route.snapshot.paramMap.get('id') 
    return this.service.getPostData(id).subscribe(data => this.post = data)
  }

}
