import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({                              
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, "HappinessQoute", "Happiness is not the absence of problems, it’s the ability to deal with them."," By: Steve Maraboli", 0, 0, new Date(2022,4,9)),
    new Quote(2, "TopPositiveQuote", "Positive anything is better than negative nothing."," By: Elbert Hubbard", 0,0,new Date(2022,3,31)),
    new Quote(3, "The Most Famous Quotes of All Time", "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. -", " By: Oprah Winfrey ", 0, 0, new Date(2022,3,25)),
    new Quote(4, "BeautifulLife Quote", "Many of life’s failures are people who did not realize how close they were to success when they gave up.", "By: B– Thomas A. Edisoin", 0, 0, new Date(2022,4,8)),
  ];

  arr: number[] = this.quotes.map((quote) => quote.upvotes);
  highest = Math.max(...this.arr);

  addNewQuote(quote:Quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    this.quotes.push(quote)
  }
  
  deleteQuote(isComplete:boolean, index:number){
    if (isComplete) {
      let toDelete = confirm("Do you really want to delete this Quote?")

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
