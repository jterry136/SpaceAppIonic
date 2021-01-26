import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.page.html',
  styleUrls: ['./apod.page.scss'],
})
export class APODPage implements OnInit {
  source: "URL Here";
  constructor() { }

getDate() {
  return document.getElementById('dateSearch').textContent;
  }

async call() {
  const API_KEY = environment.API_KEY;
  let date = this.getDate();
  let request = `https://api.nasa.gov/planetary/apod?date=` + date + '&api_key=' + API_KEY;
  await fetch(request).then((response) => {
      return response.json();
  }).then( (myJSON) => {

      //Description
       let p = document.getElementById("description");
       p.innerHTML = myJSON.explanation;
     
      //Image 
       //let image = document.getElementById("spacePic");
       this.source = myJSON.url;
   })
}

  ngOnInit() { }

}
