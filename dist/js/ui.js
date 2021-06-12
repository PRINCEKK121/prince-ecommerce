const generateProductIntro = ({ name, ratings, numOfReviews }) => {
  const { productName, prodRatings } = domSelectors();
  let ratingsSection = '<span class="ratingsContainer">';

  productName.textContent = name;
  // prodRatings
  for (let i = 0; i < ratings; i++) {
    ratingsSection += '<i class="fas fa-star"></i>';

    if (i === ratings - 1)
      ratingsSection += `
      </span> ${numOfReviews} Reviews
    `;
  }

  prodRatings.innerHTML = ratingsSection;
};

const generateProductDetails = ({ price, colors, sizes }) => {
  const { prodPrice, colorChoices, sizeChoices } = domSelectors();

  prodPrice.textContent = `$ ${price.toFixed(2)}`;

  // Displaying the colors
  let colorContent = '<span class="text">Color:</span>';
  colors.forEach((color) => {
    
    colorContent += `
      <div class="color-item">
        <span class="colors" data-color="${color.name}" style="background: ${color.hex}">
        </span>
      </div>
    `;
  });

  colorChoices.innerHTML = colorContent;

  // Displaying the sizes
  sizes.forEach((size) => {
    const span = document.createElement('span');
    span.className = 'sizes';
    span.textContent = size;

    sizeChoices.appendChild(span);
  });
};