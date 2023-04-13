import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeCompnent } from './home/home.component';
import { LeagueDetailsComponent } from './leagues/league-details/league-details.component';
import { LeagueThumbnailComponent } from './leagues/league-thumbnail.component';
import { LeaguesListComponent } from './leagues/leagues-list.component';
import { LeagueService } from './leagues/shared/league.service';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './nav/routes';

@NgModule({
  declarations: [
    AppComponent,
    LeaguesListComponent,
    LeagueThumbnailComponent,
    NavbarComponent,
    LeagueDetailsComponent,
    HomeCompnent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [LeagueService],
  bootstrap: [AppComponent]
})
export class AppModule { }
