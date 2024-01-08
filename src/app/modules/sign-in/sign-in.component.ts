import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: 'sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})

export class SignInComponent {
    /**
     * 
     */
    validateForm = this.fb.nonNullable.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });

    /**
     * 
     * @param fb 
     */
    constructor(
        private fb: FormBuilder,
        private router: Router
    ) {}

    /**
     * 
     */
    submitForm(): void {
      if (this.validateForm.valid) {
        const userData = this.validateForm.value;
        window.localStorage.setItem(
          'userData',
          `${window.btoa(userData.userName as string)}:${window.btoa(userData.password as string)}`
        );
        this.router.navigate(['admin'])
      } else {
        Object.values(this.validateForm.controls).forEach(control => {
          if (control.invalid) {
            control.markAsDirty();
            control.updateValueAndValidity({ onlySelf: true });
          }
        });
      }
    }

}