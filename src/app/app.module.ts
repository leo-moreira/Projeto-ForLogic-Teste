import { environment } from './../environments/environment';
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { EntradaComponent } from './home/entrada/entrada.component';
import { NextComponent } from './home/next/next.component';
import { VenceComponent } from './home/vence/vence.component';
import { FocoComponent } from './home/foco/foco.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule} from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { AngularFireModule} from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CalendarModule } from 'primeng/calendar';

import * as firebase from 'firebase';
firebase.initializeApp(environment.firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EntradaComponent,
    NextComponent,
    VenceComponent,
    FocoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    RouterModule.forRoot(ROUTES),
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    MatCardModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatListModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    BsDatepickerModule.forRoot(),
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
