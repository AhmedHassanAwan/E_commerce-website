// console.log("ahmed hassan awan")


const data = localStorage.getItem("card")
const convert = JSON.parse(data);
console.log(convert);


const div = document.querySelector("#data")

convert.map((item,index)=>{
    div.innerHTML += `
    <section class="h-100 gradient-custom" id="bg">
  <div class="container py-5">
    <div class="row d-flex justify-content-center my-4">
      <div class="col-md-8">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Cart items</h5>
          </div>
          <div class="card-body">
            <!-- Single item -->
            <div class="row">
              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <!-- Image -->
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src="${item.image}"
                    class="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                  </a>
                </div>
                <!-- Image -->
              </div>

              <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <!-- Data -->
                <p><strong>${item.name}</strong></p>
                <p><strong>${item.brand}</strong></p>
                <p><strong>${item.rating} ⭐⭐⭐⭐⭐</strong></p>
                 

                 <!-- Delete btn -->
                 <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init
                 title="Remove item" id="btn" onclick="delete1(${index})">
                 delete
                 </button>

                 <!-- Buy Now btn -->
                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init
                  title="Move to the wish list">
                buynow
                </button>
              
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">


               <button class="plus-minus-btn" onclick="plus(${index})">+</button>
              
               <h2 id="num${index}" style="margin: 0 10px;">1</h2>
                <button class="plus-minus-btn" onclick="minus(${index})">-</button>

                <!-- Price -->
                <p class="text-start text-md-center" id="price${index}">
                  <strong>$:${item.price}</strong>
                </p>
                <!-- Price -->
              </div>
            </div>
            <!-- Single item -->

            <hr class="my-4" />

            <!-- Single item -->
        </div>
           
        </div>
      </div>
    </div>
  </div>
</section>`
  })
  


// delet btn

function delete1(index) {
  convert.splice(index,1)
  div.innerHTML ="";
  convert.map((item,index)=>{
    div.innerHTML += `
    <section class="h-100 gradient-custom">
  <div class="container py-5">
    <div class="row d-flex justify-content-center my-4">
      <div class="col-md-8">
        <div class="card mb-4">
          <div class="card-header py-3">
            <h5 class="mb-0">Cart - 2 items</h5>
          </div>
          <div class="card-body">
            <!-- Single item -->
            <div class="row">
              <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                <!-- Image -->
                <div class="bg-image hover-overlay hover-zoom ripple rounded" data-mdb-ripple-color="light">
                  <img src=" ${item.image}"
                    class="w-100" alt="Blue Jeans Jacket" />
                  <a href="#!">
                    <div class="mask" style="background-color: rgba(251, 251, 251, 0.2)"></div>
                  </a>
                </div>
                <!-- Image -->
              </div>

              <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                <!-- Data -->
                <p><strong>${item.name}</strong></p>
                <p><strong>${item.brand}</strong></p>
                <p><strong>${item.rating} ⭐⭐⭐⭐⭐</strong></p>
                 

                 <!-- Delete btn -->
                 <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-sm me-1 mb-2" data-mdb-tooltip-init
                 title="Remove item" id="btn" onclick="delete1(${index})">
                 delete
                 </button>

                 <!-- Buy Now btn -->
                <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-danger btn-sm mb-2" data-mdb-tooltip-init
                  title="Move to the wish list">
                buynow
                </button>
              
              </div>

              <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">


               <button class="plus-minus-btn" onclick="plus(${index})">+</button>
              
               <h2 id="num${index}" style="margin: 0 10px;">1</h2>
                <button class="plus-minus-btn" onclick="minus(${index})">-</button>

                <!-- Price -->
                <p class="text-start text-md-center" id="price${index}">
                  <strong>$:${item.price}</strong>
                </p>
                <!-- Price -->
              </div>
            </div>
            <!-- Single item -->

            <hr class="my-4" />

            <!-- Single item -->
           
        </div>
      </div>
    </div>
  </div>
</section>`

  })
  }
  



  // price update

  function plus(index){
    const price = document.querySelector(`#price${index}`);
    const plus = document.querySelector(`#num${index}`);
    plus.innerHTML++;
    price.innerHTML = `price: ${convert[index].price * plus.innerHTML}`
}

function minus(index){
  const price = document.querySelector(`#price${index}`);
  const minus = document.querySelector(`#num${index}`);
   if(minus.innerHTML > 1){
    minus.innerHTML--;
   }
  price.innerHTML = `price: ${convert[index].price * minus.innerHTML}`
}

//  price update

