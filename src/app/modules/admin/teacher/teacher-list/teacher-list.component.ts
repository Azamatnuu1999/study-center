import { Component, OnInit } from '@angular/core';
import { TeachersResponse } from '../models/teacher.model';
import { TeacherService } from '../services/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    private $teachers: TeacherService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getTeachers()
  }

  /**
   * 
   */
  getTeachers() {
    this.$teachers.getAll().subscribe((teachersData) => {
      this.teacherList = teachersData;
    })
  }

  /**
   * 
   * @param id 
   */
  editTeacher(id: number) {
    this.router.navigate(['edit',id], { relativeTo: this.route })
  }

  /**
   * 
   */
  deleteTeacher(id: number) {
    this.$teachers.deleteData(id).subscribe(() => {
      this.getTeachers()
    })
  }

}
