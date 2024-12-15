import { Component } from '@angular/core';



@Component({
    selector: 'app-acceuil',
    imports: [],
    templateUrl: './acceuil.component.html',
    styleUrl: './acceuil.component.scss',
    standalone:true
})
export class AcceuilComponent {
  tot =3; 
  index= 0;

  nextSlide() {
    this.index = (this.index + 1) % this.tot;
  }

  prevSlide() {
    this.index =
      (this.index - 1 + this.tot) % this.tot;
  }
}
