const shoppingList = localStorage.getItem('userData')
  ? JSON.parse(localStorage.getItem('userData'))
  : [];

const {
  productDetailsIntro,
  productDetailsBody,
  productName,
  prodRatings,
  prodPrice,
  colorChoices,
  sizeChoices,
  notify,
  cartCount,
  itemColor,
  itemImage,
  itemName,
  itemPrice,
  itemQuantity,
  itemSize,
  itemTotalPrice,
} = domSelectors();

const removeNotification = () => notify.classList.remove('show');

const displayingRatingsOnLargerScreens = (name, ratings, numOfReviews) => {
  productDetailsBody.insertAdjacentHTML('afterbegin', '<h1 class="prodName"></h1><p class="prodRatings"></p>');

  let ratingsSection = '<span class="ratingsContainer">';

  document.querySelector('.prodName').textContent = name;

  for (let i = 0; i < ratings; i++) {
    ratingsSection += '<i class="fas fa-star"></i>';

    if (i === ratings - 1)
      ratingsSection += `
      </span> ${numOfReviews} Reviews
    `;
  }

  document.querySelector('.prodRatings').innerHTML = ratingsSection;
}

const generateProductIntro = ({ name, ratings, numOfReviews }) => {
  cartCount.textContent = `(${shoppingList.length})`;

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

const generateProductDetails = ({ name, numOfReviews, ratings, price, colors, sizes }) => {
  const { prodPrice, colorChoices, sizeChoices } = domSelectors();
console.log(name);
  displayingRatingsOnLargerScreens(name, ratings, numOfReviews);

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
    chooseColor.querySelector('.text').textContent = `Color: ${dataset.color.replace('_', ' ')}`;

    // changing the image displayed
    productDetailsIntro.querySelector('img').src = `${location.origin}/dist/images/${dataset.color}.jpg`;
    // displayImage.src(`images/${dataset.color}`)
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
    } else if (e.target.classList.contains('fa-minus')) {
      --value;

      value = value < 1 ? 1 : value;
    }
  }

  numberInput.value = value;
};

const submitData = () => {
  const color = document.querySelector('.selected-color').dataset.color;
  const price = Number(prodPrice.textContent.split('$')[1]);

  const data = {
    img: color,
    price,
    name: productName.textContent,
    colorSelected: color,
    sizeSelected: document.querySelector('.selected-size').textContent,
    qty: Number(numberInput.value),
  };

  shoppingList.push(data);
  populateMiniCart(data);
  localStorage.setItem('userData', JSON.stringify(shoppingList));
};

const populateMiniCart = ({
  name,
  img,
  price,
  colorSelected,
  sizeSelected,
  qty,
}) => {
  
  itemImage.setAttribute("style", 
    `background: url(images/${img}.jpg) no-repeat center center/cover; margin-right: 2rem; border-radius: 0.5rem; width: 70%`);
  itemName.textContent = name;
  itemColor.textContent = `${colorSelected.replace('_', ' ')} /`;
  itemSize.textContent = sizeSelected;
  itemQuantity.textContent = qty;
  itemPrice.textContent = `$ ${price.toFixed(2)}`;
  itemTotalPrice.textContent = `$ ${(qty * price).toFixed(2)}`;
};

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

  displayOverlayAndMiniCart();

  // submitting the data
  submitData();
};

const hideOverlayAndMiniCart = () => {
  document.querySelector('.overlay').classList.remove('show');
  document.querySelector('aside.mini-cart').classList.remove('show');

  cartCount.textContent = `(${shoppingList.length})`;
};

const displayOverlayAndMiniCart = () => {
  document.querySelector('.overlay').classList.add('show');
  document.querySelector('aside.mini-cart').classList.add('show');
};
