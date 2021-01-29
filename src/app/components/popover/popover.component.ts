import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PopoverProperties } from 'src/app/interfaces/popover-properties';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent {
  @Input() popoverDetails: PopoverProperties;
  @Input() altText: string;
  @Output() showPopover: EventEmitter<boolean> = new EventEmitter();

  togglePopover = (showPopover) => {
    this.showPopover.emit(showPopover);
  };
}
