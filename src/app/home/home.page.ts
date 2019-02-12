import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router: Router ) { }

  ngOnInit() {
    let btn = document.getElementById("btngraph");
    btn.addEventListener("click", (e:Event) => this.navigateToGraph());
  }

  navigateToGraph() {
    this.router.navigate(['graph']);
  }

}
