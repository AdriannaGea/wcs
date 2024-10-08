import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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
  imports: [FormsModule, CommonModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  articleId: number | undefined;
  article: Article | undefined;

  articles: Article[] = [
    {
      id: 1,
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: "Les nouveautés d'Angular 16 incluent...",
      imageUrl: 'https://via.placeholder.com/350x150',
      isPublished: true,
      likes: 120,
    },
    {
      id: 2,
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      imageUrl: 'https://via.placeholder.com/350x150',
      isPublished: false,
      likes: 75,
    },
    {
      id: 3,
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      imageUrl: 'https://via.placeholder.com/350x150',
      isPublished: true,
      likes: 200,
    },
  ];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.articleId = Number(this.route.snapshot.paramMap.get('id'));
    this.article = this.articles.find(
      (article) => article.id === this.articleId
    );
    if (!this.article) {
      this.router.navigate(['/not-found']);
    }
  }
}
