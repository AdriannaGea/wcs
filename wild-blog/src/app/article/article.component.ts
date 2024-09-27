import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Article {
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
  articles: Article[] = [
    {
      title: 'Angular 16: Les nouveautés',
      author: 'Alice',
      content: "Les nouveautés d'Angular 16 incluent...",
      imageUrl: 'https://via.placeholder.com/350x150',
      isPublished: true,
      likes: 120,
    },
    {
      title: 'Développer une API REST',
      author: 'Bob',
      content: 'Développer une API REST nécessite...',
      imageUrl: 'https://via.placeholder.com/350x150',
      isPublished: false,
      likes: 75,
    },
    {
      title: 'Pourquoi TypeScript est essentiel ?',
      author: 'Charlie',
      content: 'TypeScript apporte de la robustesse...',
      imageUrl: 'https://via.placeholder.com/350x150',
      isPublished: true,
      likes: 200,
    },
  ];
}
