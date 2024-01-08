import { Component, OnInit } from '@angular/core';
import { TeachersResponse } from '../models/teacher.model';
import { TeacherService } from '../services/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.component.html',
  styleUrls: ['./teacher-list.component.css']
})

export class TeacherListComponent implements OnInit {
  /**
   * 
   */
  public teachers$!: Observable<TeachersResponse[]>;

  /**
   * 
   */
  constructor(
    private $teachers: TeacherService,
    private route: ActivatedRoute,
    private router: Router,
    private translate: TranslateService
  ) {
    const lang = localStorage.getItem('currentLanguage');
    if(lang) {
      this.translate.use(lang)
    } else {
      this.translate.use('en')
    }
  }

  ngOnInit() {
    this.getTeachers()
  }

  /**
   * 
   */
  getTeachers() {
    this.teachers$ = this.$teachers.getAll()
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
