import { Routes } from "@angular/router";
import { HomeCompnent } from "../home/home.component";
import { LeagueDetailsComponent } from "../leagues/league-details/league-details.component";
import { LeaguesListComponent } from "../leagues/leagues-list.component";

export const appRoutes:Routes = [
    {path: 'leagues', component: LeaguesListComponent},
    {path: 'leagues/:id', component: LeagueDetailsComponent},
    {path: 'home', component: HomeCompnent},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
]