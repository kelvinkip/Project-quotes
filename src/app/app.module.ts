import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteDetailComponent } from './quote/quote-detail/quote-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { updownComponent } from './updown/updown.component';
import { HighlightDirective } from './highlight.directive';
import { LogoComponentComponent } from './logo-component/logo-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponentComponent,
    QuoteDetailComponent,
    QuoteComponent,
    QuoteFormComponent,
    DateCountPipe,
    updownComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
