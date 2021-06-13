const {
  productName,
  prodRatings,
  prodPrice,
  colorChoices,
  sizeChoices,
  notify,
} = domSelectors();

const removeNotification = () => notify.classList.remove('show');

const generateProductIntro = ({ name, ratings, numOfReviews }) => {
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

const toastNotification = (message) => {
  notify.classList.add('show');
  notify.innerText = message;

  setTimeout(removeNotification, 3000);
};

const userSelections = (e) => {
  const { className, classList, dataset, innerText } = e.target;

  if (className === 'colors') {
    // removing the selected color
    chooseColor
      .querySelector('.selected-color')
      ?.classList.remove('selected-color');

    // selecting the clicked color
    classList.add('selected-color');

    // Updating the selected color text
    chooseColor.querySelector('.text').textContent = `Color: ${dataset.color}`;
  } else if (className === 'sizes') {
    chooseSize
      .querySelector('.selected-size')
      ?.classList.remove('selected-size');

    // selecting the clicked size
    classList.add('selected-size');

    // updating the selected size text
    chooseSize.querySelector('.text').textContent = `Size: ${innerText}`;
  }
};

const changeInputValueWithBtns = (e) => {
  e.preventDefault();
  let value = Number(numberInput.value);

  // Logic to check the click event handlers for the increment and decrement buttons
  if (value > 0 && value <= 9) {
    if (e.target.classList.contains('fa-plus')) {
      ++value;
      value = value > 8 ? 9 : value;
    }
    else if (e.target.classList.contains('fa-minus')) {
      --value;

      value = value < 1 ? 1 : value;
    }
  }

  numberInput.value = value;
};

const submitData = () => {

}

const notifyUser = () => {
  const selectedColor = document.querySelector('.selected-color');
  const selectedSize = document.querySelector('.selected-size');

  if (!selectedColor) {
    toastNotification('Please select a color!');
    return;
  }

  if (!selectedSize) {
    toastNotification('Please select a size!');
    return;
  }
};
