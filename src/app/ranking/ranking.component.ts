import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Location } from '@angular/common';


interface UserRanking {
  username: string;
  points: number;
}

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {
  rankings: UserRanking[] = [];
  currentUserRanking: number | undefined;

  constructor(private authService: AuthService, private location: Location) {}

  ngOnInit(): void {
    this.rankings = this.authService.getRankings();
    const currentUser = 'admin';
    this.currentUserRanking = this.authService.getUserRanking(currentUser);
  }

  goBack(): void {
    this.location.back();
  }
}
