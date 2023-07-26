"use strict"

async function getProductById(id) {
  if(isNumber(id) !== true) {throw new UnvalidValueError(id)}
  if( isKeyInSessionStorage(`product_${id}`)) {
    const product = await getObjectFromSessionStorage(`product_${id}`);
    return product;
  }
  
  const APIurl = 'https://dummyjson.com/products/';
  let product;

  try {
    product = await send_GET(APIurl + id);
  } catch (error) {
    console.log(error);
    return null;
  }

  let {
    brand,
    category,
    description,
    images,
    price,
    rating,
    title,
    currentImageSrc,
  } = product;

  let productProps = {
    brand,
    category,
    description,
    images,
    price,
    rating,
    title,
    currentImageSrc,
  };

  setObjectInSessionStorage(`product_${id}`, productProps); //cache product
  return productProps;
}