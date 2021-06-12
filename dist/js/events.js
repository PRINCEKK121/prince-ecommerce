const { form, buyOnline, numberInput, colorChoices, sizeChoices, buttons } =
  domSelectors();

// Functions
const updateUI = (e) => {
  console.log(e);
  const { className, classList, dataset, innerText } = e.target;

  if (className === 'colors') {
    // removing the selected color
    colorChoices
      .querySelector('.selected-color')
      ?.classList.remove('selected-color');

    // selecting the clicked color
    classList.add('selected-color');

    // Updating the selected color text
    colorChoices.querySelector('.text').textContent = `Color: ${dataset.color}`;
  } else if (className === 'sizes') {
    console.log('it works');
    sizeChoices
      .querySelector('.selected-size')
      ?.classList.remove('selected-size');

    // selecting the clicked size
    classList.add('selected-size');

    // updating the selected size text
    sizeChoices.querySelector('.text').textContent = `Size: ${innerText}`;
  }
};

const changeInputValueWithBtns = (e) => {
  let value = Number(numberInput.value);

  // Logic to check the click event handlers for the increment and decrement buttons
  console.log(value);
  if (value > 0 && value <= 9) {
    if (e.target.classList.contains('fa-plus')) {
      ++value;
      value = value > 8 ? 9 : value
    }
    if (e.target.classList.contains('fa-minus')) {
      --value;

      value = value < 1 ? 1 : value;
    }
  }

  numberInput.value = value;
};

// annonymous functions
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

buyOnline.addEventListener('click', (e) => {
  e.preventDefault();
});

numberInput.addEventListener('keyup', () => {
  numberInput.value = numberInput.value.slice(0, 1);
});

colorChoices.addEventListener('click', updateUI);
sizeChoices.addEventListener('click', updateUI);

buttons.forEach((button) =>
  button.addEventListener('click', changeInputValueWithBtns)
);
