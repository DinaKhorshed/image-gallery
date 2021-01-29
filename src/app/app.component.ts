import { Component } from '@angular/core';
import { CardProperties } from './interfaces/card-properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'image-gallery';
  totalCardsNo = 20;
  imagesProvider = 'https://loremflickr.com/';
  imageSizes = [
    {
      width: 200,
      height: 150,
    },
    {
      width: 150,
      height: 200,
    },
  ];
  imagesCategories = ['kitten', 'dog', 'nature', 'horse', 'light'];
  cardsList: CardProperties[] = [];
  imageDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

  ngOnInit(): void {
    this.cardsList = this.generateCardsList();
  }
  getRandomItemFromArray = (items: any[]) => {
    return items[Math.floor(Math.random() * items.length)];
  };

  generateCardsList = (): CardProperties[] => {
    for (let i = 0; i < this.totalCardsNo; i++) {
      const imageSize = this.getRandomItemFromArray(this.imageSizes);
      const imageCategory = this.getRandomItemFromArray(this.imagesCategories);

      let cardItem: CardProperties = {
        alternativeText: '',
        source: '',
        popoverProperties: {
          source: '',
          sourceSet: '',
          description: '',
        },
      };

      cardItem.alternativeText = `An amazing picture of  ${imageCategory}`;
      cardItem.popoverProperties.description = this.imageDescription;
      cardItem.source = `${this.imagesProvider}/${imageSize.width}/${
        imageSize.height
      }/${imageCategory}?lock=${i + 1}`;
      cardItem.popoverProperties.source = `${
        this.imagesProvider
      }/600/600/${imageCategory}?lock=${i + 1}`;
      cardItem.popoverProperties.sourceSet = `${
        this.imagesProvider
      }/600/600/${imageCategory}?lock=${i + 1} 2x,
      ${this.imagesProvider}/450/450/${imageCategory}?lock=${i + 1} 1.5x,
      ${this.imagesProvider}/300/300/${imageCategory}?lock=${i + 1} 1x`;
      this.cardsList.push(cardItem);
    }
    return this.cardsList;
  };
}
