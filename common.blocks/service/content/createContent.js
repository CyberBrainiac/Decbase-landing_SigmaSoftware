"use strict"

function createCard({
  brand,
  category,
  description,
  currentImageSrc,
  price,
  rating,
  title,
}) {
  const card = document.createElement("div");
  card.classList.add("content__card");
  const heading_h4 = document.createElement("h4");
  heading_h4.classList.add("content__title");
  heading_h4.textContent = title;

  const elem_brand = document.createElement("span");
  elem_brand.classList.add("content__brand");
  elem_brand.textContent = brand;

  const elem_category = document.createElement("span");
  elem_category.classList.add("content__category");
  elem_category.textContent = category;

  const elem_description = document.createElement("span");
  elem_description.classList.add("content__description");
  elem_description.textContent = description;

  const imageContainer = document.createElement("div");
  imageContainer.classList.add("content__image-container");
  const image = document.createElement("img");
  image.classList.add("content__image");
  image.src = currentImageSrc;
  image.alt = title;
  imageContainer.appendChild(image);

  const elem_price = document.createElement("span");
  elem_price.classList.add("content__price");
  elem_price.textContent = price;

  const elem_rating = document.createElement("span");
  elem_rating.classList.add("content__rating");
  elem_rating.textContent = rating;

  /**Merge all field in card*/
  card.appendChild(heading_h4);
  card.appendChild( assembleString(elem_brand));
  card.appendChild( assembleString(elem_category));
  card.appendChild( assembleString(elem_description));
  card.appendChild(imageContainer);
  card.appendChild( assembleString(elem_price));
  card.appendChild( assembleString(elem_rating));

  return card;
}

function createContentLineWrap() {
  const lineWrap = document.createElement("p");
  lineWrap.classList.add("content__line-wrap");
  return lineWrap;
}

function createContentName(propName) {
  const contentName = document.createElement("span");
  contentName.classList.add("content__name");
  contentName.textContent = propName + `: `;
  return contentName;
}

function assembleString(value) {
  const lineWrap = createContentLineWrap();

  let propName = value.className.slice( value.className.lastIndexOf("_") + 1);
  let firstToUpper = propName.charAt(0).toUpperCase() + propName.slice(1);
  lineWrap.appendChild( createContentName(firstToUpper));
  lineWrap.appendChild(value);
  return lineWrap;
}