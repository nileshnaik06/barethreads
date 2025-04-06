let products = [
  {
    images: ["./Assets/Design-04,01.jpg", "./Assets/Design-04,02.jpg"],
    heading: "Casual Cotton T-Shirt",
    description: "Soft and breathable everyday wear",
    sizes: ["L", "XL", "XXL"],
    price: 499,
    cartStatus: "Add To Cart",
  },
  {
    images: ["./Assets/Antidide-back.jpg", "./Assets/Antidode.jpg"],
    heading: "Oversized Tees",
    description: "Cozy hoodie with anime print",
    sizes: ["L", "XL", "XXL"],
    price: 999,
    cartStatus: "Add To Cart",
  },
  {
    images: ["./Assets/Artboard 1.jpg", "./Assets/Artboard 2.jpg"],
    heading: "Riverdale green T-Shirt",
    description: "Sleek design for casual days",
    sizes: ["L", "XL", "XXL"],
    price: 449,
    cartStatus: "Add To Cart",
  },
  {
    images: ["./Assets/California,edited-01.jpg", "./Assets/California,edited-01,02.jpg"],
    heading: "Calidornia Tee",
    description: "Bold print for anime lovers",
    sizes: ["L", "XL", "XXL"],
    price: 599,
    cartStatus: "Add To Cart",
  },
  {
    images: ["./Assets/Design-02,01.jpg", "./Assets/Design-02,02.jpg"],
    heading: "Anime Graphic Tee",
    description: "Trendy and warm for cold days",
    sizes: ["L", "XL", "XXL"],
    price: 1099,
    cartStatus: "Add To Cart",
  },
  {
    images: ["./Assets/Design-03,01.jpg", "./Assets/Design-03,02.jpg"],
    heading: "The simpsons",
    description: "Perfect for formal or casual wear",
    sizes: ["L", "XL", "XXL"],
    price: 699,
    cartStatus: "Add To Cart",
  },
  {
    images: ["./Assets/Minions-01.jpg", "./Assets/minions-back.png"],
    heading: "The Minions",
    description: "Express your fandom in style",
    sizes: ["L", "XL", "XXL"],
    price: 549,
    cartStatus: "Add To Cart",
  },
  {
    images: ["./Assets/White.jpg", "./Assets/White-b.jpg"],
    heading: "Summer Fit T-Shirt",
    description: "Keep warm with this thick hoodie",
    sizes: ["L", "XL", "XXL"],
    price: 1199,
    cartStatus: "Add To Cart",
  },
  {
    images: ["./Assets/Tom.01.jpg", "./Assets/Jerry.01.jpg"],
    heading: "Tom & Jerry",
    description: "Lightweight and comfortable",
    sizes: ["L", "XL", "XXL"],
    price: 399,
    cartStatus: "Add To Cart",
  },
  {
    images: ["./Assets/Panda-front.jpg", "./Assets/Panda-back.jpg"],
    heading: "Panda",
    description: "Comfort meets creativity",
    sizes: ["L", "XL", "XXL"],
    price: 649,
    cartStatus: "Add To Cart",
  }
];

let newproducts = [
  {
    id: 101,
    images: ["./Assets/Design-04,01.jpg", "./Assets/Design-04,02.jpg"],
    heading: "Casual T-Shirt",
    description: "Clean design with soft cotton fabric",
    sizes: ["L", "XL", "XXL"],
    price: 499,
    ncartStatus: "Add to cart",
  },
  {
    id: 101,
    images: ["./Assets/California,edited-01.jpg", "./Assets/California,edited-01,02.jpg"],
    heading: "Calidornia Tee",
    description: "Clean design with soft cotton fabric",
    sizes: ["L", "XL", "XXL"],
    price: 499,
    ncartStatus: "Add to cart",
  },
  {
    id: 103,
    images: ["./Assets/Artboard 1.jpg", "./Assets/Artboard 2.jpg"],
    heading: "Riverdale green T-Shirt",
    description: "Sleek and premium look for all-day wear",
    sizes: ["L", "XL", "XXL"],
    price: 799,
    ncartStatus: "Add to cart",
  },
  {
    id: 103,
    images: ["./Assets/Design-02,01.jpg", "./Assets/Design-02,02.jpg"],
    heading: "Anime Graphic Tee",
    description: "Sleek and premium look for all-day wear",
    sizes: ["L", "XL", "XXL"],
    price: 799,
    ncartStatus: "Add to cart",
  },
];

let card = document.querySelector("#cards")
let newcard = document.querySelector("#newcards")

function carFunc() {
  let procard = '';
  products.forEach((elem, idx) => {
    procard += `   <div class="card">
                  <div class="imgs">
                      <img src="${elem.images[0]}" class="top" alt="California">
                    <img src="${elem.images[1]}" class="bott" alt="California">
                  </div>
                    <div class="name">
                        <h3>${elem.heading}</h3>
                        <p>${elem.description}</p>
                    </div>
                    <div class="size">
                        <h5>Sizes:-</h5>
                        <h6>${elem.sizes[0]}</h6>
                        <h6>${elem.sizes[1]}</h6>
                        <h6>${elem.sizes[2]}</h6>
                    </div>
                    <div class="price">
                        <h5>₹${elem.price}</h5>
                        <button class="cart" id="${idx}">${elem.cartStatus}</button>
                    </div>
                </div>`
    card.innerHTML = procard
  })
}

function update() {
  card.addEventListener("click", function (det) {
    let val = products[det.target.id];

    if (val.cartStatus == "Add To Cart") {
      val.cartStatus = "View Cart"
      carFunc();
    } else {
      val.cartStatus = "Add To Cart"
      carFunc();
    }
  })
}
function menuBAr() {
  let slideMenu = document.querySelector(".menuu")
  let menu = document.querySelector("#menu")
  let close = document.querySelector(".close")

  let cout = 0;

  menu.addEventListener("click", function () {
    if (cout === 0) {
      slideMenu.style.right = "0%"
      slideMenu.style.top = "0%"
      menu.style.opacity = "0"
      close.style.opacity = "1"
      close.style.color = "white"
      close.style.zIndex = "6"
      cout++;
    }
  })

  close.addEventListener("click", function () {
    if (cout === 1) {
      slideMenu.style.right = "-100%"
      slideMenu.style.top = "0%"
      close.style.opacity = "0"
      menu.style.opacity = "1"
      menu.style.color = "black"
      close.style.zIndex = "5"
      menu.style.zIndex = "6"

      cout--;
    }
  })

}
function newcarFunc() {
  let newCollectionCard = '';
  newproducts.forEach((kel) => {
    newCollectionCard += `  <div class="cardin">
                  <div class="nimgs">
                      <img src="${kel.images[0]}" class="ntop" alt="${kel.heading}">
                    <img src="${kel.images[1]}" class="nbott" alt="${kel.heading}">
                  </div>
                    <div class="nname">
                        <h3>${kel.heading}</h3>
                        <p>${kel.description}</p>
                    </div>
                    <div class="nsize">
                        <h5>Sizes:-</h5>
                        <h6>${kel.sizes[0]}</h6>
                        <h6>${kel.sizes[1]}</h6>
                        <h6>${kel.sizes[2]}</h6>
                    </div>
                    <div class="nprice">
                        <h5>₹${kel.price}</h5>
                        <button class="ncart" id="${kel.id}">${kel.ncartStatus}</button>
                    </div>
                </div>`
    newcard.innerHTML = newCollectionCard
  })
}
function anim() {
  let crsr = document.querySelector("#cursor")
  let bod = document.querySelector("body")
  let topIm = document.querySelector(".top")
  let bottIm = document.querySelector(".bott")

  bod.addEventListener("mousemove", function (det) {
    crsr.style.top = det.clientY + "px"
    crsr.style.left = det.clientX + "px"
  })

  top.addEventListener("mouseenter", function () {
    console.log("hello");

  })
}

update()
anim()
carFunc()
menuBAr()
newcarFunc()