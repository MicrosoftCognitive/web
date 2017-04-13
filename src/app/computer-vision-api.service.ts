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

  getVision(language: string, imgurl?: string, file?:File): Promise<any[]> {
    let requestURLString = this.url + "?language=" + language + "&detectOrientation%20=true";
    let headers = new Headers();
    var img:any;
    var body:any;
    if(imgurl != null){
      img = imgurl;
      body = {url: imgurl};
    headers.append("Content-Type","application/json");
    }else if(file != null){
      img = file;
      headers.append("Content-Type","application/octet-stream");
      body = img;
    }
    headers.append("Ocp-Apim-Subscription-Key", this.key);
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
