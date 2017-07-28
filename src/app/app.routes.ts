import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './componentes/home/home.component';
import {EditarComponent} from './componentes/editar/editar.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'editar/:id', component: EditarComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
