import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'linkParsing'
})
export class LinkParsingPipe implements PipeTransform {
  private urls = /(\b(https?|ftp):\/\/[A-Z0-9+&@#\/%?=~_|!:,.;-]*[-A-Z0-9+&@#\/%=~_|])/gim;
  private emails = /(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;

  transform(value: any, args?: any): any {
    let stringValue = value as string;
    if (stringValue.match(this.urls)) {
      stringValue = stringValue.replace(this.urls, '<a href="$1" target="_blank">$1</a>');
    }
    return stringValue;
  }

}
