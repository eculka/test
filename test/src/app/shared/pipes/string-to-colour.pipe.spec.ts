import { StringToColourPipe } from './string-to-colour.pipe';

describe('StringToColourPipe', () => {
  it('should return an hsl colour string', () => {
    const testString = 'testing string';
    const pipe = new StringToColourPipe();
    const result = pipe.transform(testString);
    expect(result).toMatch(/hsl\((\+|\-)(\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/);
  });
});
