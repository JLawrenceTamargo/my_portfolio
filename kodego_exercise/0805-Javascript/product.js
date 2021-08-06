class Product {
    constructor(productname, price) {
      this.productname = productname;
      this.price = price;
    }
    getProductPrice() {
      return `${this.productname} is ${this.price}`;
    }
    
  }
  // class Crypto extends Product {
  //   getProductPrice() {
  //     return `${super.getProductPrice()} in peso`;
  //   }
  // }
  // let DPET = new Crypto("DPET token", 301.69);
  // let SKILL = new Crypto("DPET token", 2397.14);
  // let SLP = new Crypto("DPET token", 10.60);
  
  // let product1 = new Product("DPET token", 301.69);
  // let product2 = new Product("SKILL token", 2399.41);
  // let product3 = new Product("SLP token", 10.60);
  let product1 = document.getElementById("prod1").value;
  let product2 = document.getElementById("prod2").value;
  let product3 = document.getElementById("prod3").value;
  let item1 = new Product(product1, 301.69);
  let item2 = new Product(product1, 2399.41);
  let item3 = new Product(product1, 10.60);

document.getElementById("prodPrice1").value =item1.price
document.getElementById("prodPrice2").value =item2.price
document.getElementById("prodPrice3").value =item3.price

 
  

  
  // class ShoppingCart{
  //    constructor() {
        
  //       this.products=[];
  //       this.totalPrice=0 
  //    }
  //    addToCart(product){
  //       this.products.push(product);
  //       this.totalPrice += product.price;
  //    }
  //   }


     
    
     let checkout = [];
     const addCart = (ev) => {
       ev.prevetDefault;
       class ShoppingCart{
        constructor() {
           
           this.products=[];
           this.totalPrice=0 
        }
        addToCart(product){
           this.products.push(product);
           this.totalPrice += product.price;
        }
       }
       let cart = new ShoppingCart();
     const item = [item1, item2, item3]
     console.log(cart)

     }

