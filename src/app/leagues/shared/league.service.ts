import { Injectable } from "@angular/core";
import { first } from "rxjs";

@Injectable()
export class LeagueService {
    getLeagues() {
        return LEAGUES;
    }

    getLeague(id:number){
        return LEAGUES.response[0];
    }
}

const LEAGUES = 
    {
        "get": "leagues",
        "parameters": {
            "id": "39"
        },
        "errors": [],
        "results": 1,
        "paging": {
            "current": 1,
            "total": 1
        },
        "response": [
            {
                "league": {
                    "id": 39,
                    "name": "Premier League",
                    "type": "League",
                    "logo": "https://media.api-sports.io/football/leagues/2.png"
                },
                "country": {
                    "name": "England",
                    "code": "GB",
                    "flag": "https://media.api-sports.io/flags/gb.svg"
                },
                "seasons": [
                    {
                        "year": 2010,
                        "start": "2010-08-14",
                        "end": "2011-05-17",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "year": 2011,
                        "start": "2011-08-13",
                        "end": "2012-05-13",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    }
                ]
            },
            {
                "league": {
                    "id": 39,
                    "name": "Premier League",
                    "type": "League",
                    "logo": "https://media.api-sports.io/football/leagues/2.png"
                },
                "country": {
                    "name": "England",
                    "code": "GB",
                    "flag": "https://media.api-sports.io/flags/gb.svg"
                },
                "seasons": [
                    {
                        "year": 2010,
                        "start": "2010-08-14",
                        "end": "2011-05-17",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "year": 2011,
                        "start": "2011-08-13",
                        "end": "2012-05-13",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    }
                ]
            },
            {
                "league": {
                    "id": 39,
                    "name": "Premier League",
                    "type": "League",
                    "logo": "https://media.api-sports.io/football/leagues/2.png"
                },
                "country": {
                    "name": "England",
                    "code": "GB",
                    "flag": "https://media.api-sports.io/flags/gb.svg"
                },
                "seasons": [
                    {
                        "year": 2010,
                        "start": "2010-08-14",
                        "end": "2011-05-17",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "year": 2011,
                        "start": "2011-08-13",
                        "end": "2012-05-13",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    }
                ]
            },
            {
                "league": {
                    "id": 39,
                    "name": "Premier League",
                    "type": "League",
                    "logo": "https://media.api-sports.io/football/leagues/2.png"
                },
                "country": {
                    "name": "England",
                    "code": "GB",
                    "flag": "https://media.api-sports.io/flags/gb.svg"
                },
                "seasons": [
                    {
                        "year": 2010,
                        "start": "2010-08-14",
                        "end": "2011-05-17",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "year": 2011,
                        "start": "2011-08-13",
                        "end": "2012-05-13",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    }
                ]
            },
            {
                "league": {
                    "id": 39,
                    "name": "Premier League",
                    "type": "League",
                    "logo": "https://media.api-sports.io/football/leagues/2.png"
                },
                "country": {
                    "name": "England",
                    "code": "GB",
                    "flag": "https://media.api-sports.io/flags/gb.svg"
                },
                "seasons": [
                    {
                        "year": 2010,
                        "start": "2010-08-14",
                        "end": "2011-05-17",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "year": 2011,
                        "start": "2011-08-13",
                        "end": "2012-05-13",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    }
                ]
            },
            {
                "league": {
                    "id": 39,
                    "name": "Premier League",
                    "type": "League",
                    "logo": "https://media.api-sports.io/football/leagues/2.png"
                },
                "country": {
                    "name": "England",
                    "code": "GB",
                    "flag": "https://media.api-sports.io/flags/gb.svg"
                },
                "seasons": [
                    {
                        "year": 2010,
                        "start": "2010-08-14",
                        "end": "2011-05-17",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "year": 2011,
                        "start": "2011-08-13",
                        "end": "2012-05-13",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    }
                ]
            },
            {
                "league": {
                    "id": 39,
                    "name": "Premier League",
                    "type": "League",
                    "logo": "https://media.api-sports.io/football/leagues/2.png"
                },
                "country": {
                    "name": "England",
                    "code": "GB",
                    "flag": "https://media.api-sports.io/flags/gb.svg"
                },
                "seasons": [
                    {
                        "year": 2010,
                        "start": "2010-08-14",
                        "end": "2011-05-17",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "year": 2011,
                        "start": "2011-08-13",
                        "end": "2012-05-13",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    }
                ]
            },
            {
                "league": {
                    "id": 39,
                    "name": "Premier League",
                    "type": "League",
                    "logo": "https://media.api-sports.io/football/leagues/2.png"
                },
                "country": {
                    "name": "England",
                    "code": "GB",
                    "flag": "https://media.api-sports.io/flags/gb.svg"
                },
                "seasons": [
                    {
                        "year": 2010,
                        "start": "2010-08-14",
                        "end": "2011-05-17",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    },
                    {
                        "year": 2011,
                        "start": "2011-08-13",
                        "end": "2012-05-13",
                        "current": false,
                        "coverage": {
                            "fixtures": {
                                "events": true,
                                "lineups": true,
                                "statistics_fixtures": false,
                                "statistics_players": false
                            },
                            "standings": true,
                            "players": true,
                            "top_scorers": true,
                            "top_assists": true,
                            "top_cards": true,
                            "injuries": true,
                            "predictions": true,
                            "odds": false
                        }
                    }
                ]
            },
        ]
    }