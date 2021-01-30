import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PopoverComponent } from './popover.component';

describe('PopoverComponent', () => {
  let component: PopoverComponent;
  let fixture: ComponentFixture<PopoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PopoverComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a close Button', () => {
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('button')).toHaveClass('close');
  });

  it('should call togglePopover when close button is clicked', () => {
    spyOn(fixture.componentInstance, 'togglePopover');
    fixture.detectChanges();
    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', {showPopover: false});
    expect(component.togglePopover).toHaveBeenCalledWith(false);
  });
});
