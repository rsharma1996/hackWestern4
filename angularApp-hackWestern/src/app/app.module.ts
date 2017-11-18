import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { GrowDirective } from './grow.directive';
import { VolunteersComponent } from './volunteers/volunteers.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    GrowDirective,
    VolunteersComponent
  ],
  imports: [
    BrowserModule
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
