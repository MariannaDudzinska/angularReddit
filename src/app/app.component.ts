import { Component } from '@angular/core';
import { Article } from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('memeski inne', 'http://hugelol.com', 13),
      new Article('lista styp', 'http://prs.pwr.edu.pl/?p=5342&fbclid=IwAR0Crf9fFFcCW2TZl-TP1-QJryOlXsGMOXdaOzynsUBSnQU2XWAWN0d8LCQ', 40),
      new Article('ćmy sornata ', 'https://www.youtube.com/watch?v=RFd6lUXGKfU', 51)
    ]
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = ''; //clear
    link.value = ''; //clear
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}