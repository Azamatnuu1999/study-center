import { Component, OnInit } from '@angular/core';
import { TeachersResponse } from '../models/teacher.model';
import { TeacherService } from '../services/teacher.service';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})

export class TeacherListComponent implements OnInit {
  /**
   * 
   */
  teacherList!: TeachersResponse[];

  /**
   * 
   */
  constructor(
    private $teachers: TeacherService
  ) {

  }

  ngOnInit() {
    this.$teachers.getAll().subscribe((teachersData) => {
      this.teacherList = teachersData;
    })
  }
}
