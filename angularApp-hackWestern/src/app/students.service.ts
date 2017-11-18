import { Injectable } from '@angular/core';
import {StudentsComponent} from './students/students.component';

@Injectable()
export class StudentsService {
    studentArray=[];

  constructor() { }
  getStudents():string[]{
       return this.studentArray;
      
  }
  addNewStudent(studentName:string)
  {
      
      this.studentArray.push(studentName);
  }

}
