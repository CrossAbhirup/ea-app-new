import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
import { Games } from './games';

@Injectable()
export class GamesService {

  gamedropdown : Games[] = [
    { gamesName : "Star Wars JEDI Fallen Order"},
    { gamesName : "NFS Heat"},
    { gamesName : "Plants vs Zombies"},
    { gamesName : "Fifa 20"},
    { gamesName : "Fifa Mobile"},
    { gamesName : "NBA Live"},
    { gamesName : "NHL 20"},
    { gamesName : "Madden Mobile"}
  ];

  // inject http service and create object
  constructor(private http: Http) {
 
  }

  getAllGames() : Games[]{
    return this.gamedropdown;
  }

 getGames(){
	let URL = 'http://localhost:3000/api/games';
	return this.http.get(URL).pipe(map((res) => res.json()));
 }

  getGamesById(id){
	let URL = 'http://localhost:3000/api/games/'+id;
	return this.http.get(URL).pipe(map((res) => res.json()));
 }

//  addGames(newGame){
// 	let headers = new Headers();
// 	headers.append('Content-Type','application/json');
// 	let URL = 'http://localhost:3000/api/games';
// 	return this.http.post(URL, newGame, {headers:headers}).pipe(map((res) => res.json()));
//  }

//  deleteContact(id){
// 	let URL = 'http://localhost:3000/api/games/'+id;
// 	return this.http.delete(URL).pipe(map((res) => res.json()));
//  }

}