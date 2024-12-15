import { Component } from '@angular/core';
import { CommanderComponent } from '../commander/commander.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-manteau',
    imports: [CommanderComponent,RouterLink,RouterLinkActive,RouterOutlet],
    templateUrl: './manteau.component.html',
    styleUrl: './manteau.component.scss',
    standalone:true
})
export class ManteauComponent {

}
