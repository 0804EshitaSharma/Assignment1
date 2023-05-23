const data="[\n    {\n      \"name\": \"Mackbook Pro\",\n      \"price\": 1500,\n      \"description\": \"MacBook Pro 2023 with mini-LED display.Go longer than ever with up to 18 hours of battery life.It has  8GB of unified memory makes your entire system speedy and responsive.\",\n      \"url\": \"https://m.media-amazon.com/images/I/61vhiiYIXxL._AC_SX679_.jpg\",\n      \"category\":\"Electronics\"\n    },\n    {\n      \"name\": \"Tomatoes\",\n      \"price\": 10,\n      \"description\": \"This is a Vegetarian product.It has Good source of Vitamin A, C, K, Iron, Folate and Potassium which helps to reduce Cholesterol\",\n      \"url\": \"data:image/jpeg;base64,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\",\n      \"category\":\"Groceries\"\n    },\n    {\n      \"name\": \"Airpods Pro\",\n      \"price\": 250,\n      \"description\": \"These Airpods have Active Noise Cancellation blocks outside noise, so you can immerse yourself in music and Transparency mode for hearing and interacting with the world around you\",\n      \"url\": \"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBiHnyjd-aCFUP_m8ZvsTE52LjS4tirQPQUA&usqp=CAU\",\n      \"category\":\"Electronics\"\n    },\n    {\n      \"name\": \"Calculator\",\n      \"price\":10,\n      \"description\": \"This Calculator comes wth attached hard cover for extra protection and durability and with 120 steps check function\",\n      \"url\": \"https://m.media-amazon.com/images/I/616Kmv5LvdL._AC_UL640_FMwebp_QL65_.jpg\",\n      \"category\":\"Electronics\"\n    },\n    {\n      \"name\": \"Maybelline Mascara\",\n      \"price\": 40,\n      \"description\": \"It is Easy to apply mascara that provides curled and volumized lashes\",\n      \"url\": \"https://m.media-amazon.com/images/I/51pQmQhAm0L._AC_UL800_FMwebp_QL65_.jpg\",\n      \"category\":\"Cosmetics\"\n    }\n  ]";
var allItems = [];
const allLinks = document.querySelectorAll("nav a");
const allSections = document.querySelectorAll("section");

// Referred from  ChatGPT
allLinks.forEach((link) => {
  link.addEventListener("click", () => {
    allLinks.forEach((link) => link.classList.remove("active"));
    allSections.forEach((section) => section.classList.remove("active"));
    link.classList.add("active");
    const resultingSection = document.querySelector(link.getAttribute("href"));
    resultingSection .classList.add("active");
  });
});

// Referred from https://www.youtube.com/watch?v=o6bLYYStZss
function showAllItems() {
  let result = "";
  for (let item of allItems) {
   result += `
        <div class="product">
        <img src="${item.url}" alt="${item.url}">
        <p class="product-name">${item.name}</p>
        <p class="description">${item.description}</p>
        <p class="category">${item.category}</p>
        <p class="price">
        <span> $</span>
        <span>${item.price}</span>
        <span> CAD </span>
        </p>
        <button class="form-btn" onclick= 'deleteItem("${item.name}" )' >Delete Item</button>
        </div>
        `;

    document.querySelector(".products").innerHTML = result;
    document.querySelector(".products").style.display = "";
  }
}

function removeAllItems() {
  const products = document.querySelector(".products");
  products.style.display = "none";
}

const formElement = document.querySelector("#form");
formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formElement);
  const data = Object.fromEntries(formData);
  allItems.push(data);
  document.getElementById("itemname").value = "";
  document.getElementById("itemdescription").value = "";
  document.getElementById("itemprice").value = "";
  document.getElementById("itemphoto").value = "";
  var resultingHomeSection = document.getElementById("home");
  resultingHomeSection.classList.remove("active");
  var resultingDashboardSection = document.getElementById("dashboard");
  resultingDashboardSection.classList.add("active");
});

formElement.addEventListener("reset", (e) => {
  e.preventDefault();
  document.getElementById("itemname").value = "";
  document.getElementById("itemdescription").value = "";
  document.getElementById("itemprice").value = "";
  document.getElementById("itemphoto").value = "";
});

// Referred from https://www.youtube.com/watch?v=hEs3IL6UyvE
function search() {
  let itemNameToSearch = document.getElementById("itemsearch").value.toUpperCase();
  let allItems = document.querySelectorAll(".product");
  for (var i = 0; i < allItems.length; i++) {
    let itemName = allItems[i].querySelector(".product-name");
    let valueOfItemName =
      itemName.innerHTML || itemName.innerText || itemName.textContent;
    if (valueOfItemName.toUpperCase().indexOf(itemNameToSearch) > -1) {
      allItems[i].style.display = "";
    } else {
      allItems[i].style.display = "none";
    }
  }
}

window.onload = () => {
  allItems = JSON.parse(data);
  showAllItems();
};

function deleteItem(e) {
  let allItems = document.querySelectorAll(".product");
  for (var i = 0; i < allItems.length; i++) {
    let itemName = allItems[i].querySelector(".product-name");
    let value =
      itemName.innerHTML || itemName.innerText || itemName.textContent;
    if (value.toUpperCase() == e.toUpperCase()) {
      allItems[i].style.display = "none";
    }
  }
}

function filterItems(value) {
  let allItems = document.querySelectorAll(".product");
  for (var i = 0; i < allItems.length; i++) {
    let itemCategory = allItems[i].querySelector(".category");
    let itemCategoryValue =
      itemCategory.innerHTML ||
      itemCategory.innerText ||
      itemCategory.textContent;
    if (value.toUpperCase() !== itemCategoryValue.toUpperCase()) {
      allItems[i].style.display = "none";
    } else {
      allItems[i].style.display = "";
    }
  }
}
