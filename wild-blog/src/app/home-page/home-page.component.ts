import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ArticleComponent } from '../article/article.component';

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
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ArticleComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {
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
}

