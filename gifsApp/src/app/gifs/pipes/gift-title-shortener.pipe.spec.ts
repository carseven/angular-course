import { GiftTitleShortenerPipe } from './gift-title-shortener.pipe';

describe('GiftTitleShortenerPipe', () => {
  it('create an instance', () => {
    const pipe = new GiftTitleShortenerPipe();
    expect(pipe).toBeTruthy();
  });
  it('should make shorter gif title', () => {
    const pipe = new GiftTitleShortenerPipe();
    expect(
      pipe.transform(
        'Clap Applause Gif By Fantastic Beasts: The Secrets Of Dumbledore'
      )
    ).toBe('Clap Applause');
  });
});
