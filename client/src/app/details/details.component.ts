import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GamesService } from '../games.service';
import { Games } from '../games';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  platformName: String;
  topicName: String;
  games : Games;
  gameName: String;
  gameId : String;
  enablePostButton: boolean = false;
  enableTopic:boolean = false;
  enableIssue: boolean = false;
  issueName: boolean = false;

  platforms = [
    {name: 'ios'},
    {name: 'android'},
    {name: 'ps4'},
    {name: 'xbox'},
    {name: 'pc'},
    {name: 'origin'}];

    topics = [
      {name: 'Codes and promotions'},
      {name: 'Game Information'},
      {name: 'Manage my account'},
      {name: 'Missing Content'},
      {name: 'Orders'},
      {name: 'Report a bug'},
      {name: 'Report concerns or harassmentt'},
      {name: 'Techincal support'},
      {name: 'Warranty'}];

      issues = [
        {name: 'Cancel preorder'},
        {name: 'Check order status'},
        {name: 'Dispute charge'},
        {name: 'Order not received'},
        {name: 'Report payment error'},
        {name: 'Request refund'},
        {name: 'Unable to purchase'}];

  constructor(private route: ActivatedRoute, 
    private gamesService: GamesService,private router : Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.gameId = params.get('id');
    })

    this.gamesService.getGamesById(this.gameId).subscribe(game => {
      this.gameName = game.gamesName;
      });
  }

  selectPlatform(platformName){
    this.platformName = platformName;
    //alert(platformName);
    this.enableTopic = true;
  }

  selectTopic(topicName){
    this.topicName = topicName;
    this.enableIssue = true;
  }

  selectIssue(issueName){
    this.issueName = issueName;
    this.enablePostButton = true;
  }

  enablePostButtonMethod(){
    alert("Query has been registered for platform  " + this.platformName + " on topic "+ this.topicName + "for the issue " + this.issueName);
    this.router.navigate(['/games']);
  }

}
