import { Component, Input, OnInit } from '@angular/core';
import { CardProperties } from '../../interfaces/card-properties';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  // Card Properties Input passed from App Component
  @Input() cardDetails: CardProperties;

  // Show Popover flag
  showPopover = false;

  ngOnInit(): void {
    // for unit Testing
    if (!this.cardDetails) {
      this.cardDetails = {
        alternativeText: '',
        source: '',
        popoverProperties: {
          source: '',
          sourceSet: '',
          description: '',
        },
      };
    }
  }

  // Toggle Popover view
  togglePopover = (showPopover: boolean) => {
    this.showPopover = showPopover;
  }
}
