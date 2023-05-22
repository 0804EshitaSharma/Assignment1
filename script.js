// var allItems = fetch("data/mockdata.json")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (items) {
//     allItems = items;
//   });
var allItems=[];

const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

// Add click event listener to each link
links.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove active class from all links and sections
    links.forEach((link) => link.classList.remove("active"));
    sections.forEach((section) => section.classList.remove("active"));

    // Add active class to clicked link and section
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
        <p class="price">
        <span> $</span>
        <span>${item.price}</span>
        <span> CAD </span>
        </p>
        <button onclick="removeitem(${item})">Delete Item</button>
        </div>
        `;

    document.querySelector(".products").innerHTML = output;
    document.querySelector(".products").style.display = "";
  }
}

function removeCards() {
  document.querySelector(".products").style.display = "none";
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

// function showElectronicCards() {
//   // let allItems1 = document.querySelectorAll('.item');
//   let allElectronicItems = allItems.filter(
//     (item) => item.category === "Electronics"
//   );

//   for (var i = 0; i < allElectronicItems.length; i++) {
//     allElectronicItems[i].style.display = "";
//   }
// }

// function filterItems(value) {
    
// //   let buttons = document.querySelectorAll(".btn");
// //   buttons.forEach((b) => {
// //     console.error(b.innerText);
// //     if (b.innerText.toUpperCase() == value.toUpperCase()) {
// //       b.classList.add("active-button");
// //     } else {
// //       b.classList.remove("active-button");
// //     }
// //   });
//   let allItems = document.querySelectorAll(".item");
//   allItems.forEach((b) => {
//     if (value == "All") {
//       b.classList.remove("hide");
//     } else {
//       if (b.classList.contains(value)) {
//         b.classList.remove("hide");
//       } else {
//         b.classList.add("hide");
//       }
//     }
//   });
// }

window.onload=()=>{
   allItems = fetch("data/mockdata.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (items) {
    allItems = items;
  });
};

// function showCards() {
//   let output = "";
//   for (let item of allItems) {
//     output += `
//         <div class="item">
//         <img class="item-image" src="${item.url}" alt="${item.url}">
//         <p class="item-name">${item.name}</p>
//         <p class="item-description">${item.description}</p>
//         <p class="item-price">
//         <span> $</span>
//         <span>${item.price}</span>
//         <span> CAD </span>
//         </p>
//         <button onclick="removeitem(${item})">Delete Item</button>
//         </div>
//         `;
//     // let item = document.createElement("div");
//     // console.error( i.category);
//     // item.classList.add("item", i.category.toString(),"hide");
//     // let itemContainer = document.createElement("div");
//     // itemContainer.classList.add("item-container");
//     // let itemImage = document.createElement("img");
//     // itemImage.setAttribute("src", i.url);
//     // itemContainer.appendChild(itemImage);
//     // item.appendChild(itemContainer);
//     // let container = document.createElement("div");
//     // container.classList.add("container");
//     // let name = document.createElement("h5");
//     // name.classList.add("item-name");
//     // name.innerText = i.name.toUpperCase();
//     // container.appendChild(name);
//     // let price = document.createElement("h6");
//     // price.classList.add("item-price");
//     // price.innerText = "$" + i.price;
//     // container.appendChild(price);

//     // let description = document.createElement("p");
//     // description.classList.add("item-description");
//     // description.innerText = i.description;
//     // container.appendChild(description);

//     // item.appendChild(container);
//     // document.getElementById("item-info").appendChild(item);

//     document.querySelector("#item-info").innerHTML = output;

//     document.querySelector("#item-info").style.display = "block";
//   }
// }