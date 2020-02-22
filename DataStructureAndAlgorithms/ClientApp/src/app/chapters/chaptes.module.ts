import { NgModule } from "@angular/core";
import { ArraysAndStringsComponent } from "./arrays-and-strings/arrays-and-strings.components";
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';



export function getHighlightLanguages() {
    return {
      csharp: () => import('highlight.js/lib/languages/cs')
    };
  }

  

@NgModule({
    declarations:[ArraysAndStringsComponent],
    imports:[HighlightModule],
    providers:[{
        provide: HIGHLIGHT_OPTIONS,
        useValue:<HighlightOptions> {
          languages: getHighlightLanguages(),
          lineNumbers:true
        }
      }]
})
export class ChaptersModule { }