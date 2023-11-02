import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutPageComponent implements OnInit {
  ngOnInit(): void {
    /******** */
    let v_to = document.documentElement.style.getPropertyValue('--h-to');
    if(v_to==='')
      v_to="20em"


    document.documentElement.style.setProperty('--h-to','30em')
    document.documentElement.style.setProperty('--h-from', v_to)

  }

}
