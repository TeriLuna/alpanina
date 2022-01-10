/*===============================================
  1. Saludo y conexión
  2. Retiros
  3. Array y productos
===============================================*/

/*===============================================
  1. Saludo y conexión
===============================================*/

// function saludo() {
//   alert(`Bendecida tu existencia ${nombre}`);
// };

// let userMedicineYes = null;
// let userMedicineNot = null;
// let userDijoSi = null;

// function conexion() {
//   const question = prompt("¿Quieres conectarte y expandir tu conciencia?");
//   userDijoSi = (question == "si" || question == "Si" || question == "SI");
//   if (userDijoSi) {
//     firstAidMedicines();
//   } else {
//     secondAidMedicines();
//   }
//   email();
// };

// // Selección de opciones de conexión First Aid
// function firstAidUserSelection() {
//   const question1 = prompt("¡Maravilloso! empecemos con una de las siguientes opciones \n 1. Yagé / Ayahuasca \n 2. Purga de tabaco \n 3. Rapé medicinal");
//   return question1;
// };

// // Selección medicina First Aid
// function firstAidMedicines() {
//   userMedicineYes = firstAidUserSelection();
//   yage();
//   purgaTabaco();
//   rape();
//   notValid();
// };

// // Selección de opciones de conexión question1
// // YAGE
// function esYage() {
//   return userMedicineYes == "1" || userMedicineYes == "Yagé" || userMedicineYes == "Ayahuasca"
// };

// function yage(){
//   if (esYage()) {
//     alert("La medicina del Yagé / Ayahuasca es una medicina ancestral que se encuentra en Perú y Colombia. Son medicinas que nos conectan con la Pachamama, los seres espirituales, los apus... \n Para iniciar con esta medicina deberás hacer una dieta que te indicaremos más adelante.");
//  };
// };
// // PURGA TABACO
// function esPurgaTabaco(){
//   return userMedicineYes == "2" || userMedicineYes == "Purga de tabaco"
// };
// function purgaTabaco(){
//   if (esPurgaTabaco()){
//     alert("La purga de tabaco consiste en una pequeña ceremonia donde beberás 3 litros de agua de tabaco.");
//  };
// };
// // RAPE
// function esRapMed(){
//   return userMedicineYes == "3" || userMedicineYes == "Rapé medicinal"
// };

// function rape(){
//   if (esRapMed()){
//     alert("El rapé medicinal consiste en aplicar tabaco en polvo por las fosas nazales, permitiendo conectar tu mente y relajar tu cuerpo.");
//   };
// };


// // Selección de opciones de conexión Second Aid
// function secondAidUserSelection() {
//   const question2 = prompt("¡Los caminos no son fáciles! sin embargo lo importante es iniciar ese camino de introspección. \n Empecemos con una de las siguientes opciones \n 1. Circulo de palabra \n 2. Caridad en navidad \n 3. Otros");
//   return question2;
// };
// // selección medicina Second Aid
// function secondAidMedicines() {
//   userMedicineNot = secondAidUserSelection();
//   circuloPalabra();
//   caridadNavidad();
//   otros();
//   notValid();
// };

// // Selecciones de opciones de conexión question2
// // CIRCULO PALABRA
// function esCirculoPalabra(){
//   return userMedicineNot == "1" || userMedicineNot == "Circulo de palabra"
// };

// function circuloPalabra(){
//   if (esCirculoPalabra()){
//     alert("El circulo de palabra consiste en una integración de la palabra con el corazón, la mente y el espíritu donde compartimos la palabra y medicinas como el mambe y el ámbil. \n El mambe es una sustancia natural que ayuda a la mente a entender el mundo y a la mente a entender el mundo. \n También compartimos la Caguana que es una bebida ancestral preparada por las mujeres");
//   };
// };
// // CARIDAD NAVIDAD
// function esCaridadNavidad(){
//   return userMedicineNot == "2" || userMedicineNot == "Caridad en navidad"
// };

// function caridadNavidad(){
//   if (esCaridadNavidad()){
//     alert("La caridad en navidad consiste en una recolección que se hace dependiendo del enfoque que se elija, puede ser caridad para los adultos mayores o para los niños o para los animales. Al finalizar el año te contactaremos para que hagas parte de éste bonito compartir.");
//   };
// };

// // OTROS
// function esOtros(){
//   return userMedicineNot == "3" || userMedicineNot == "Otros"
// };

// function otros(){
//   if (esOtros()){
//     alert("Para más información de nuestras medicinas o consultas con respecto a cómo ayudar en la comunidad Alpa Nina te contactaremos.");
//   };
// };

// //Funcion ivalida
// function notValid () {
//   if(userDijoSi){
//     if(!esYage() && !esPurgaTabaco() && !esRapMed()){
//       alert("No te he entendido, por favor selecciona una opción válida");
//       firstAidMedicines();
//     };
//   } else{
//     if (!esCirculoPalabra() && !esCaridadNavidad() && !esOtros()) {
//       alert("No te he entendido, por favor selecciona una opción válida");
//       secondAidMedicines();
//     };
//   };
// };

// // email
// function email() {
//   let correo = prompt('Déjanos tu correo para comentarte más sobre la comunidad Alpa Nina y tu experiencia');
//   alert(`Genial! pronto nos pondremos en contacto contigo al correo ${correo}`);
// };

// // Saludo:
// let nombre = prompt("¿Cómo te llamas?");
//   saludo();

//   conexion();

/*===============================================
  2. Retiros
===============================================*/

// function User(){

//   this.register = function(){
//     let name = prompt("Ingresa tu nombre");
//     this.name = name;
//     return this;
//   }

//   this.getName = function(){
//     return this.name;
//   }
// }

// class Retreat {
//   constructor(name, price, description, url){
//     this.name = name;
//     this.price = price;
//     this.description = description;
//     this.url = url;
//   }

//   showInfo = function(){
//     return `${this.name} \n ${this.price} \n ${this.description}`;
//   }
// }

// const yageOne = new Retreat("Yagé por una noche", "80.000", "La medicina del Yagé / Ayahuasca es una medicina ancestral que se encuentra en Perú y Colombia. Son medicinas que nos conectan con la Pachamama, los seres espirituales, los apus... \n Para iniciar con esta medicina deberás hacer una dieta que te indicaremos más adelante.", "retiros.html#yageUna");
// const yageThree = new Retreat("Yagé por tres noches", "160.000", "Tendrás medicina cada noche durante tres noches.", "retiros.html#yageTres");
// const yagePrivate = new Retreat("Yagé privado", "Se acuerda el precio una vez se tenga lugar y cantidad de personas", "Elegirás el lugar y la cantidad de personas para tu retiro privado", "retiros.html#yagePrivado");

// const user = new User();
// user.register();

// alert(`Hola ${user.getName()}, bienvenido a Alpa Nina te invitamos a conocer nuestros retiros: \n \n ${yageOne.showInfo()} \n \n ${yageThree.showInfo()} \n \n ${yagePrivate.showInfo()}`);

/*===============================================
  3. Array y productos ENTREGA PARA DESAFIO Y DESAFIO COMPLEMENTARIO
===============================================*/
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  namePrice = function() {
    return this.name + " $" + this.price;
  }
}

let products =  [];
products.push(new Product("Mambe", 80000));
products.push(new Product("Ambil", 60000));
products.push(new Product("Aplicador individual", 30000));
products.push(new Product("Aplicador de Rape", 50000));
products.push(new Product("Manillas tejidas", 12000));
products.push(new Product("Palillo para ambil", 3000));
products.push(new Product("Tula tejida", 42000));
class ProductsOrderer {
  constructor(products) {
    this.products = products;
  }
  order = function() {
    let names = "";

    let resp = this.products.sort((current, next) => {
      if (current.name > next.name) {
        return -1;
      }
      if (next.name > current.name) {
          return 1;
      }
      return 0;
    });

    resp.reverse().forEach(e => {
      console.log(e.namePrice());
      names = names + e.namePrice() + "\n";
    });

    return names;
  }
}

listOrderer = new ProductsOrderer(products);

alert("Los siguientes son las medicinas ofrecidas por Alpa Nina: " + "\n" + listOrderer.order())

