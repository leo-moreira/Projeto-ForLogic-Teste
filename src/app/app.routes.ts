import { Observable } from 'rxjs';
import { VenceComponent } from './home/vence/vence.component';
import { NextComponent } from './home/next/next.component';
import { FocoComponent } from './home/foco/foco.component';
import { EntradaComponent } from './home/entrada/entrada.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { Tarefa } from './models/tarefa.model';

export const ROUTES: Routes = [
  {path: '', component: EntradaComponent},
  {path: 'foco', component: FocoComponent},
  {path: 'next', component: NextComponent},
  {path: 'vence', component: VenceComponent},
];
