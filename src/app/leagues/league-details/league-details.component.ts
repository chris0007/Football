import { Component, OnInit} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LeagueService } from "../shared/league.service";

declare var $: any;

@Component({
    templateUrl: './league-details.component.html',
    styleUrls:['./league-details.component.css'] 
})
export class LeagueDetailsComponent implements OnInit{
    league:any
    constructor(private leagueService:LeagueService, private route:ActivatedRoute){

    }

    ngOnInit(){
        this.league = this.leagueService.getLeague(+this.route.snapshot.params['id']);
    }
    
}