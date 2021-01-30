import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { PopoverComponent } from './components/popover/popover.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, CardComponent, PopoverComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'image-gallery'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('image-gallery');
  });

  it('should Have cardsList length equal to totalCardsNo', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const countOfCards = app.totalCardsNo;
    const cardsList = app.cardsList;
    expect(cardsList.length).toEqual(countOfCards);
  });

  it('Should Render each card as a CardComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    fixture.detectChanges();
    const cardComponentsDebugElements = fixture.debugElement.queryAll(
      By.directive(CardComponent)
    );
    expect(cardComponentsDebugElements.length).toEqual(app.cardsList.length);
    for (let i = 0; i < cardComponentsDebugElements.length; i++) {
      expect(
        cardComponentsDebugElements[i].componentInstance.cardDetails
      ).toEqual(app.cardsList[i]);
    }
  });
});
