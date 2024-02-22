// const searchInput = document.getElementById("search-input");

// const products = ["Shirts", "Pants", "Shoes", "Bags"];
// let i = 0;
// let j = 0;

// function typingAnimation() {
//   if (j < products[i].length) {
//     searchInput.setAttribute("placeholder", products[i].slice(0, j + 1));
//     j++;
//   } else {
//     j = 0;
//     i++;
//     if (i >= products.length) {
//       i = 0;
//     }
//   }

//   setTimeout(typingAnimation, 400);
// }

// typingAnimation();
// Add product
// const addProduct = (product) => {
//   products.push(product);
// };

// Usage
// addProduct("Hats");
// addProduct("dhoti");
// addProduct("kurta");
// addProduct("Watches");
// addProduct("Socks");
// addProduct("Cargo pants");
// addProduct("Blazer");
// addProduct("Sweaters");
// addProduct("trousers");
// addProduct("jeans");
// end

let tags = {
  data: [
    {
      productName: "Shirts",
      caregory: "Topware",
      price: "300",
      Image: "Tshirt-2.jpg",
    },
    {
      productName: "Shirts",
      caregory: "Topware",
      price: "400",
      Image: "Tshirt-3.webp",
    },

    {
      productName: "jeans",
      caregory: "Bottomware",
      price: "700",
      Image: "jeans-1.jpg",
    },
    {
      productName: "jeans",
      caregory: "Bottomware",
      price: "600",
      Image: "jeans.jpg",
    },
    {
      productName: "Watch",
      caregory: "Accessories",
      price: "1499",
      Image: "watch-1.webp",
    },
    {
      productName: "hat",
      caregory: "Accessories",
      price: "99",
      Image: "hat.jpg",
    },
  ],
};

for (let i of tags.data) {
  // cearte Card
  let card = document.createElement("div");
  // card should have categoyr
  card.classList.add("card", "i.caregory");
  // image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  // img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.Image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  // container
  let container = document.createElement("div");
  container.classList.add("container");
  // product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerHTML = i.productName.toUpperCase();
  container.appendChild(name);
  // price
  let price = document.createElement("h6");
  price.innerText = "₹" + i.price;
  container.appendChild(price);
  card.appendChild(container);

  document.getElementById("products").appendChild(card);
}
