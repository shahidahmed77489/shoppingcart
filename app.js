let storeData = [];
let url = "https://fakestoreapi.com/products";
fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((res) => {
    res.map((item) => storeData.push(item));
    createCard(storeData);
  })
  .catch((error) => {
    console.log(error);
  });
function createCard(newData) {
  let element = "";
  newData.map((item) => {
    return (element += `
        <tr id="middle">
        <td class="header"><img src="${item.image}" alt="something went wrong" class="img">
        <button class="btn" onclick="addtoCart('${item.id}')">Add To Cart</button></td>
        <td>${item.title}</td>
        <td><p class="priceData"> $. ${item.price}</p></td>
        <td><button onclick="showDetails('${item.description}')">Details....</button> </td>
        <td id="describe">${item.description}</td>
        <td class="rating">Rating: ${item.rating.rate}<span><i class="fa-solid fa-star" style="color: #fbff00;"></i></span></td>
        </tr>
      `);
  });
  document.getElementById("showElement").innerHTML = element;
}
function closeBtn() {
  document.getElementById("overlay").style.display = "none";
}

function showCart(data = cartItem) {
  console.log(data);
  let visibleElement = "";
  data.map((item) => {
    return (visibleElement += `
      <div class="main-parent">
      <div class="image-cart">
      <img src="${item.image}" alt="something went wrog">
      </div>
      <p class="priceItem">$ ${item.price}</p>
      <h2>${item.title}</h2>
      <p>${item.description.slice(0, 100)}</p>
      <button onclick="decreaseItem(${item.id})">-</button>
      <span id="showNumber">${item.count}</span>
      
      <button onclick="increaseItem(${item.id})">+</button>
      </div>
      `);
  });
  document.getElementById("overlay").style.display = "block";
  document.getElementById("demo").style.display = "block";
  document.getElementById("demo22").innerHTML = visibleElement;
}

let cartItem = [];
function addtoCart(id) {
  debugger;
  let filterIndex = storeData.find((item) => item.id == id);
  console.log(filterIndex);

  if (filterIndex) {
    if (filterIndex.count) {
      filterIndex.count += 1;
    } else {
      filterIndex.count = 1;
    }
    let index = cartItem.findIndex((item) => item.id == id);
    console.log(index);
    if (index >= 0) {
      cartItem[index] = filterIndex;
    } else {
      cartItem.push(filterIndex);
    }
    // console.log(filterIndex);
    showCart(cartItem);
  }
  document.getElementById("demo").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.getElementById("showcartItem").innerHTML = cartItem.length;
}

////////////
function showDetails(description) {
  storeData.filter((item) => {
    if (item.description == description) {
      document.getElementById("describe").style.display = "block";
      document.getElementById("describe").innerHTML = item.description;
    }
  });
}

function searchData(searchElement) {
  let selectedArray = [];
  if (searchElement == "") {
    createCard(storeData);
  } else {
    for (let i = 0; i < storeData.length; i++) {
      if (
        storeData[i].title.toLowerCase().startsWith(searchElement.toLowerCase())
      ) {
        selectedArray.push(storeData[i]);
      }
    }
    createCard(selectedArray);
  }
}

function increaseItem(id) {
  let data = cartItem.find((item) => item.id === id);
  data.count += 1;
  showCart(cartItem);
  console.log(cartItem);
}
// let emptyCart = [];
function decreaseItem(id) {
  if (cartItem) {
    var data = cartItem.find((item) => item.id === id);
    data.count -= 1;
    showCart(cartItem);
  }
  if (data.count == 0) {
    const remainingItem = cartItem.filter((item) => item.id != id);
    cartItem = remainingItem;
    showCart(remainingItem);
    document.getElementById("showcartItem").innerHTML = remainingItem.length;
    // cartItem.splice(data, 1);
    // showCart(cartItem);
    // document.getElementById("showcartItem").innerHTML = cartItem.length;
  }
}

// function ab() {
//   let a = 20;
//   let b = 21;
//   return a + b;
// }
// // let c = ab();
// // console.log(c);
// function callback(z) {
//   console.log(z());
// }
// callback(ab);

// function callback() {
//   let name = "irshad noori";
//   console.log(name);
// }
// function golmaaaaaal(a, z) {
//   let sum = "undertaker";
//   console.log(sum, a);
//   z();
// }
// golmaaaaaal(20, callback);
///////////////////
// console.log("event lopp work");
// function myMultiply(a, b) {
//   console.log(a * b);
// }
// function start() {
//   myMultiply(3, 5);
//   console.log("hdl");
// }
// start();
////////////
// function one() {
//   console.log("oneeeee");
//   two();
// }
// function two() {
//   console.log("twooooo");
//   three();
// }
// function three() {
//   console.log("threeeee");
// }
// one();
// two();
// three();

///////  important Question For Interview    /////////
// for (let i = 0; i <= 10; i++) {   // var
//   function one(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
//   one(i);
// }

// for (let i = 0; i <= 10; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }
// console.log(i);

//////////////
// const lunch = () => console.log("It's time for lunch!");

// const dinner = () => console.log("It's time for dinner!");

// const breakfast = () => {
//   console.log("Time to breakfast!");
//   setTimeout(lunch, 3000);
//   dinner();
// };

// breakfast();
//////////////////////
