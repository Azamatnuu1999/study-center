import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../services/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachersResponse } from '../models/teacher.model';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SaveNotificationComponent } from 'src/app/components/save-notification/save-notification.component';
import { TranslateService } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.less'],
  providers: [ MatSnackBar ]
})
export class TeacherAddEditComponent implements OnDestroy {
  id!:number;
  isAdd = true;
  destroyer$ = new Subject<void>();

  // for save notification modal
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  /**
   * 
   */
  constructor(
    private fb: FormBuilder,
    private $teachers: TeacherService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private translate: TranslateService
  ) {
    const id = this.route.snapshot.params['id']

    if(id) {
      this.id = id;
      this.isAdd = false;
      this.$teachers
        .getById(this.id)
        .pipe(takeUntil(this.destroyer$))
        .subscribe((teacher) => {
          this.setFormValues(teacher);
      })
    }

    const lang = localStorage.getItem('currentLanguage');
    if(lang) {
      this.translate.use(lang)
    } else {
      this.translate.use('en')
    }
    
  }

  /**
   * 
   */
  setFormValues(model: TeachersResponse) {
    type TeacherFormKeys = keyof typeof this.form.controls;
    // To set when editing
    Object.keys(this.form.controls).forEach((key) => {
      this.form.controls[key].setValue(model[key as keyof TeachersResponse])
    })
  }

  /**
   * 
   */
  form: FormGroup = this.fb.group({
    id: [''],
    name: ['', Validators.required],
    description: ['', Validators.required],
    dateOfBirth: ['', Validators.required],
    dateOfRegister: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['', Validators.required],
    telegramUserName: ['', Validators.required],
    address: ['', Validators.required],
    specialization: ['', Validators.required]
  })

  /**
   * 
   */
  addTeacher() {
    if(this.form.invalid){
      this.updateValueAndValidity()

      this.openSnackBar("Please enter all required fields!", "alert");

      return
    }

    const request = this.form.getRawValue();
    // To get last element's id and create new one
    this.$teachers
      .getAll()
      .pipe(takeUntil(this.destroyer$))
      .subscribe((teachers) => {
        const id = teachers.at(-1)?.id as number + 1;
        request.id = request.id ?? id;
        // When teacher add new data
        if(!this.id) {
          this.$teachers
            .postData(request)
            .pipe(takeUntil(this.destroyer$))
            .subscribe(() => {
              this.openSnackBar("Teacher data successfully added!", "success");
              // console.log('post data teacher')
          })
        // When teacher edit old data
        } else {
          this.$teachers
            .putData(this.id, request)
            .pipe(takeUntil(this.destroyer$))
            .subscribe(() => {
              this.openSnackBar("Teacher data successfully changed!", "success");
              // console.log('put data teacher')
          })
        }
        this.router.navigate([this.isAdd ? '../' : '../../'], { relativeTo: this.route })
    })
  }

  /**
   * 
   */
  updateValueAndValidity() {
    Object.values(this.form.controls).forEach((control) => {
      if(control.invalid) {
        control.markAsDirty();
        control.updateValueAndValidity({ onlySelf: true })
      }
    })
    return
  }

  /**
   * 
   */
  reset() {
    this.form.reset()
  }

  /**
   * 
   */
  openSnackBar(text: string, className: string) {
    this._snackBar.openFromComponent(SaveNotificationComponent, {
      duration: this.durationInSeconds * 1000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      data: {
        class: className,
        text: text
      }
    })
  }

  /**
   * 
   */
  ngOnDestroy(): void {
      this.destroyer$.next();
      this.destroyer$.complete();
  }

}
