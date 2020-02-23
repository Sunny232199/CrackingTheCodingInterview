import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AppRoutingModule } from './app.routes';
import { SideNavTogglerComponent } from './side-nav-toggler/side-nav-toggler.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { QuestionsComponent } from './chapters/questions/questions.components';
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
import { ReadJsonService } from './services/read-json.service';
import { SideNavService } from './services/side-nav.service';


export function getHighlightLanguages() {
  return {
    csharp: () => import('highlight.js/lib/languages/cs')
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    SideNavComponent,
    SideNavTogglerComponent,
    TopNavComponent,
    QuestionsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    HighlightModule
    
  ],
  providers: [{
    provide: HIGHLIGHT_OPTIONS,
    useValue:<HighlightOptions> {
      languages: getHighlightLanguages(),
      lineNumbers:true
    }
  }, ReadJsonService, SideNavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
