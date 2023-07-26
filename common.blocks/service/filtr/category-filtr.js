"use strict"

async function categoryFiltr(categoryID) {
  const container = document.querySelector('.service > div.content');
  const allCategories = {
    "filtr__plant-hanger": 26,
    "filtr__art-lamp": 28,
    "filtr__chinese-vase": 29,
  }

  if(!Object.keys(allCategories).includes(categoryID)) {
    return new UnvalidValueError(categoryID);
  }

  /**Create products card*/
  const product = await getProductById(allCategories[categoryID]);
  if(!product) {return}

  for (const imgUrl of product.images) {
    product.currentImageSrc = imgUrl;
    const productCard= createCard(product);
    container.appendChild(productCard);
  }
}