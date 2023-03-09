import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FirebaseService } from './services/data/firebase/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public isServerLoading = false;
  private isServerLoadingSubscription = new Subscription();

  constructor(private firebaseService: FirebaseService, private cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.isServerLoadingSubscription =
      this.firebaseService.isServerLoading.subscribe((isServerLoading) => {
        this.isServerLoading = isServerLoading;
        this.cdr.detectChanges();
      });
  }

  public ngOnDestroy(): void {
    this.isServerLoadingSubscription.unsubscribe();
  }
}
