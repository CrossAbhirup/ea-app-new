import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Games } from '../games';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  game: any = undefined;
  gamedropdownval : Games[];
  constructor(private gamesService:GamesService) {
    
   }

  ngOnInit() {
    this.gamedropdownval = this.gamesService.getAllGames();
  }

  gameSelected(e) {
    alert(e);
  }

}
