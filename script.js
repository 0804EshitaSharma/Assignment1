var allItems = [];
const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("active"));
    sections.forEach((section) => section.classList.remove("active"));
    link.classList.add("active");
    const targetSection = document.querySelector(link.getAttribute("href"));
    targetSection.classList.add("active");
  });
});

function showCards() {
  let output = "";
  for (let item of allItems) {
    output += `
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
        <button class="deleteCard" onclick= 'deleteCard("${item.name}" )' >Delete Item</button>
        </div>
        `;

    document.querySelector(".products").innerHTML = output;
    document.querySelector(".products").style.display = "";
  }
}

function removeCards() {
  const x = document.querySelector(".products");
  x.style.display = "none";
}

function removeitem(item) {
  console.log(item);
  allItems = allItems.filter((i) => i != item);
  showCards();
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
});

formElement.addEventListener("clear", (e) => {
  e.preventDefault();
  document.getElementById("itemname").value = "";
  document.getElementById("itemdescription").value = "";
  document.getElementById("itemprice").value = "";
  document.getElementById("itemphoto").value = "";
});

function search() {
  let itemNameToSearch = document.getElementById("find").value.toUpperCase();
  let allItems = document.querySelectorAll(".product");
  let allItemNames = document.querySelectorAll(".product-name");
  for (var i = 0; i < allItems.length; i++) {
    let itemName = allItems[i].querySelector(".product-name");
    let value =
      itemName.innerHTML || itemName.innerText || itemName.textContent;
    if (value.toUpperCase().indexOf(itemNameToSearch) > -1) {
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
      showCards();
    });
};

function deleteCard(e) {
  let allItems = document.querySelectorAll(".product");
  const allItemNames = document.querySelector(".product-name");

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
// let scrollBar= document.querySelector(".product");
// let btn= document.getElementById("next-btn");
// scrollBar.addEventListener("wheel",(e)=>{
// e.preventDefault();
// scrollBar.scrollLeft+=e.deltaY;
// });
