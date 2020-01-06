const I = actor();

const tileNumber = (section, product) =>
  `[data-test-id="RecommendationTileDesktop-tileNumber-${section}-${product}"]`;

const seeCarousel = (numberCarousel, section, product) => {
  I.see(numberCarousel, tileNumber(section, product));
},

module.exports = { seeCarousel };