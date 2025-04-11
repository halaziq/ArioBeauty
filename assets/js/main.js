//the code bellow is to change the nav bar into sticky at top when scroll
const navbar = document.querySelector(".navbar");
const scrollListener = document.createElement("div");

scrollListener.setAttribute("data-scroll-listener", "");
navbar.before(scrollListener);

const navobserver = new IntersectionObserver((entries) => {
  console.log(entries);
  navbar.classList.toggle("sticking", !entries[0].isIntersecting);
});

navobserver.observe(scrollListener);
//functionality for the all shop buttons

document.querySelectorAll(".shop").forEach((shopBtn) => {
  shopBtn.addEventListener("click", function () {
    window.location.href = "#";
  });
});
// functionality for the all new arrival section btns
// item button

document.querySelectorAll(".new-arv-prod .contain img").forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    const parent = e.target.closest(".item");
    const data = parent.dataset;
    const productData = {
      title: data.title,
      price: data.price,
      description: data.description,
      salePrice: data.sale,
      image: data.image,
      image1: data.image1,
      image2: data.image2,
      image3: data.image3,
    };
    localStorage.setItem("product", JSON.stringify(productData));
    window.location.href = "./products.html";
  });
});

//this code is for display the popover when hover in the right icons which appears when hover the prodect on the swiper
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

//this code is to change the image according to clicked color for the pallete
document.querySelectorAll(".powder-col").forEach((color) => {
  color.addEventListener("click", function (e) {
    console.log("the function is linked to the product.html");
    e.preventDefault();
    const imageUrl = this.getAttribute("data-image");
    document.getElementById("powder-image").src = imageUrl;
    document.getElementById("img-hover").src = imageUrl;
  });
});

//the bellow code is for category btn

document.querySelectorAll(".categories .category").forEach((category) => {
  category.addEventListener("click", function () {
    window.location.href = "#";
  });
});

//quick view functionality
const productLinks = document.querySelectorAll(
  '[data-bs-target="#quickViewModal"]'
);
productLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const parent = e.target.closest(".item");
    const data = parent.dataset;

    const title = data.title;
    const desc = data.description;
    const price = data.price;
    const salePrice = data.sale;
    const image = data.image;

    document.getElementById("quickViewTitle").textContent = title;
    document.getElementById("quickViewDesc").textContent = desc;
    document.getElementById("quickViewPrice").textContent = price;
    document.getElementById("quickViewSalePrice").textContent = salePrice;
    document.getElementById("quickViewImage").src = image;
    const modal = new bootstrap.Modal(
      document.getElementById("quickViewModal")
    );
    modal.show();
  });
});

//functionlity for wishlist and add cart btns

let wishlist = [];
let cart = [];
let likesCounts = wishlist.length;
const pressedProduct = document.querySelectorAll(".right-icons .like");

pressedProduct.forEach((like) => {
  like.addEventListener("click", function (e) {
    e.preventDefault();
    const parent = e.target.closest(".item");
    const data = parent.dataset;

    const title = data.title;
    const price = data.price;
    const salePrice = data.sale;
    const image = data.image;
    const likedProduct = {
      title: title,
      price: price,
      salePrice: salePrice,
      image: image,
    };
    wishlist.push(likedProduct);
    likesCounts = wishlist.length;
    console.log(likesCounts);
    document.querySelector(
      ".nav-right .fa-heart .counts .l-counts"
    ).textContent = likesCounts;
  });
});
