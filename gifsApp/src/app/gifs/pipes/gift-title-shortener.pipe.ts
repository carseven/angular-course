import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'giftTitleShortener',
})
export class GiftTitleShortenerPipe implements PipeTransform {
  separatorWord = 'Gif';
  transform(gitTitle: string): string {
    if (gitTitle.includes('Gif')) {
      return gitTitle.split(this.separatorWord)[0]?.trim();
    }
    return gitTitle;
  }
}
