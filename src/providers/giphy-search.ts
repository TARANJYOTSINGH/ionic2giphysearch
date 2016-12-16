import { Injectable } from '@angular/core';
import { Http, URLSearchParams} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GiphySearch {
  
  link = 'http://api.giphy.com/v1/gifs/search';
  key = 'your api key'

  constructor(public http: Http) {
    console.log('Hello GiphySearch Provider');
  }

  get(q: string){
    let params = new URLSearchParams();
    params.set('api_key', this.key );
    params.set('q', q ); 

    return this.http
               .get(this.link, { search: params })
               .map(response => response);
  }
}
