window.addEventListener('DOMContentLoaded', () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'product.json');

  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);

      generateProductIntro(data[0]);
    }
  };

  xhr.send();
});