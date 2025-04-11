//get product from the local storage

const productdata = JSON.parse(localStorage.getItem("product"));
if (productdata) {
  document.getElementById("image").src = productdata.image;
  document.getElementById("product-image").src = productdata.image;
  document.getElementById("image1").src = productdata.image1;
  document.getElementById("image2").src = productdata.image2;
  document.getElementById("image3").src = productdata.image3;
  document.querySelector(".product .prod-data h1").textContent =
    productdata.title;
  (document.querySelector(".nav-tree .current").textContent =
    productdata.title),
    (document.getElementById("price").textContent = productdata.price);
  document.getElementById("sale").textContent = productdata.salePrice;

  document.querySelectorAll(".prod-gallery").forEach((product) => {
    product.addEventListener("click", function (e) {
      e.preventDefault();

      // Remove active class from all gallery images
      document.querySelectorAll(".prod-gallery").forEach((item) => {
        item.classList.remove("active");
      });
      this.classList.add("active");
      const clickedImage = this.querySelector(
        ".product .gallery .prod-gallery img"
      );
      if (clickedImage) {
        document.getElementById("product-image").src = clickedImage.src;
      }
    });
  });
} else {
}

let decBtn = document.getElementById("decrease");
let incBtn = document.getElementById("increase");
let counter = document.querySelector(".counter");
let value = 1;

function changeCounterValue() {
  decBtn.disabled = value < 2;
  counter.textContent = value;
}
decBtn.addEventListener("click", (e) => {
  changeCounterValue();
  value--;
});

incBtn.addEventListener("click", (e) => {
  value++;
  changeCounterValue();
});
