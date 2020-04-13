import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToColour'
})
export class StringToColourPipe implements PipeTransform {

  transform(value: string): string {
    return this.strToHslColor(value, 50, 50);
  }

  public strToHslColor(str, s, l) {
    console.log('checking value passed in pipe', str);
    let hash = 0;
    // Disabling bitwise tslint as it is used intentionally
    /* tslint:disable:no-bitwise */
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 7) - hash);
    }
    /* tslint:enable:no-bitwise */
    const h = hash % 360;
    return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
  }

}
