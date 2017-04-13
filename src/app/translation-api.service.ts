import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class TranslationAPIService {

    /// Request URL
    url = "https://translation.googleapis.com/language/translate/v2";
    
    /// API Key
    key = "AIzaSyBsrzBFXj1le-BgcJTeoNu8bi7kCDFgL5o";

  constructor(private http: Http) { }

  getTranslation(language: string, sourcelang: string, text: string): Promise<any[]> {
    let requestURLString = this.url + "?key=" + this.key + "&source=" + sourcelang + "&target=" + language + "&q=" + text;
    let headers = new Headers();
    console.log(requestURLString);
    var body:any;
    return this.http.get(requestURLString)
    .toPromise()
    .then(response => response.json() as any[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
