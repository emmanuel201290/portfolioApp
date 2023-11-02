import { Component, OnInit } from '@angular/core';
import { Project } from '../../interfaces/project';

@Component({
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})


export class ProjectPageComponent implements OnInit{
  ngOnInit(): void {
    let v_to = document.documentElement.style.getPropertyValue('--h-to');

    document.documentElement.style.setProperty('--h-to','80em')
    document.documentElement.style.setProperty('--h-from', v_to)
  }

  public myProject: Project[] = [
    {
      title: 'VESA',
      description: 'Ventanilla Electronica de Servicios Aduanero, system created to avoid crowding of people in 2019 in customs processing offices - © 2019 - DGA',
      link: 'https://res.cloudinary.com/emmanuel201290/video/upload/v1638201415/ADRL/vesa/vesa_zgywdf.mp4',
      img: './assets/vct-1.png',
      stack: 'ReactJS | Java | Spring MVC | Oracle 11G | © 2021 - DGA',
      github: ''
    },
    {
      title: 'MSR',
      description: 'Modulo de Soporte Regional, module to transmit information on Nicaraguan customs import transits from the Central American region. ',
      link: 'https://res.cloudinary.com/emmanuel201290/video/upload/v1698696700/bd/2023-10-30_14-07-33_ipg4aq.mp4',
      img: './assets/msr2.png',
      stack: 'ReactJS | Java | Spring MVC | Oracle 11G | © 2021 - DGA',
      github: ''
     }
    ,
    {
      title: 'CountryApp',
      description: 'Show all country around the world by capital, country and region. This application was developing in Angular Js',
      link: 'https://emmanuel201290.github.io/country-app/#/countries/by-capital',
      img: './assets/countries-1.png',
      stack: 'AngularJs',
      github: 'https://github.com/emmanuel201290/country-app'
    },
    {
      title: 'UserAccount',
      description: 'CRUD API - Create, Read, Update and Delete using Node Js, Express, MongoDB, JsonWebToken. Deployed in RailWay',
      link: '',
      img: './assets/user-account.png' ,
      stack: 'NodeJS | Express | MongoDB | JWT - (Java Web Token)',
      github: 'https://github.com/emmanuel201290/node-api-user'
    },
    {
      title: 'SuperHero',
      description: 'This application shows a list of super heroes where you can add, update, delete super heroes.',
      link: 'https://emmanuel201290.github.io/superhero/#/heroes/list',
      img: './assets/hero.jpg',
      stack: 'AngularJS',
      github: 'https://github.com/emmanuel201290/superhero'
    },
    {
      title: 'MapApp',
      description: 'Use of Maps based on Mapbox (the API is similar to Google Maps)',
      link: 'https://emmanuel201290.github.io/mapApp/#/maps/fullscreen',
      img: './assets/map1.png',
      stack: 'AngularJS, Mapbox library',
      github: 'https://github.com/emmanuel201290/mapApp'
    }

  ]
}
