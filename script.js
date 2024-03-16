let orderButton = document.getElementById("orderButton");

let imageContainer = document.getElementById("imageContainer");

let RandomTime = Math.floor(Math.random() * 1000);
let orderNumber = Math.floor(Math.random() * 100);

let boxOrderNo = document.getElementById("orderNo");

let ticked = [];

let allInputs = document.querySelectorAll("input");
allInputs.forEach((inp) => {
  inp.addEventListener("click", clickHandlre);
});

function clickHandlre(e) {
  if (e.target.checked) {
    ticked.push(e.target.id);
  } else {
    if (ticked.indexOf(e.ticked.id) !== -1) {
      ticked.splice(ticked.indexOf(e.target.id), 1);
    }
  }
}

orderButton.addEventListener("click", () => {
  let indexRandom = Math.floor(Math.random() * ticked.length);
  let id = ticked[indexRandom];
  console.log(id);
  if (id == "meal") {
    setTimeout(() => {
      imageContainer.innerHTML = `<img style="width: 350px; height: 350px;" src="./assets/meal.jpg" alt="meal">`;
      boxOrderNo.innerText = `Order No : ${orderNumber}`;
    }, RandomTime);
  } else if (id == "burger") {
    setTimeout(() => {
      imageContainer.innerHTML = `<img style="width: 400px; height: 350px;" src="./assets/krabby-patty.avif" alt="burger">`;
      boxOrderNo.innerText = `Order No : ${orderNumber}`;
    }, RandomTime);
  } else if (id == "soda") {
    setTimeout(() => {
      imageContainer.innerHTML = `<img style="width: 400px; height: 350px;" src="./assets/soda.jpg" alt="soda">`;
      boxOrderNo.innerText = `Order No : ${orderNumber}`;
    }, RandomTime);
  }
});
