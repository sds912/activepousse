import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gamme-list',
  templateUrl: './gamme-list.component.html',
  styleUrls: ['./gamme-list.component.scss']
})
export class GammeListComponent {
  @Input() produits?: any[];
  @Input() title?: string;
}
