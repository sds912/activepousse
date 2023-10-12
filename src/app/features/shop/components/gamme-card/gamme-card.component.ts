import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gamme-card',
  templateUrl: './gamme-card.component.html',
  styleUrls: ['./gamme-card.component.scss']
})
export class GammeCardComponent {

  @Input() produit: any;

}
