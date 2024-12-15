import { Component } from '@angular/core';
import { produits } from './models/produit.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@Component({
    imports: [ HeaderComponent,FooterComponent,ToolbarComponent
    ],
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone:true
})
export class AppComponent {
  title = 'projetAng';
  produits: produits[] = [];

  ngOnInit() {
    this.produits = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        prix: 0
      },
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        prix: 0
      },
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        prix: 0
      },
    ];
  }
}




