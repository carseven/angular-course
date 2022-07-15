import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent {
  get gifs() {
    return this.gifService.gifSearchResults as any;
  }

  constructor(private gifService: GifService, private clipboard: Clipboard) {}

  onCickGifTitle(gifOrignalUrl: string): void {
    this.clipboard.copy(gifOrignalUrl);
  }
}
