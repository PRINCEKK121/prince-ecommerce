const domSelectors = () => {
  const productDetailsIntro = document.querySelector('#product-details-intro');
  const productDetailsBody = document.querySelector('#product-details-body');
  const userChoices = productDetailsBody.querySelector('.user-choice');
  const miniCart = document.querySelector('.mini-cart .body');

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
    sizeText: document.querySelector('.size-choice .text'),
    notify: document.querySelector('.notify-user'),
    addToCartBtn: document.querySelector('.add-to-cart-btn'),
    buttons: document.querySelectorAll('.btn'),
    itemImage: miniCart.querySelector('div.img'),
    itemName: miniCart.querySelector('.item-name'),
    itemPrice: miniCart.querySelector('.item-price'),
    itemColor: miniCart.querySelector('.item-color'),
    itemSize: miniCart.querySelector('.item-size'),
    itemQuantity: miniCart.querySelector('.item-quantity'),
    itemTotalPrice: miniCart.querySelector('.product-total-price')
  };
};
