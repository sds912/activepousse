import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    
    public carousels: any[] = [
      {
        name: "Gamme Booster",
        desc: "",
        link: "",
        img: "../../../../../assets/img/gamme-puissance.jpg",
        price: "16000"
      },
      {
        name: "Game Extra Pouss",
        desc: "",
        link: "",
        img: "../../../../../assets/img/gamme-mini.webp",
        price: "8500"
      },
      {
        name: "Gamme Puissance",
        desc: "",
        link: "",
        img: "../../../../../assets/img/gamm-booster.jpg",
        price: "25000"
      }
    ]
}
