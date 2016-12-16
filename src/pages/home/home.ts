import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { NavController } from 'ionic-angular';
import { GiphySearch } from '../../providers/giphy-search';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  link = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=';
  http: Http;
  giphies: any = [];
  constructor(public navCtrl: NavController, http: Http , public image : GiphySearch) {
    this.http = http;

  }
  
  performSearch(searchTerm: HTMLInputElement): void { 
    this.image.get(searchTerm.value).subscribe((res: Response) => { 
    this.giphies = res.json().data; 
    console.log(this.giphies); });

  }

}
