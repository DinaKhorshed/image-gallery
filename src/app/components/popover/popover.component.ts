import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PopoverProperties } from 'src/app/interfaces/popover-properties';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  // popover details passed from Card Component
  @Input() popoverDetails: PopoverProperties;

  // Image Alt Text passed from Card Component
  @Input() altText: string;

  // show popover emitter passed to parent to hide Popover when close button is clicked
  @Output() showPopoverEmitter: EventEmitter<boolean> = new EventEmitter();

  ngOnInit(): void {
    // Giving them dummy values for Unit testing
    if (!this.popoverDetails) {
      this.popoverDetails = {
        source: '',
        sourceSet: '',
        description: '',
      };
    }
    if (!this.altText) {
      this.altText = '';
    }
  }
  togglePopover = (showPopover) => {
    this.showPopoverEmitter.emit(showPopover);
  }
}
