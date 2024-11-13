import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Article } from '../common/article';
import { ArticleService } from '../common/article.service';

@Component({
  selector: 'app-articles-list-deleted',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './articles-list-deleted.component.html',
  styleUrl: './articles-list-deleted.component.css',
})
export class ArticlesListDeletedComponent {
  articlesDeleted: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit() {
    // Récupération des articles non disponible à partir d'un service
    this.articlesDeleted = this.articleService.getDeletedArticles();
  }

  restore(article: Article) {
    // Restauration de l'article à partir d'un service
    this.articleService.restoreArticle(article.id);
    this.articlesDeleted = this.articleService.getDeletedArticles();
  }
}
