const {
  form,
  buyOnline,
  numberInput,
  colorChoices: chooseColor,
  sizeChoices: chooseSize,
  buttons,
  addToCartBtn,
} = domSelectors();

// annonymous functions
form.addEventListener('submit', (e) => {
  e.preventDefault();

  notifyUser();
});

buyOnline.addEventListener('click', (e) => {
  e.preventDefault();

  
});

numberInput.addEventListener('keyup', () => {
  numberInput.value = numberInput.value.slice(0, 1);
});

chooseColor.addEventListener('click', userSelections);
chooseSize.addEventListener('click', userSelections);

buttons.forEach((button) =>
  button.addEventListener('click', changeInputValueWithBtns)
);

addToCartBtn.addEventListener('click', notifyUser);
