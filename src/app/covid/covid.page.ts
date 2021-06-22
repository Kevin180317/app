import { Component } from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.page.html',
  
  styleUrls: ['./covid.page.scss'],
})
export class CovidPage  {

 // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor() {}
}
