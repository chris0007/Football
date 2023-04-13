import { Component, OnInit } from "@angular/core";
import { LeagueService } from "./shared/league.service";

@Component({
    template: `
    <div class="container">    
    <h1>Leagues</h1>
    <hr/>
    <div class="row">
        <div class="col">
        <league-thumbnail *ngFor="let league of leagues" [league]="league"></league-thumbnail>
        </div>
    </div>
    </div>
    `
})
export class LeaguesListComponent implements OnInit {
    leagues: any[] = [];
    constructor(private leagueService: LeagueService){

    }
    ngOnInit(){
        this.leagues = this.leagueService.getLeagues().response;
    }
}