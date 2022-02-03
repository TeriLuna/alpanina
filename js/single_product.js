// import { productsInDB } from "./alpanina_functions.js";

// class ProductDescription {
//   run (){
//     const urlParams = new URLSearchParams(window.location.search);
//     const productId = urlParams.get('id');
//     const product = productsInDB.find((el) => el.id === parseInt(productId));
//     // const SelectedProductInCart = this.productList.findIndex((el) => el.product.id === parseInt(productId));


//     const imageItem = (images)=>{
//       const containerBig = $(".js-product-imgBig-container");
//       images.forEach(({pathBig}, index) => {
//         const item = 
//         `<div data-hash="${index}">
//           <img src="${pathBig}" alt="">
//         </div>`;
//         containerBig.append(item);
//       });
//       const containerSmall = $(".js-product-imgSmall-container");
//       images.forEach(({pathSmall}, index) => {
//         const item = `<li><a href="#${index}"><img src="${pathSmall}" alt=""></a></li>`;
//         containerSmall.append(item);
//       });
//       $(".owl-carousel").owlCarousel({
//         items:1,
//         slideBy: 1,
//         stagePadding: 0,
//         nav: true,
//         dots: true,
//     });
//     }


//     let singleProduct =
//     `<div class="col-12 col-lg-7">
//       <div class="owl-carousel product-carousel owl-dots-overlay-right js-product-imgBig-container">
//         <!-- Aqui van llenandose las images grandes -->
//       </div>
//       <ul class="product-carousel-thumbnails js-product-imgSmall-container">
//         <!-- Aqui van llenandose las images pequeñas -->
//       </ul>
//     </div>
//     <div class="col-12 col-lg-5">
//       <ul class="list-inline-slash font-small margin-bottom-10">
//         <li><a href="../../pages/shop.html">Tienda</a></li>
//         <li><a href="${product.direction}">${product.name}</a></li>
//       </ul>
//       <h3 class="font-weight-normal margin-0">${product.name}</h3>
//       <div class="product-price">
//         <h5 class="font-weight-light">
//           <ins>$${product.price}</ins>
//         </h5>
//       </div>
//       <p>El Mambe emana la palabra de vida, palabra dulce, es decir nos enseña a expresarnos con más dulzura y llevarnos a un estado de consciencia donde nuestra palabra puede llegar a ser muy sanadora y honesta.</p>
//       <form class="product-quantity margin-top-30">
//         <div class="qnt">
//           <input type="number" id="quantity" name="quantity" min="1" max="10" value="1">
//         </div>
//         <button class="button button-md button-dark js-add-to-card-button" type="add">Añadir</button>
//         <button>
//           <a class="button button-xl button-fancy-1-outline-dark mt-5 float-right" href="../shop/cart.html">
//             Ir al carrito
//           </a>
//         </button>
//       </form>
//     </div>`
//     $(".js-product-description").append(singleProduct)
//     console.log(product.images)
//     imageItem(product.images);

//   }
// }
// const prodcutView = new ProductDescription();
// prodcutView.run();