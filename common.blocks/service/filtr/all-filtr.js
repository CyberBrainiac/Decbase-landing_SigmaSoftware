"use strict"

async function allFiltr() {
  const productIDs = [26, 28, 29];
  const container = document.querySelector('.service > div.content');

  for(const id of productIDs) {
    const product = await getProductById(id);
    if(!product) {continue}

    product.currentImageSrc = product.images[0];
    const productCard= createCard(product);
    container.appendChild(productCard);
  }
}