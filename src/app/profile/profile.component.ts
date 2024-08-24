import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';

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

  constructor(private authService: AuthService, private location: Location ) {}

  ngOnInit(): void {
    this.userPoints = this.authService.getUserPoints();
    this.trophies = this.authService.getUserTrophies();
  }

  goBack(): void {
    this.location.back();
  }
}
