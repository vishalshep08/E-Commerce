const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [

  {
    id: 1,
    title: "GUCCI SUMMER SPECIAL",
    
    
   
    colors: [
      {
        code: "orangered",
        img: "Gucci/sunglass1.png",
      },
      {
        code: "black",
        img: "Gucci/sunglass2.png",
      },
    ],
  },
  {
    id: 2,
    title: "PERSOL SUMMER SPECIAL",
    price: 1199,
    colors: [
      {
        code: "darkgreen",
        img: "Persol/sunglass1.png",
      },
      {
        code: "sienna",
        img: "Persol/sunglass3.png",
        // position
      },
    ],
  },
  {
    id: 3,
    title: "RAY-BAN SUMMER SPECIAL",
    price: 1299,
    colors: [
      {
        code: "olive",
        img: "Ray-Ban/sunglass1.png",
      },
      {
        code: "darkgreen",
        img: "Ray-Ban/sunglass2.png",
      },
    ],
  },
  {
    id: 4,
    title: "TOM FORD NEW ARRIVAL",
    price: 1999,
    colors: [
      {
        code: "orangeblack",
        img: "Tom Ford/sunglasss1.png",
      },
      {
       code: "black",
       img: "Tom Ford/sunglass2.png",
    
      },
    ],
  },
  {
    id: 5,
    title: "VOGUE NEW ARRIVAL",
    price: 1899,
    colors: [
      {
        code: "copper",
        img: "Vogue Eyewear/sunglass2.png",
      },
      {
        code: "brown",
        img: "Vogue Eyewear/download.png",
       },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
