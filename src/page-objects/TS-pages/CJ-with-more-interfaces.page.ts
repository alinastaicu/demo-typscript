const I = actor();
import { PRODUCTS, SECTIONS } from '../constants';

const tileNumber = (section: SECTIONS, product: PRODUCTS) =>
  `[data-test-id="RecommendationTileDesktop-tileNumber-${section}-${product}"]`;

export const seeCarousel = (numberCarousel: string, section: SECTIONS, product: PRODUCTS) => {
  I.see(numberCarousel, tileNumber(section, product));
};

module.exports = { seeCarousel };
