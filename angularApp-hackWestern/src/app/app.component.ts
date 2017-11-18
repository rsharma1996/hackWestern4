import { Component } from '@angular/core';
import {StudentsComponent} from './students/students.component';
import {VolunteersComponent} from './volunteers/volunteers.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hack Western 4';
}
