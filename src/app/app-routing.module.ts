import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component'

const routes: Routes = [
  { path: 'content',
  component: ContentComponent,
  data: {title: 'Lista dos melhores filmes do Imdb'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
