import { Component } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
})
export class ResultsComponent {
  get gifs() {
    return this.gifService.gifSearchResults;
  }

  constructor(private gifService: GifService) {}
}
