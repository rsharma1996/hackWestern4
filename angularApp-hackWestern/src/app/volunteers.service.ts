import { Injectable } from '@angular/core';
import {VolunteersComponent} from './volunteers/volunteers.component';

@Injectable()
export class VolunteersService {
    volunteerArray=[];
    

  constructor() {}
  getVolunteers():string[]
  {
      
      return this.volunteerArray;
  }
  addNewVolunteer(volunteerName:string)
  {
      
      this.volunteerArray.push(volunteerName);
  }

}
