import { Injectable } from '@angular/core';
import { Article } from './article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private localStorageKey = 'articles';
  private deletedArticlesKey = 'deleted_articles';

  // Récuperation de la liste des articles actifs depuis le localStorage
  getArticles(): Article[] {
    const stringData = localStorage.getItem(this.localStorageKey);
    return JSON.parse(stringData || '[]');
  }

  // Sauvegarde la liste des articles actifs dans le localStorage
  private saveArticles(articles: Article[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(articles));
  }

  // Récupère la liste des articles supprimés depuis le localStorage
  getDeletedArticles(): Article[] {
    const stringData = localStorage.getItem(this.deletedArticlesKey);
    return JSON.parse(stringData || '[]');
  }

  // Sauvegarde la liste des articles supprimés dans le localStorage
  private saveDeletedArticles(deletedArticles: Article[]): void {
    localStorage.setItem(
      this.deletedArticlesKey,
      JSON.stringify(deletedArticles)
    );
  }

  // Ajout D'un nouvel article à la liste des articles actifs et le sauvegarde
  creatArticle(article: Article): void {
    const articles = this.getArticles();
    articles.push(article);
    this.saveArticles(articles);
  }

  // Suppression d'un article de la liste active, le déplace vers les articles supprimés, et sauvegarde les changements
  deleteArticle(articleId: string): void {
    const articles = this.getArticles();
    const deletedArticles = this.getDeletedArticles();
    const index = articles.findIndex((article) => article.id === articleId);
    if (index !== -1) {
      deletedArticles.push(articles[index]);
      articles.splice(index, 1);
      this.saveArticles(articles);
      this.saveDeletedArticles(deletedArticles);
    }
  }

  // Restauration  d'un article de la liste des articles supprimés vers la liste active et sauvegarde les modifications
  restoreArticle(articleId: string): void {
    const deletedArticles = this.getDeletedArticles();
    const articles = this.getArticles();
    const index = deletedArticles.findIndex(
      (article) => article.id === articleId
    );
    if (index !== -1) {
      articles.push(deletedArticles[index]);
      deletedArticles.splice(index, 1);
      this.saveArticles(articles);
      this.saveDeletedArticles(deletedArticles);
    }
  }
}
