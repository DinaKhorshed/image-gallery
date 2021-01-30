import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PopoverComponent } from '../popover/popover.component';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent, PopoverComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should set showPopover to true when card is clicked', () => {
    component = fixture.componentInstance;
    spyOn(component, 'togglePopover');
    fixture.detectChanges();

    fixture.debugElement
      .query(By.css('button'))
      .triggerEventHandler('click', { showPopover: true });
    expect(component.togglePopover).toHaveBeenCalledWith(true);
  });
});
