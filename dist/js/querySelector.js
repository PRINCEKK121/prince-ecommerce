const domSelectors = () => {
  const productDetailsIntro = document.querySelector('#product-details-intro');
  const productDetailsBody = document.querySelector('#product-details-body');
  const userChoices = productDetailsBody.querySelector('.user-choice');

  return {
    productDetailsIntro,
    cartCount: document.querySelector('.count'),
    productName: productDetailsIntro.querySelector('h1'),
    prodRatings: productDetailsIntro.querySelector('p'),
    prodPrice: productDetailsBody.querySelector('.product-details .price'),
    colorChoices: userChoices.querySelector('.color-choice'),
    sizeChoices: userChoices.querySelector('.size-choice')
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

const generateProductDetails = ({price, colors, sizes}) => {
  const { prodPrice, colorChoices, sizeChoices } = domSelectors();

  prodPrice.textContent = `$ ${price.toFixed(2)}`;
  
  // Displaying the colors
  colors.forEach(color => {
    const span = document.createElement('span');
    span.className = 'colors';
    span.style.background = color.hex;

    colorChoices.appendChild(span);
  });

  // Displaying the sizes
  sizes.forEach(size => {
    const span = document.createElement('span');
    span.className = 'sizes';
    span.textContent = size;

    sizeChoices.appendChild(span);
  })
}