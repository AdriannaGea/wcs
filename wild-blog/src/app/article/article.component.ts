import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

interface Article {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  image: string;
  likeCount: number;
  isPublished: boolean;
  categoryName: string;
  isLiked: boolean;
}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule, HttpClientModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input() article: Article | undefined;
  @Output() likeEvent = new EventEmitter<Article>();

  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.getArticleById(id);
    }
  }

  getArticleById(id: number): void {
    this.http.get<Article>(`http://localhost:3000/articles/${id}`).subscribe({
      next: (data) => (this.article = data),
      error: (error) =>
        console.error("Erreur de récupération de l'article:", error),
    });
  }

  onLike() {
    if (this.article) {
      this.likeEvent.emit(this.article);
    }
  }
}
