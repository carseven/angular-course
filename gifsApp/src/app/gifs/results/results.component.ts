import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Gif } from '../interfaces/gifs.interfaces';
import { GiftTitleShortenerPipe } from '../pipes/gift-title-shortener.pipe';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [GiftTitleShortenerPipe],
})
export class ResultsComponent {
  get gifs() {
    return this.gifService.gifDataGrid.data;
  }

  constructor(
    private gifService: GifService,
    private giftTitleShortener: GiftTitleShortenerPipe
  ) {}

  onCickGifTitle(gif: Gif): void {
    const gifMetaUrl = this.gifService.getMetaUrlGiphy(gif.id);
    navigator.clipboard
      .writeText(gifMetaUrl)
      .then(() => this.showAlert(gif))
      .catch(console.log);
  }

  private showAlert(gif: Gif): void {
    const shortGifTitle = this.giftTitleShortener.transform(gif.title);
    console.log(shortGifTitle);
    Swal.fire({
      title: `"${shortGifTitle}" has been copied!`,
      toast: true,
      timer: 2000,
      showConfirmButton: false,
      position: 'top-right',
      icon: 'info',
    });
  }
}
