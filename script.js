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
  allItems = fetch("data/mockdata.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (items) {
      allItems = items;
    })
    .then(function () {
      showAllItems();
    });
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
