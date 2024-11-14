import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { ArticleComponent } from '../article/article.component';
import { HttpClientModule } from '@angular/common/http';

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
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink, ArticleComponent, HttpClientModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  articles: Article[] = [];
  likedMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this.http.get<Article[]>('http://localhost:3000/articles').subscribe({
      next: (data) => {
        this.articles = data;
      },
      error: (err) => {
        console.error('Error fetching articles', err);
      },
    });
  }

  onArticleLiked(article: Article) {
    article.likeCount++;
    this.likedMessage = `L'article "${article.title}" vient d'être liké.`;
  }
}
