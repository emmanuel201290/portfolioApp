import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectPageComponent } from './pages/project-page/project-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
   {
    path: 'home',
    component: HomePageComponent
   },
   {
    path: 'about',
    component: AboutPageComponent
   },
   {
    path: 'project',
    component: ProjectPageComponent
   },
   {
    path: 'contact',
    component: ContactPageComponent
   },
   {
    path: '**',
    redirectTo: 'home'
   }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class ContainerRoutingModule { }
