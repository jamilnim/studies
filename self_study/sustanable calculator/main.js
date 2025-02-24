const priceBox = document.querySelector(".priceBox");
const dressPriceform = document.querySelector("#dressPriceform");
const sustanabitymaterial = document.getElementById("Sustanabitymaterial");

const changeHandler = (Event) => {
  // emblishment check box

  let emblishmentPrice = [...document.querySelectorAll(".emblishment:checked")];
  let totalemblishmentPrice = emblishmentPrice.reduce(
    (sum, emblishment) => sum + parseFloat(emblishment.dataset.price),
    0
  );

  // item redio button
  let baseItemPrice = 0;
  const itemPrice = document.querySelector(".item:checked");
  if (itemPrice) {
    baseItemPrice = parseFloat(itemPrice.dataset.price);
  }

  // material option with down

  let materialSustainiblity = parseFloat(
    sustanabitymaterial.selectedOptions[0].dataset.price
  );

  priceBox.textContent = `${
    baseItemPrice + totalemblishmentPrice + materialSustainiblity
  }€`;
};

dressPriceform.addEventListener("change", changeHandler);
