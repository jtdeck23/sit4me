import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { Post } from "../post.model";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.css"],
})
export class CreatePostComponent implements OnInit {
  enteredPetName = "";
  enteredSitStartDate = "";
  enteredSitEndDate = "";
  enteredInstructions = "";
  @Output() postCreated = new EventEmitter<Post>();

  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {
      petName: form.value.petName,
      sitStartDate: form.value.sitStartDate,
      sitEndDate: form.value.sitEndDate,
      instructions: form.value.instructions,
    };
    this.postCreated.emit(post);
  }
  constructor() {}

  ngOnInit() {}
}
