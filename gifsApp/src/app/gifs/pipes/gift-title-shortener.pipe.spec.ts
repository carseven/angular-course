import { GiftTitleShortenerPipe } from './gift-title-shortener.pipe';

type Spied<T> = {
  [Method in keyof T]: jasmine.Spy;
};

describe('GiftTitleShortenerPipe', () => {
  let gifTitleShortenerPipe: GiftTitleShortenerPipe;
  beforeEach(() => {
    gifTitleShortenerPipe = new GiftTitleShortenerPipe();
  });

  it('should create an instance of GifTitleShortenerPipe', () => {
    expect(gifTitleShortenerPipe).toBeTruthy();
  });
  it('should make gif title shorter', () => {
    expect(
      gifTitleShortenerPipe.transform(
        'Clap Applause Gif By Fantastic Beasts: The Secrets Of Dumbledore'
      )
    ).toBe('Clap Applause');

    expect(
      gifTitleShortenerPipe.transform(
        'Clap Applause GIF By Fantastic Beasts: The Secrets Of Dumbledore'
      )
    ).toBe('Clap Applause');

    expect(
      gifTitleShortenerPipe.transform(
        'Clap Applause gif By Fantastic Beasts: The Secrets Of Dumbledore'
      )
    ).toBe('Clap Applause');
  });
});
