import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommanderComponent } from '../commander/commander.component';

@Component({
    selector: 'app-outfit',
    imports: [RouterLink,RouterLinkActive,RouterOutlet,CommanderComponent],
    templateUrl: './outfit.component.html',
    styleUrl: './outfit.component.scss',
    standalone:true
})
export class OutfitComponent {

}
