import { Component, OnDestroy, OnInit } from '@angular/core';
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

  constructor(private firebaseService: FirebaseService) {}

  public ngOnInit(): void {
    console.log('App Init');
    this.isServerLoadingSubscription =
      this.firebaseService.isServerLoading.subscribe((isServerLoading) => {
        console.log('Is Server Loaginf sub');
        this.isServerLoading = isServerLoading;
      });
  }

  public ngOnDestroy(): void {
    this.isServerLoadingSubscription.unsubscribe();
  }
}
