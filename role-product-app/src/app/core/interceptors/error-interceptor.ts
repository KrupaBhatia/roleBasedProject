import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private snackBar: MatSnackBar) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        let message = 'An unknown error occurred';

        if (error.error?.message) {
          message = error.error.message;
        } else if (error.status === 0) {
          message = 'Unable to connect to server';
        } else if (error.status === 401) {
          message = 'Unauthorized. Please login.';
          this.router.navigate(['/auth/login']);
        } else if (error.status === 403) {
          message = 'Access denied';
        }

        this.snackBar.open(message, 'Close', {
          duration: 3000,
          verticalPosition: 'top'
        });

        return throwError(() => error);
      })
    );
  }
}
