import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Article } from '../common/article';
import { ArticleService } from '../common/article.service';

@Component({
  selector: 'app-articles-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.css',
})
export class ArticlesListComponent {
  article: Article = {
    id: '',
    name: '',
    price: '',
    contact: '',
    stock: '',
  };
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    // Utilisation le service pour obtenir les articles
    this.articles = this.articleService.getArticles();
  }

  createArticle(article: Article) {
    // Ajout article via service
    this.articleService.creatArticle(article);
    this.articles = this.articleService.getArticles();

    // Réinitialisation de modèle
    this.article = {
      id: '',
      name: '',
      price: '',
      contact: '',
      stock: '',
    };
  }

  deleteArticle(article: Article) {
    this.articleService.deleteArticle(article.id);
    this.articles = this.articleService.getArticles();
  }
}
