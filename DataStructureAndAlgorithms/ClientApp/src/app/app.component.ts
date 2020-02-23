import { Component } from '@angular/core';
import { ReadJsonService } from './services/read-json.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app';
  constructor(public readJsonService: ReadJsonService) {
    this.readJsonService.getJSON();
  }
}
