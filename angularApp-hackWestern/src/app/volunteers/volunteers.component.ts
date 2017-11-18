import { Component, OnInit } from '@angular/core';
import {VolunteersService} from '../volunteers.service';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.css'],
  providers:[VolunteersService]
})
export class VolunteersComponent implements OnInit {
  title:string="List Of Volunteers";
  volunteers:string[];
  volunteerService=new VolunteersService();
  saveVolunteer(addingVolunteer:string)
  {
    
    
    this.volunteerService.addNewVolunteer(addingVolunteer);
  }

  constructor() {
    this.volunteers=this.volunteerService.getVolunteers();
  }

  ngOnInit() {
  }

}
