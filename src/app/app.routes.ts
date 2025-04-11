import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ProjetsComponent } from './projets/projets.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    { path : "home", component: HomeComponent},
    { path: "about" ,component: AboutComponent },
    { path:"projets", component: ProjetsComponent}
    
];
