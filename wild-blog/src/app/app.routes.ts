import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: '**', component: NotFoundComponent },
];
