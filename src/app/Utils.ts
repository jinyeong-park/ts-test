import { UrlWithParsedQuery, parse } from "url";


export class Utils {
  // parsing url
  public static parseUrl(url: string): UrlWithParsedQuery {
    return parse(url, true);
  }

  public static toUpperCase(arg: string) {
    return arg.toUpperCase();
  }
}