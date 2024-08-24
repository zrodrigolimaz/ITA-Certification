import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

interface Trophy {
  name: string;
  description: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userPoints: number = 0;
  trophies: Trophy[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userPoints = this.authService.getUserPoints();
    this.trophies = this.authService.getUserTrophies();
  }
}
