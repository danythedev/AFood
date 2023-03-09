import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators'
import { FirebaseService } from '../services/data/firebase/firebase.service';

@Injectable({providedIn: 'root'})
export class GlobalInterceptor implements HttpInterceptor {

    constructor(private firebaseService: FirebaseService ) {}

    public intercept(request: HttpRequest<object>, next: HttpHandler): Observable<HttpEvent<object>>{
        this.firebaseService.isServerLoading.next(true);
        return next.handle(request).pipe(
            finalize(()=> this.firebaseService.isServerLoading.next(false))
        )
    }
    
}