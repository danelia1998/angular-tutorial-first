import { Injectable } from '@angular/core';
import { dataBase } from './newsDB';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  articles = dataBase;
  

  constructor() { }

  getArticles() {
    return this.articles;
  }

  getArticle(id) {
    return this.articles.find((article) => {
      return article.id === id;
    });
  }
}
