import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class WarningService {

    public isWarningOnSubject = new Subject<boolean>();
    
    constructor() {
    }
    
}