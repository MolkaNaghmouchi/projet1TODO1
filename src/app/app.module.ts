import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [AppComponent,OffresEmploiComponentComponent, ArticlesComponent],
  imports: [BrowserModule,
  FormsModule

],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
