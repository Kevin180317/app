import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-local1',
  templateUrl: './local1.page.html',
  styleUrls: ['./local1.page.scss'],
})
export class Local1Page implements OnInit {

  constructor(    private router: Router
    ) { }

  ngOnInit() {
  }
  onLogout(){
    console.log('Logout');
    this.router.navigateByUrl('/inicio');
  }
}
