import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsResponse } from '../models/student.model';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SaveNotificationComponent } from 'src/app/components/save-notification/save-notification.component';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-add-edit.component.html',
  styleUrls: ['./student-add-edit.component.css'],
  providers: [ MatSnackBar ]
})
export class StudentAddEditComponent {
  id!:number;
  isAdd = true;

  // for save notification modal
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  /**
   * 
   */
  constructor(
    private fb: FormBuilder,
    private $student: StudentService,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
  ) {
    const id = this.route.snapshot.params['id']
    if(id) {
      this.id = id;
      this.isAdd = false;
      this.$student.getById(this.id).subscribe((student) => {
        this.setFormValues(student);
      })
    }
  }

  /**
   * 
   */
  setFormValues(model: StudentsResponse) {
    // To set when editing
    this.form.patchValue({
      id: model.id,
      name: model.name,
      description: model.description,
      dateOfBirth: model.dateOfBirth,
      dateOfRegister: model.dateOfRegister,
      phone: model.phone,
      email: model.email,
      telegramUserName: model.telegramUserName,
      address: model.address,
      learningSubject: model.learningSubject
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
    learningSubject: ['', Validators.required]
  })

  /**
   * 
   */
  addStudent() {
    if(this.form.invalid){
      this.updateValueAndValidity()

      this.openSnackBar("Please enter all required fields!", "alert");

      return
    }

    const request = this.form.getRawValue();
    // To get last element's id and create new one
    this.$student.getAll().subscribe((students) => {
      const id = students.at(-1)?.id as number + 1;
      request.id = request.id ?? id;
      // When student add new data
      if(!this.id) {
        this.$student.postData(request).subscribe(() => {
          this.openSnackBar("Student data successfully added!", "success");
          // console.log('post data student')
        })
      // When student edit old data
      } else {
        this.$student.putData(this.id, request).subscribe(() => {
          this.openSnackBar("Student data successfully changed!", "success");
          // console.log('put data student')
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

}
