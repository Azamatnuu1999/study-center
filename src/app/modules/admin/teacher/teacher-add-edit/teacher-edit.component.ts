import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TeacherService } from '../services/teacher.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TeachersResponse } from '../models/teacher.model';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.less']
})
export class TeacherAddEditComponent {
  id!:number;
  /**
   * 
   */
  constructor(
    private fb: FormBuilder,
    private $teachers: TeacherService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.params['id']
    if(id) {
      this.id = id;

      this.$teachers.getById(this.id).subscribe((teacher) => {
        this.setFormValues(teacher);
      })
    }
  }

  /**
   * 
   */
  setFormValues(model: TeachersResponse) {
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
      specialization: model.specialization
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
      Object.values(this.form.controls).forEach((control) => {
        if(control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true })
        }
      })
      return
    }

    const request = this.form.getRawValue();
    // To get last element's id and create new one
    this.$teachers.getAll().subscribe((teachers) => {
      const id = teachers.at(-1)?.id as number + 1;
      request.id = request.id ?? id;
      // When teacher add new data
      if(!this.id) {
        this.$teachers.postData(request).subscribe(() => {
          // console.log('post data teacher')
        })
      // When teacher edit old data
      } else {
        this.$teachers.putData(this.id, request).subscribe(() => {
          // console.log('put data teacher')
        })
      }
      this.router.navigate(['../'], { relativeTo: this.route })
    })
  }

  /**
   * 
   */
  reset() {
    this.form.reset()
  }
}
