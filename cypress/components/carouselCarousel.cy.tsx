import React from 'react';
import { Carousel } from '../../src/components/carousel/carousel';
import '../../src/components/carousel/carousel.css';

describe('<Carousel />', () => {
  it('renders the carousel with images and text', () => {
    const carouselItems = [
      {
        image:
          '/assets/IMG_20231027_221105.jpg',
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum neque et, vehicula justo.',
      },
      {
        image:
          '/assets/IMG_20231116_192517.jpg',
        title: 'Fusce et sem',
        text: 'Fusce et sem nec nunc luctus tincidunt. Nullam sit amet neque sed elit fermentum efficitur.',
      },
    ];

    cy.mount(<Carousel carousel={carouselItems} />);

    cy.get('.slide').should('have.length', carouselItems.length * 2);
    carouselItems.forEach((item, index) => {
      cy.get(`.slide:eq(${index}) img`).should('have.attr', 'src', item.image);
      cy.get(`.slide:eq(${index}) .slide-title`).should(
        'contain.text',
        item.title
      );
      cy.get(`.slide:eq(${index}) .slide-text`).should(
        'contain.text',
        item.text
      );
    });
  });
});
