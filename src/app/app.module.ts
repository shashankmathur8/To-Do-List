import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatRadioModule} from '@angular/material/radio';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoComponent } from './to-do/to-do.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoOnlineComponent } from './to-do-online/to-do-online.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {environment} from '../environments/environment';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {ReactiveFormsModule} from '@angular/forms'
import {ToDoOnlineServiceService} from './to-do-online/to-do-online-service.service';
import {MatCheckboxModule} from '@angular/material/checkbox';
@NgModule({
  declarations: [ 
    AppComponent,
    ToDoComponent,
    ToDoOnlineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatRadioModule,FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,MatFormFieldModule,MatDatepickerModule
    ,MatNativeDateModule,MatInputModule,MatIconModule,MatButtonModule,MatTableModule
    ,ReactiveFormsModule,MatCheckboxModule

  ],
  providers: [ToDoOnlineServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
