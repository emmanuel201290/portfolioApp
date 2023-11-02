import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContainerRoutingModule } from './container-routing.module';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
      HomePageComponent,
      AboutPageComponent,
      ProjectPageComponent,
      ContactPageComponent,

  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class ContainerModule { }
