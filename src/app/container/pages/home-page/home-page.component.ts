import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    console.log('onInit')
    console.log( document.documentElement.style.getPropertyValue('--h-to'));
    console.log( document.documentElement.style.getPropertyValue('--h-from'));
    document.documentElement.style.setProperty('--h-to','20em');
    document.documentElement.style.setProperty('--h-from','30em');
  }
   
}
