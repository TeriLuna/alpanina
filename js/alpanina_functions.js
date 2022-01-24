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

let randomPhraseIndex = document.createElement('div');
function randomPhraseGenerator() {
  randomPhrase.classList.add('phrase');
  randomPhraseIndex = Math.floor(Math.random() * phrases.length);
  randomPhrase.innerHTML = `<h3>${phrases[randomPhraseIndex]}</h3>`;
}
randomPhraseGenerator();

/*================================================================================
SHOP STORE PRODUCTS
================================================================================*/
class PaintDiv{
  run(products){
    const shopContainer = document.getElementById('js-item-container');
    products.forEach((product, index) => {
      let productItem = document.createElement('div');
      productItem.classList.add('col-12', 'col-sm6', 'col-md-4');
      productItem.innerHTML = `
      <div class="product-box">
        <div class="product-img">
          <!-- Product IMG -->
          <a class="product-img-link" href="#">
            <img src="${product.img}" alt="${product.alt}">
          </a>
          <!-- Add to Cart -->
          <div class="add-to-cart">
            <a href="#product" onClick="currentCart.addProduct(${product.id})" >Agregar</a>
          </div>
        </div>
        <div class="product-title">
          <!-- Product Title -->
          <h6 class="font-weight-medium">
            <a href="${product.direction}">${product.name}</a>
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
class LocalStorageManager {
  saveProducts(products) {
    localStorage.setItem('cart', JSON.stringify(products));
  }

  getProducts() {
    return JSON.parse(localStorage.getItem('cart'));
  }

  setup() {
    if (!localStorage.getItem('cart')) {
      localStorage.setItem('cart', null);
    }
  }
}
class Product {
  constructor(name, price, img, alt, direction) {
    this.name = name;
    this.price = price;
    this.img = img;
    this.alt = alt;
    this.direction = direction;
    this.id = Math.random();
  }
}

class Cart {
  constructor() {
    this.productList = [];
  }

  addProduct(productId) {
    const _localStorage = new LocalStorageManager();
    _localStorage.setup();

    const productFromDb = productsInDB.find((el) => el.id === productId);
    const SelectedProductInCart = this.productList.findIndex((el) => el.product.id === productId);

    if (SelectedProductInCart > -1) {
      this.productList[SelectedProductInCart].quantity += 1;
    }else{
      const productToCart = {product: productFromDb, quantity: 1}
      this.productList.push(productToCart);
    }
    _localStorage.saveProducts(this.productList);
  }

  totalPrice() {
    return productList.reduce((total, product) => total + product.price, 0);
  }
}

const productsInDB = [
  new Product('Mambe',                          80000,  '../css/images/col-2-tall.jpg', '...', '../products/mambe.html') ,
  new Product('Ámbil',                          60000,  '../css/images/col-2-tall.jpg', '...', '../products/mambe.html' ),
  new Product('Rapé',                           85000,  '../css/images/col-2-tall.jpg', '...', '../products/mambe.html' ),
  new Product('Aplicador de Rapé individual',   30000,  '../css/images/col-2-tall.jpg', '...', '../products/mambe.html' ),
  new Product('Aplicador de Rapé',              50000,  '../css/images/col-2-tall.jpg', '...', '../products/mambe.html' ),
  new Product('Manillas tejidas',               12000,  '../css/images/col-2-tall.jpg', '...', '../products/mambe.html' ),
  new Product('Palillo para Ambil',             3000,   '../css/images/col-2-tall.jpg', '...', '../products/mambe.html' ),
  new Product('Tula tejida para Mambe y Ambil', 42000,  '../css/images/col-2-tall.jpg', '...', '../products/mambe.html' ),
];

const currentCart = new Cart([]);
const paintDiv = new PaintDiv();
paintDiv.run(productsInDB, currentCart);


/*================================================================================
PRODUCTS DESCRIPTION TABS
================================================================================*/

$(document).ready(function () {
  pageUrl = window.location.href;
  if(pageUrl.includes('#')) {
    validIds = ['specs', 'additionalInfo']
    tabId = pageUrl.split('#').at(-1);
    if(validIds.includes(tabId)) {
      console.log(tabId);
      $('.jsTab').removeClass('active').removeClass('show');
      $(`#${tabId}`).addClass('active').addClass('show');
      $('#jsTabContent').removeClass('active').removeClass('show');
      $('#jsTabContent'+'#'+tabId).addClass('active').addClass('show');
    }
  }
});
