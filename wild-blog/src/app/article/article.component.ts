import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface Article {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  content: string;
  isPublished: boolean;
  likes: number;
}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: Article | undefined;
  @Output() likeEvent = new EventEmitter<Article>();

  onLike() {
    if (this.article) {
      this.likeEvent.emit(this.article);
    }
  }
}
