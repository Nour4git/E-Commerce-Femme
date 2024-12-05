import { Component } from '@angular/core';
import { CommanderComponent } from '../commander/commander.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-sac',
    imports: [CommanderComponent,RouterLink,RouterLinkActive,RouterOutlet],
    templateUrl: './sac.component.html',
    styleUrl: './sac.component.scss',
    standalone:true
})
export class SacComponent {

}
