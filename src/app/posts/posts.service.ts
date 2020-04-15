import { Post } from "./post.model";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class PostsService {
  private posts: Post[] = [];

  getPosts() {
    return [...this.posts];
  }

  addPost(
    petName: string,
    sitStartDate: Date,
    sitEndDate: Date,
    instructions: string
  ) {
    const post: Post = { petName, sitStartDate, sitEndDate, instructions };
    this.posts.push(post);
  }
}
