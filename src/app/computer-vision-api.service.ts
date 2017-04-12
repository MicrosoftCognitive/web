import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Vision} from './vision';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';


@Injectable()
export class ComputerVisionAPIService {


    /// Request URL
    url = "https://westus.api.cognitive.microsoft.com/vision/v1.0/ocr";
    
    /// API Key
    key = "f2012cf6ac594d59866ba0d4442387c9";

  constructor(private http: Http) { }

  getVision(language: string): Promise<any[]> {
    let requestURLString = this.url + "?language=" + language + "&detectOrientation%20=true";
    let body = {url: "http://puu.sh/vhS5c/f9bc6a8a1f.png"};
    let headers = new Headers();
    headers.append("Content-Type","application/json");
    headers.append("Ocp-Apim-Subscription-Key", this.key)
    return this.http.post(requestURLString, body, {headers: headers})
    .toPromise()
    .then(response => response.json() as any[])
    .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
