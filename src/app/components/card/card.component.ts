import { Component, Input } from '@angular/core';
import { CardProperties } from '../../interfaces/card-properties';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() cardDetails: CardProperties;
  showPopover = false;
  togglePopover = (showPopover: boolean) => {
    this.showPopover = showPopover;
  };
}
