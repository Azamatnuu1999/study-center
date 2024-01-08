import { Component, OnDestroy, OnInit } from '@angular/core';
import { StudentsResponse } from '../models/student.model';
import { StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})

export class StudentListComponent implements OnInit, OnDestroy {
  /**
   * 
   */
  private destroyer$ = new Subject<void>();
  public students$!: Observable<StudentsResponse[]>;

  /**
   * 
   */
  constructor(
    private $students: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.getStudents()
  }

  /**
   * 
   */
  getStudents() {
    this.students$ = this.$students.getAll()
  }

  /**
   * 
   * @param id 
   */
  editStudent(id: number) {
    this.router.navigate(['edit',id], { relativeTo: this.route })
  }

  /**
   * 
   */
  deleteStudent(id: number) {
    this.$students.deleteData(id).pipe(takeUntil(this.destroyer$)).subscribe(() => {
      this.getStudents()
    })
  }

  /**
   * 
   */
  ngOnDestroy() : void {
    this.destroyer$.next();
    this.destroyer$.complete();
  }

}
