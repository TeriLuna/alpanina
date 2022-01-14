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

let products = [
  { id: 1, name: 'Mambe', price: 80000, img: '../css/images/col-2-tall.jpg' },
  { id: 2, name: 'Ambil', price: 60000, img: '../css/images/col-2-tall.jpg' },
  { id: 3, name: 'Rapé', price: 85000, img: '../css/images/col-2-tall.jpg' },
  { id: 4, name: 'Aplicador de Rapé individual', price: 30000, img: '../css/images/col-2-tall.jpg' },
  { id: 5, name: 'Aplicador de Rapé', price: 50000, img: '../css/images/col-2-tall.jpg' },
  { id: 6, name: 'Manillas tejidas', price: 12000, img: '../css/images/col-2-tall.jpg' },
  { id: 7, name: 'Palillo para Ambil', price: 3000, img: '../css/images/col-2-tall.jpg' },
  { id: 8, name: 'Tula tejida para Mambe y Ambil', price: 42000, img: '../css/images/col-2-tall.jpg' },
];

const shopContainer = document.getElementById('js-item-container');
products.forEach((product) => {
  let productItem = document.createElement('div');
  productItem.classList.add('col-12', 'col-sm6', 'col-md-4');
  productItem.innerHTML = `
  <div class="product-box">
    <div class="product-img">
      <!-- Product IMG -->
      <a class="product-img-link" href="#">
        <img src="${product.img}" alt="">
      </a>
      <!-- Add to Cart -->
      <div class="add-to-cart">
        <a href="#">Agregar</a>
      </div>
    </div>
    <div class="product-title">
      <!-- Product Title -->
      <h6 class="font-weight-medium">
        <a href="../products/mambe.html">${product.name}</a>
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
