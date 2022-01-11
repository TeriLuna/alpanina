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

    let response = this.products.sort((current, next) => {
      if (current.name > next.name) {
        return -1;
      }
      if (next.name > current.name) {
          return 1;
      }
      return 0;
    });

    response.reverse().forEach(e => {
      names += e.namePrice() + "\n";
    });

    return names;
  }
}

listOrderer = new ProductsOrderer(products);

alert(`Los siguientes son las medicinas ofrecidas por Alpa Nina: \n ${listOrderer.order()}`)


let purchase = prompt(`¿Qué medicina deseas comprar? \n Por favor separe los productos por comas y espacio \n ${listOrderer.order()}`);
let arrayPurchase = purchase.split(", ");

let totalCompra = 0;

for (i = 0; i < arrayPurchase.length; i++) {
  totalCompra += products.find(e => e.name == arrayPurchase[i]).price;
}
alert(`Registro de compra realizada! \n Los productos comprados son ${arrayPurchase} y el total de tu compra fue $ ${totalCompra} \n ¡Gracias por tu compra!`);

