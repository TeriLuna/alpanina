/*================================================================================
RANDOM PHRASE GENERATOR
================================================================================*/
let phrases = [
  "Para los indígenas mambear es como leer la Biblia, porque a través de él Dios nos lo da todo",
  "La medicina te abre no solamente la visión sino también el corazón",
  "Aprende a ver en amor, hablar en amor, vivir en amor, ser feliz en amor",
  "No tomes los comentarios como algo propio porque no son una opinión sobre ti sino sobre ellos mismos",
  "La gratitud llenará tu vida, tu alma y tu espíritu de infinita luz",
];

const randomPhrase = document.getElementById('phrases');

if (randomPhrase) {
  let randomPhraseIndex = document.createElement('div');
  function randomPhraseGenerator() {
    randomPhrase.classList.add('phrase');
    randomPhraseIndex = Math.floor(Math.random() * phrases.length);
    randomPhrase.innerHTML = `<h3>${phrases[randomPhraseIndex]}</h3>`;
  }
  randomPhraseGenerator();
}

/*================================================================================
SHOP STORE PRODUCTS
================================================================================*/
class PaintDiv{
  run(products){
    const shopContainer = document.getElementById('js-item-container');
    if(shopContainer){

      products.forEach((product, index) => {
        let productItem = document.createElement('div');
        productItem.classList.add('col-12', 'col-sm6', 'col-md-4');
        productItem.innerHTML = `
        <div class="product-box">
          <div class="product-img">
            <!-- Product IMG -->
            <a class="product-img-link" href="#">
              <img src="${product.images[0].pathBig}" alt="${product.alt}">
            </a>
            <!-- Add to Cart -->
            <div class="add-to-cart">
              <a href="#product" onClick="currentCart.addProduct(${product.id})" >Agregar</a>
            </div>
          </div>
          <div class="product-title">
            <!-- Product Title -->
            <h6 class="font-weight-medium">
              <a href="${product.direction}?id=${product.id}">${product.name}</a>
            </h6>
            <!-- Product Price -->
            <div class="price">
              <span>$${product.price}</span>
            </div>
          </div>
        </div>
        `;
      shopContainer.appendChild(productItem);
      });
    }
  }
}
class LocalStorageManager {
  saveProducts(products) {
    localStorage.setItem('cart', JSON.stringify(products));
  }

  getProducts() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  setup() {
    console.log(localStorage.getItem('cart'));

    if (!localStorage.getItem('cart')) {

      console.log('No hay nada en el carrito');

      localStorage.setItem('cart', null);
    }
  }
}

//IMAGES FOR EACH PRODUCT
class Img {
  constructor(smallImg, bigImg) {
    this.pathSmall = smallImg;
    this.pathBig = bigImg;
  }

  getPathSmall() {
    return this.pathSmall;
  }
  getPathBig() {
    return this.pathBig;
  }
}

const imgsProduct1 = [
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
]

const imgsProduct2 = [
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
]

const imgsProduct3 = [
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
]

const imgsProduct4 = [
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
]

const imgsProduct5 = [
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
]

const imgsProduct6 = [
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
]

const imgsProduct7 = [
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
]

const imgsProduct8 = [
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
  new Img('col-2-square.jpg', 'col-1-square.jpg'),
]

//PRODUCT LIST FOR SHOP PAGE
class Product {
  constructor(id, name, price, imgs, alt) {
    this.setImagesPath = (imgs) => {
      return imgs.map((el) => {
        return {
          pathBig: '../css/images/' + el.pathBig,
          pathSmall: '../css/images/' + el.pathSmall,
        }
      })
    };

    this.name = name;
    this.price = price;
    this.alt = alt;
    this.direction = '../pages/products.html';
    this.id = id;
    this.images = this.setImagesPath(imgs);
  }
}

// PRODUCTS IN CART
class Cart {
  constructor(products) {
    if(products){
      this.productList = products;
    }else{
      this.productList = [];
    }
  }

  addProduct(productId, quantity=1, hardReset=false) {

    const productFromDb = productsInDB.find((el) => el.id === productId);
    const SelectedProductInCart = this.productList.findIndex((el) => el.product.id === productId);

    if (SelectedProductInCart > -1) {
      if(hardReset){
        this.productList[SelectedProductInCart].quantity = quantity;        
      }else{
        this.productList[SelectedProductInCart].quantity += quantity;
      }
      this.productList[SelectedProductInCart].subtotal = quantity * productFromDb.price;
    }else{
      const productToCart = {product: productFromDb, quantity: quantity, subtotal: productFromDb.price * quantity};
      this.productList.push(productToCart);
    }
    _localStorage.saveProducts(this.productList);
  }

  totalPrice() {
    return productList.reduce((total, product) => total + product.price, 0);
  }

  subtotalPrice(productId, quantity) {
    const product = this.productList.find((el) => el.product.id === productId);
    return product.product.price * quantity;
  }
}

// PRODUCTS IN DATABSE

const productsInDB = [
  new Product(1,'Mambe',                          80000, imgsProduct1, '...' ),
  new Product(2,'Ámbil',                          60000, imgsProduct2, '...' ),
  new Product(3,'Rapé',                           85000, imgsProduct3, '...' ),
  new Product(4,'Aplicador de Rapé individual',   30000, imgsProduct4, '...' ),
  new Product(5,'Aplicador de Rapé',              50000, imgsProduct5, '...' ),
  new Product(6,'Manillas tejidas',               12000, imgsProduct6, '...' ),
  new Product(7,'Palillo para Ambil',             3000,  imgsProduct7, '...' ),
  new Product(8,'Tula tejida para Mambe y Ambil', 42000, imgsProduct8, '...' ),
];

const _localStorage = new LocalStorageManager();
_localStorage.setup();
const currentCart = new Cart(_localStorage.getProducts());
const paintDiv = new PaintDiv();
paintDiv.run(productsInDB, currentCart);

/*================================================================================
PRODUCTS DESCRIPTION TABS
================================================================================*/

$(document).ready(function () {
  const pageUrl = window.location.href;
  if(pageUrl.includes('#')) {
    const validIds = ['specs', 'additionalInfo']
    const tabId = pageUrl.split('#').at(-1);
    if(validIds.includes(tabId)) {
      console.log(tabId);
      $('.jsTab').removeClass('active').removeClass('show');
      $(`#${tabId}`).addClass('active').addClass('show');
      $('#jsTabContent').removeClass('active').removeClass('show');
      $('#jsTabContent'+'#'+tabId).addClass('active').addClass('show');
    }
  }
});

/*================================================================================
SINGLE PRODUCT
================================================================================*/

class ProductDescription {
  run (){
    const productsContainer = $(".js-product-description");
    console.log(productsContainer);
    if (productsContainer.length > 0) {
      const urlParams = new URLSearchParams(window.location.search);
      const productId = urlParams.get('id');
      const product = productsInDB.find((el) => el.id === parseInt(productId));
      // const SelectedProductInCart = this.productList.findIndex((el) => el.product.id === parseInt(productId));
      const imageItem = (images)=>{
        const containerBig = $(".js-product-imgBig-container");
        images.forEach(({pathBig}, index) => {
          const item = 
          `<div data-hash="${index}">
            <img src="${pathBig}" alt="">
          </div>`;
          containerBig.append(item);
        });
        const containerSmall = $(".js-product-imgSmall-container");
        images.forEach(({pathSmall}, index) => {
          const item = `<li><a href="#${index}"><img src="${pathSmall}" alt=""></a></li>`;
          containerSmall.append(item);
        });
        $(".owl-carousel").owlCarousel({
          items:1,
          slideBy: 1,
          stagePadding: 0,
          nav: true,
          dots: true,
        });
      }

      const onClick = () => {
        $(".js-add-to-card-button").on('click', (e) => {
          e.preventDefault();
          const qty = parseInt($("#quantity").val());
          currentCart.addProduct(product.id, qty, true);
        });
      }

      let singleProduct =
      `<div class="col-12 col-lg-7">
        <div class="owl-carousel product-carousel owl-dots-overlay-right js-product-imgBig-container">
          <!-- Aqui van llenandose las images grandes -->
        </div>
        <ul class="product-carousel-thumbnails js-product-imgSmall-container">
          <!-- Aqui van llenandose las images pequeñas -->
        </ul>
      </div>
      <div class="col-12 col-lg-5">
        <ul class="list-inline-slash font-small margin-bottom-10">
          <li><a href="../../pages/shop.html">Tienda</a></li>
          <li><a href="${product.direction}?id=${product.id}">${product.name}</a></li>
        </ul>
        <h3 class="font-weight-normal margin-0">${product.name}</h3>
        <div class="product-price">
          <h5 class="font-weight-light">
            <ins>$${product.price}</ins>
          </h5>
        </div>
        <p>El Mambe emana la palabra de vida, palabra dulce, es decir nos enseña a expresarnos con más dulzura y llevarnos a un estado de consciencia donde nuestra palabra puede llegar a ser muy sanadora y honesta.</p>
        <form class="product-quantity margin-top-30">
          <div class="qnt">
            <input type="number" id="quantity" name="quantity" min="1" max="10" value="1">
          </div>
          <button class="button button-md button-dark js-add-to-card-button" type="add">Añadir</button>
          <button>
            <a class="button button-xl button-fancy-1-outline-dark mt-5 float-right" href="../pages/shop/cart.html">
              Ir al carrito
            </a>
          </button>
        </form>
      </div>`
      productsContainer.append(singleProduct);
      imageItem(product.images);
      onClick();
    }
  }
}
const prodcutView = new ProductDescription();
prodcutView.run();

/*================================================================================
PRODUCTS IN CART
================================================================================*/
class CartProductsPaint {
  run(cart) {
    const cartProducts = $(".js-cart-products");

    cart.productList.forEach(({product, quantity, subtotal}, index) => {
      console.log(product);
      let childToAdd =`<tr class='js-cart-item-${index}'>
        <th scope="row" class="removeProduct">x</th>
        <td class="product-thumbnail">
          <a href="#"><img src="../${product.images[0].pathSmall}" alt="${product.alt}"></a>
        </td>
        <td>${product.name}</td>
        <td>$ ${product.price}</td>
        <td>
          <form class="product-quantity">
            <div class="qnt">
              <input type="number" id="quantity_${index}" name="quantity[${index}]" min="1" max="10" value="${quantity}">
            </div>
          </form>
        </td>
        <td class='js-subtotal'>$ ${subtotal} </td>
      </tr>`
      cartProducts.append(childToAdd);

      const executeOnChange = () => {
        $(document).on('blur', `#quantity_${index}`, (e) => {
          const element = $(e.target);
          const subtotal = $(element.parents(".js-cart-item-" + index).find(".js-subtotal"));
          const qty = parseInt(element.val());
          cart.addProduct(product.id, qty, true);
          subtotal.text(`$ ${product.price * qty}`);
        });
      }
      executeOnChange();

    });
  }


  addFunctionalityToAddButton = () => {
    $(".js-add-to-card-button").on("click", (el)=>{
      const $el = $(this);
      currentCart.addProduct()
    });
  }
}



const cartProduct = new CartProductsPaint();
cartProduct.run(currentCart);
