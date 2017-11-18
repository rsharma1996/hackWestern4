import { Component, OnInit } from '@angular/core';
import {StudentsService} from '../students.service';
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
  providers: [StudentsService]
})
export class StudentsComponent implements OnInit {
  
  
  title:string="List of Participants";
  students:string[];
  studentService=new StudentsService();
  saveStudent(addingStudent:string)
  {
    
    this.studentService.addNewStudent(addingStudent);
  }
  constructor() { 
    
    this.students=this.studentService.getStudents();
    }

  ngOnInit() {
  }

}
