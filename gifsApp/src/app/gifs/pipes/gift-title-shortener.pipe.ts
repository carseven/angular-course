import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'giftTitleShortener',
})
export class GiftTitleShortenerPipe implements PipeTransform {
  separatorWord = 'Gif';

  titleCase: TitleCasePipe = new TitleCasePipe();

  constructor() {}

  transform(gifTitle: string): string {
    const gifTitleCase = this.titleCase.transform(gifTitle);
    if (gifTitleCase.includes(this.separatorWord)) {
      return gifTitleCase.split(this.separatorWord)[0]?.trim();
    }
    return gifTitleCase;
  }
}
