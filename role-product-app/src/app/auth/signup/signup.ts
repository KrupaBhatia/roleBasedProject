import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../auth.js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.html',
  styleUrl: './signup.scss'
})


export class Signup {

  signupForm: FormGroup;
  loading = false;
  errorMsg = '';
  successMsg = '';

  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private router: Router
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['user', Validators.required]
    });
    

    console.log(this.signupForm);
  }

  
  
  onSubmit(): void {
    if (this.signupForm.invalid) return;
  
    this.loading = true;
  
    this.authService.signup(this.signupForm.value).subscribe({
      next: (res) => {
        this.successMsg = 'User registered successfully!';
        this.errorMsg = '';
        this.loading = false;
        this.signupForm.reset();
      },
      error: (err) => {
        this.errorMsg = err.error?.message || 'Signup failed';
        this.successMsg = '';
        this.loading = false;
      }
    });
  }
  

}
