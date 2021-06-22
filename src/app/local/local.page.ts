import { Component } from '@angular/core';

@Component({
  selector: 'app-local',
  
  templateUrl: './local.page.html',
  styleUrls: ['./local.page.scss'],
  
})
export class LocalPage  {
// Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };
  constructor() {}

}

