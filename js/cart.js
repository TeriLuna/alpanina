// import { currentCart } from "./alpanina_functions.js";


// /*================================================================================
// PRODUCTS IN CART
// ================================================================================*/
// class CartProductsPaint {
//   run(products) {
//     const cartProducts = $(".js-cart-products");

//     cartProducts.each((product) => {
//         let childToAdd =`<tr>
//           <th scope="row" class="removeProduct">x</th>
//           <td class="product-thumbnail">
//             <a href="#"><img src="${product.images[0].bigImg}" alt="${product.alt}"></a>
//           </td>
//           <td>${product.name}</td>
//           <td>${product.price}</td>
//           <td>
//             <form class="product-quantity">
//               <div class="qnt">
//                 <input type="number" id="quantity" name="quantity" min="1" max="10" value="1">
//               </div>
//             </form>
//           </td>
//           <td>$20.00</td>
//         </tr>`
//         cartProducts.appendChild(childToAdd);
//       });
//   }

//   addFunctionalityToAddButton = () => {
//     $(".js-add-to-card-button").on("click", (el)=>{
//       const $el = $(this);
//       currentCart.addProduct()
//     });
//   }
// }

// const cartProduct = new CartProductsPaint();
// cartProduct.run(currentCart.productList);