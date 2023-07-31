## Decbase-landing_SigmaSoftware
*Fourth project in `Sigma Software` university*

*Landing adaptive up to `960px` view port width*
### Project lounch:
* Download the archive from the Github repository, unzip, run the index.html file

### A description of the features of the lending site:
* #### Overlay:
  - images from the free to use license were used in the overlay;
  - the images were processed in Figma to match the site design;
  - during the animation, the page is loaded but not rendered.
* #### What we do section:
  - used free API url:"`https://dummyjson.com/`"; 
  - make a GET request for a specific product "`https://dummyjson.com/products/1`";  
  - get JSON data with product description and photos;
  - cache the data in session storage to speed up access to the data;
  - create a product card;
  - display one product with different photos in a category;
  - filtering is implemented by product;
  - general category contains 1 product from each category.
* #### 3000+ Completed work section:
  - when hovering, the cards move behind the user's mouse within the block. When the mouse leaves the block area, the cards return to their original position.
* #### Testimonials section:
  - implemented without the help of libraries:) Cards are animated, cyclically move after pressing the control buttons.
* #### Latest news section:
  - when the block becomes visible to the user, a photo is animated, the effect achieved by listening to the scroll event.
* #### Don’t forget section:
  - the user data in the form, after successful filling, is saved to local storage; 
  - after success writing to session storage, the name field is checked for the presence of the keyword `Sigma` or `sigma`. If the keyword is present, an animation with the discount is activated.
  - in case of activation of the discount, the script send request to free API url:"`https://placekitten.com/`" with request like "`fetch(http://placekitten.com/200/300)`", in the response I get the url of the cat's photo. The photo of the cat depend on the user's screen size.
