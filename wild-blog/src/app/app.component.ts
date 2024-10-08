import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { InscriptionFormComponent } from './inscription-form/inscription-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ArticleComponent, ContactFormComponent, InscriptionFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Bienvenue sur le Wild Blog de Adrianna';
};
