import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/services/data/firebase/firebase-user.model';
import { FirebaseUserService } from 'src/app/services/data/firebase/firebase-user.service';

@Component({
  selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.scss']
})
export class DashboardProfileComponent implements OnInit {

  public activeUser: User | null = null;

  constructor(private userService: FirebaseUserService) { }

  ngOnInit(): void {
    this.activeUser = this.userService.activeUser;
  }

}
