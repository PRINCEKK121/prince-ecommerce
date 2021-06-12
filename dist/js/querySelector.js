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
    sizeChoices: userChoices.querySelector('.size-choice'),
    buyOnline: document.querySelector('form .buy-online'),
    form: document.querySelector('form'),
    numberInput: document.querySelector('input[type="number"]'),
    // colorText: userChoices.querySelector('.color-choice .text'),
    sizeText: document.querySelector('.size-choice .text'),
    buttons: document.querySelectorAll('.btn')
  };
};
