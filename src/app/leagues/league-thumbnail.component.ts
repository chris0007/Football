import { style } from "@angular/animations";
import { Component, Input } from "@angular/core";

@Component({
    selector: 'league-thumbnail',
    templateUrl: './league-thumbnail.component.html'    
})
export class LeagueThumbnailComponent{
    @Input() league:any
}