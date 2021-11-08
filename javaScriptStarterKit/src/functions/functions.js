

function addToCart(quantity,productName="Elma"){
     console.log("Sepet Eklendi : Ürün : " + productName+
     " Adet: "+quantity);
}

addToCart();
addToCart(11);
 addToCart(10);

let sayHello = ()=>{
     console.log("Hello World");
}
sayHello();


let sayHello2 = function () {
     console.log("Hello World 2");
}
  
sayHello2();

function addToCart2(productName,quantity,unitPrice) {
     
}
addToCart2("Elma",5,20);
addToCart2("Armut",2,20);
addToCart2("Limon",3,15 );
let product1={productName:"Elma",unitPrice:10,quantity:5};
function addCart3(product) {
     console.log("Ürün : "+ product.productName);
     console.log("Adet : "+ product.quantity);
     console.log("fiyat : "+ product.unitPrice);

}

addCart3(product1);

let product2={productName:"Elma",unitPrice:10,quantity:5};
let product3={productName:"Elma",unitPrice:10,quantity:5};


product2=product3;
product2.productName="karpuz";

console.log(product3.productName);

let sayi1=10;
let sayi2=20;

sayi1=sayi2;

sayi2=100;
console.log(sayi1);

function addCart4(products) {
     console.log(products);
}

let products=[
     {productName:"Elma",unitPrice:10,quantity:5},
     {productName:"Armut",unitPrice:10,quantity:5},
     {productName:"Karpuz",unitPrice:10,quantity:5}
];
addCart4(products);

//rest
let total=0;
function add(...numbers) {
     
     for (let i = 0; i < numbers.length; i++) {
          //console.log(numbers[i])
          total=total+numbers[i];
          
     }
     console.log(total)

}

add(20,30);
add(20,30,40);
add(20,30,40,50);

let numbers=[30,40,500,600,700]
//console.log(...numbers)
console.log(Math.max(...numbers))


let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]]=[
     {name:"İç Anadolu",population:"20M"},
     {name:"Marmara",population:"30M"},
     {name:"Karadeniz",population:"10M"},
     [
          ["Ankara","Konya"],
          ["İstanbul","Bursa"],
          ["Bartın","Sinop"]

     ]
]

console.log(icAnadolu.name);
console.log(icAnadolu.population)

let newProductName,newUnitPrice,NewQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:NewQuantity})=
{productName:"Elma",unitPrice:10,quantity:5};
console.log(newProductName);




