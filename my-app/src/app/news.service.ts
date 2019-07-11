import { Injectable } from '@angular/core';
import { dataBase } from './dbArticle';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getArticles() {
    return dataBase;
  }

  getArticleById(articleId) {
    return dataBase.find((article) => article.id === articleId);
  }
}
