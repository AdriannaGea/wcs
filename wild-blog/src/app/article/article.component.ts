import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Article {
  title: string;
  author: string;
  imageUrl: string;
  content: string;
  isPublished: boolean;
}

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  article: Article = {
    title: 'Titre de mon article',
    author: 'John Doe',
    imageUrl: 'https://via.placeholder.com/150',
    content: 'Ceci est le contenu de mon article.',
    isPublished: true,
  };

  comment: string = '';

  togglePublish() {
    this.article.isPublished = !this.article.isPublished;
  }
}
