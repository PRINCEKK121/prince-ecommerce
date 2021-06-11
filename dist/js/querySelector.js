const domSelectors = () => {
  const productDetailsIntro = document.querySelector('#product-details-intro');


  return {
    productDetailsIntro,
    cartCount: document.querySelector('.count'),
    productName: productDetailsIntro.querySelector('h1'),
    prodRatings: productDetailsIntro.querySelector('p'),

  };
};

const generateProductIntro = ({name, ratings, numOfReviews}) => {
  const { productName, prodRatings } = domSelectors();
  let ratingsSection = '<span class="ratingsContainer">';

  productName.textContent = name;
  // prodRatings
  for (let i = 0; i < ratings; i++) {
    ratingsSection += '<i class="fas fa-star"></i>';

    if (i === ratings - 1) ratingsSection += `
      </span> ${numOfReviews} Reviews
    `
  }

  prodRatings.innerHTML = ratingsSection;
}