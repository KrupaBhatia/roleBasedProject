import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth } from '../../auth/auth';
import { Router } from '@angular/router';
import { ToastService } from '../../core/services/toast.js';



@Component({
  selector: 'app-create-user',
  standalone: false,
  templateUrl: './create-user.html',
  styleUrl: './create-user.scss'
})

export class CreateUser {

  createUserForm: FormGroup;
  loading = false;
  successMsg = '';
  errorMsg: string | null = null; 
 

  constructor(private fb: FormBuilder, private auth: Auth, private router: Router,private toast: ToastService) {
    this.createUserForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['user', Validators.required] 
    });
  }

  onSubmit(): void {
    if (this.createUserForm.invalid) return;
  
    const userData = this.createUserForm.value;
    this.loading = true;
  
    this.auth.signup(userData).subscribe({
      next: () => {
        this.toast.success('User created successfully!');
        this.router.navigate(['/products']);
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
  
        if (err.error.errors && err.error.errors[0].msg) {
          this.toast.error(err.error.errors[0].msg);
          this.errorMsg = err.error.errors[0].msg;
        } else {
          this.toast.error('An unknown error occurred.');
          this.errorMsg = 'An unknown error occurred.';
        }
      }
    });
  }
  

}
