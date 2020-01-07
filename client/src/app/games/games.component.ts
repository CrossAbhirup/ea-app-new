import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../games';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  title = "EA Contact Us Page";
  games : Games[];
  searchText;
  
  constructor(private gamesService : GamesService, private router : Router) { }

  ngOnInit() {
    this.gamesService.getGames().subscribe(game => this.games = game)
  }
  detailsPage(id){
   // alert(id);
    this.router.navigate(['/details/'+id]);
  }
}
