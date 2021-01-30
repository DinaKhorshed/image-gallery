import { Component, OnInit } from '@angular/core';
import { CardProperties } from './interfaces/card-properties';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // App title
  title = 'image-gallery';

  // total Number of Cards displayed
  totalCardsNo = 20;

  // Images provider
  imagesProvider = 'https://loremflickr.com/';

  // Array of Image sizes for cards
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

// Array of Popover image sizes for different resolutions
  popoverImageSizes = {
      mobile: {
        width: 300,
        height: 300,
      },
      tablet: {
        width: 400,
        height: 400,
      },
      desktop: {
        width: 550,
        height: 550,
      }
    };

  // Set of Image categories
  imagesCategories = ['kitten', 'dog', 'nature', 'horse', 'light'];

  // Set of Adjectives for Images
  imagesAdjectives = ['An amazing', 'A beautiful', 'A nice', 'A lovely', 'A cool'];

  // List of Cards to be filled on Init
  cardsList: CardProperties[] = [];

  // Image Description for Popover
  imageDescription = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`;

  ngOnInit(): void {
    this.cardsList = this.generateCardsList();
  }

  // return random element in a provided array
  getRandomItemFromArray = (items: any[]) => {
    return items[Math.floor(Math.random() * items.length)];
  }

  // Build a List of Cards
  generateCardsList = (): CardProperties[] => {
    for (let i = 0; i < this.totalCardsNo; i++) {
      // Get random value for a size
      const imageSize = this.getRandomItemFromArray(this.imageSizes);

      // Get a random Value for a Category
      const imageCategory = this.getRandomItemFromArray(this.imagesCategories);

      // Get a random value for Adjective
      const imagesAdjective = this.getRandomItemFromArray(this.imagesAdjectives);

      const cardItem: CardProperties = {
        alternativeText: '',
        source: '',
        popoverProperties: {
          source: '',
          sourceSet: '',
          description: '',
        },
      };
      // Build Image alt and Card Title
      cardItem.alternativeText = `${imagesAdjective} picture of  ${imageCategory}`;

      // Get Popover Description
      cardItem.popoverProperties.description = this.imageDescription;

      // Image Source
      cardItem.source = `${this.imagesProvider}/${imageSize.width}/${
        imageSize.height
      }/${imageCategory}?lock=${i + 1}`;

      // Popover Image Source
      cardItem.popoverProperties.source = `${
        this.imagesProvider
      }/600/600/${imageCategory}?lock=${i + 1}`;

      // Popover srcSet for different Image sizes
      cardItem.popoverProperties.sourceSet = `${
        this.imagesProvider
      }/${this.popoverImageSizes.desktop.width}/${this.popoverImageSizes.desktop.height}/${imageCategory}?lock=${i + 1} 2x,
      ${this.imagesProvider}/${this.popoverImageSizes.tablet.width}/${this.popoverImageSizes.tablet.height}/${imageCategory}?lock=${i + 1} 1.5x,
      ${this.imagesProvider}/${this.popoverImageSizes.mobile.width}/${this.popoverImageSizes.mobile.height}/${imageCategory}?lock=${i + 1} 1x`;

      // Add card Item to Cards List
      this.cardsList.push(cardItem);
    }
    return this.cardsList;
  }
}
