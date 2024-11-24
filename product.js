// console.log("ahmed hassan");

const products = [
    { "name": "Smartphone", "brand": "Samsung", "price": 799, "rating": 4.5, "quantity": 20, "stock": "In Stock", "discount": 10, "image":"https://images.samsung.com/is/image/samsung/p6pim/levant/sm-f956bzsgmea/gallery/levant-galaxy-z-fold6-f956-514125-sm-f956bzsgmea-thumb-542641027?$264_264_PNG$" },
    { "name": "Laptop", "brand": "Dell", "price": 1200, "rating": 4.6, "quantity": 15, "stock": "In Stock", "discount": 5, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGu-i02v0l_DEtrniIC5P69LDxMtTdG09cJQ&s" },
    { "name": "Smartwatch", "brand": "Apple", "price": 399, "rating": 4.7, "quantity": 25, "stock": "In Stock", "discount": 15, "image": "https://starcity.pk/wp-content/uploads/2024/02/Telzeal-TC-4G-17.jpg" },
    { "name": "Bluetooth Headphones", "brand": "Sony", "price": 199, "rating": 4.4, "quantity": 50, "stock": "In Stock", "discount": 20, "image": "https://alhamdtech.pk/cdn/shop/files/sony-wh-xb910n-bluetooth-headphones-167102.jpg?v=1722252806" },
    { "name": "Wireless Earbuds", "brand": "Jabra", "price": 149, "rating": 4.3, "quantity": 30, "stock": "In Stock", "discount": 25, "image": "https://img.drz.lazcdn.com/static/pk/p/76a6fb811fca85ab40e3cd562ed6b9af.jpg_720x720q80.jpg" },
    { "name": "Tablet", "brand": "Lenovo", "price": 299, "rating": 4.2, "quantity": 10, "stock": "Low Stock", "discount": 10, "image": "https://tabarena.pk/wp-content/uploads/2024/06/lenovo-tab-m8-4th-gen-1.jpg" },
    { "name": "Gaming Console", "brand": "PlayStation", "price": 499, "rating": 4.8, "quantity": 5, "stock": "Low Stock", "discount": 0, "image": "https://www.w3shopping.com/cdn/shop/files/Sony-PS5-Console-W3-Shopping-71216020.jpg?v=1713534404" },
    { "name": "4K Smart TV", "brand": "LG", "price": 899, "rating": 4.6, "quantity": 8, "stock": "Low Stock", "discount": 5, "image": "https://images.priceoye.pk/sony-49-inch-4k-49x7500f-pakistan-priceoye-gxqy5-500x500.webp" },
    { "name": "Bluetooth Speaker", "brand": "Bose", "price": 179, "rating": 4.5, "quantity": 40, "stock": "In Stock", "discount": 15, "image": "https://static-01.daraz.pk/original/d3a2403fde41b3dace24f2c8a92c4653.jpg" },
    { "name": "Action Camera", "brand": "GoPro", "price": 349, "rating": 4.7, "quantity": 12, "stock": "In Stock", "discount": 10, "image": "https://m.media-amazon.com/images/I/81oXTmceKoL.jpg" },
    { "name": "External Hard Drive", "brand": "Seagate", "price": 99, "rating": 4.4, "quantity": 60, "stock": "In Stock", "discount": 20, "image": "https://lansotechsolutions.co.ke/wp-content/uploads/2022/11/Transcend-1TB-External-Hard-Drive.jpg" },
    { "name": "Gaming Laptop", "brand": "MSI", "price": 1500, "rating": 4.7, "quantity": 7, "stock": "Low Stock", "discount": 5, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq14mCwHSSSEuT9F8Tr3YsCElcVuP2pATScQ&s"},
    { "name": "Monitor", "brand": "Acer", "price": 249, "rating": 4.5, "quantity": 18, "stock": "In Stock", "discount": 10, "image": "https://images.philips.com/is/image/philipsconsumer/b8515e4b80934702a7a7b01b00f8f6da?wid=700&hei=700&$pnglarge$" },
    { "name": "Mechanical Keyboard", "brand": "Razer", "price": 129, "rating": 4.6, "quantity": 50, "stock": "In Stock", "discount": 15, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHg0fpv2twSPk3r4Gtg4ApwJubiRnAk-SYig&s" },
    { "name": "Gaming Mouse", "brand": "Logitech", "price": 79, "rating": 4.4, "quantity": 70, "stock": "In Stock", "discount": 25, "image": "https://img.drz.lazcdn.com/static/pk/p/8743024fa6c2a7a62f8a2d85ca0d4b46.jpg_720x720q80.jpg" },
    { "name": "E-Reader", "brand": "Kindle", "price": 139, "rating": 4.5, "quantity": 22, "stock": "In Stock", "discount": 10, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeQCegE91QGYbhO74TbZ_vaHIh5x-XE030sZq0ft07hlnwOwRWdoHRpJw0hr5Bok_af0&usqp=CAU" },
    { "name": "Router", "brand": "Netgear", "price": 159, "rating": 4.3, "quantity": 15, "stock": "In Stock", "discount": 5, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3Ds8KS9se_23mq8D43D_DzsZhsE-PLknNg&s"},
    { "name": "Webcam", "brand": "Logitech", "price": 99, "rating": 4.2, "quantity": 35, "stock": "In Stock", "discount": 20, "image": "https://easetec.com.pk/wp-content/uploads/2021/06/ASUS-Webcam-C3.jpg" },
    { "name": "Drone", "brand": "DJI", "price": 1099, "rating": 4.8, "quantity": 3, "stock": "Low Stock", "discount": 0, "image": "https://m.media-amazon.com/images/I/61OgU7rf79L._AC_UF1000,1000_QL80_.jpg" },
    { "name": "Smart Home Hub", "brand": "Google Nest", "price": 129, "rating": 4.6, "quantity": 25, "stock": "In Stock", "discount": 15, "image": "https://static-01.daraz.pk/p/f1638df610fa451e08d0cfee9982fd4a.jpg" },
    { "name": "Fitness Tracker", "brand": "Fitbit", "price": 99, "rating": 4.3, "quantity": 45, "stock": "In Stock", "discount": 20, "image": "https://m.media-amazon.com/images/I/61YvYiLUxDS._AC_SL1500_.jpg" },
    { "name": "VR Headset", "brand": "Meta Quest", "price": 399, "rating": 4.7, "quantity": 10, "stock": "Low Stock", "discount": 5, "image": "https://img.drz.lazcdn.com/static/pk/p/2717e41fe6e4faa5616fa13c5e49710c.jpg_720x720q80.jpg" },
    { "name": "Electric Scooter", "brand": "Xiaomi", "price": 499, "rating": 4.5, "quantity": 12, "stock": "In Stock", "discount": 10, "image": "https://m.media-amazon.com/images/I/61cxI-TsCYL._AC_SL1500_.jpg"},
    { "name": "Digital Camera", "brand": "Canon", "price": 799, "rating": 4.4, "quantity": 10, "stock": "Low Stock", "discount": 10, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrM60gksfCOCfu10YFlSxxgg3WCY8cvVKpwA&s" },
    { "name": "Portable Charger", "brand": "Anker", "price": 49, "rating": 4.7, "quantity": 100, "stock": "In Stock", "discount": 30, "image":"https://m.media-amazon.com/images/I/51cd9yzmeOL._AC_UF894,1000_QL80_.jpg"},
    { "name": "Noise-Canceling Headphones", "brand": "Bose", "price": 299, "rating": 4.6, "quantity": 18, "stock": "In Stock", "discount": 15, "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWDl2CunnRKd5rcZbGDRhrUE85TpWPfjjX7Q&s" },
    { "name": "Air Purifier", "brand": "Dyson", "price": 399, "rating": 4.5, "quantity": 20, "stock": "In Stock", "discount": 10, "image": "https://m.media-amazon.com/images/I/51BCAhYdd4L._AC_.jpg" },
    { "name": "Smart Thermostat", "brand": "Ecobee", "price": 249, "rating": 4.5, "quantity": 12, "stock": "Low Stock", "discount": 5, "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HQ2E2_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1662573483951" },
    { "id": 50, "name": "Security Camera", "brand": "Arlo", "price": 299, "rating": 4.8, "quantity": 50, "stock": "Instock", "discount":10, "image":"https://m.media-amazon.com/images/I/51RHOQqykhL._AC_UF1000,1000_QL80_.jpg" },
    { "id": 49, "name": "Microwave", "brand": "Panasonic", "price": 249, "rating": 4.7, "quantity": 30, "stock": "instock", "image":"https://cateringresources.co.uk/wp-content/uploads/2020/09/HEB082.jpg" },
    
    
  ];

  const div = document.querySelector("#products");

  products.map((item,index)=>{
    // console.log(item.name);

    div.innerHTML += `
    <div class="card" style="width: 18rem;" >
  <img class="img" src= ${item.image} class="card-img-top" alt="..."><br><br>
  <div class="card-body">
    <h5 class="card-title">Name:${item.name}</h5>
    <h5 class="card-title">Brand:${item.brand}</h5>
    <h5 class="card-title">stock :${item.stock}</h5>
    <h5 class="card-title">Quantity :${item.quantity}</h5>
    <h5 class="card-title">Price:$${item.price} </h5>
     <p>Rating: ${item.rating} ⭐⭐⭐⭐⭐</p>
 <button class="addToCartBtn" onclick="addtocard(${index})">Add To Card</button>
    
  </div>
</div>` 
});

const arr = [];

function addtocard(index){
 const checkindex = arr.indexOf(products[index])
 if(checkindex === -1){
     products[index].quantity =1
      arr.push(products[index]);
 }   else{
    arr[checkindex].quantity +=1
 } console.log(arr);
    
   const arrintostr = JSON.stringify(arr)
    localStorage.setItem("card",arrintostr);

   

 window.location = "cart.html"
    

 
}

