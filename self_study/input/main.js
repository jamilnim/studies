const inputTex = document.getElementById("inputTex");
const outPut = document.getElementById("outPut");
let inputSaver = [];
const saveBtn = document.getElementById("SaveBtn");

function outGenarate() {
  inputValue = inputTex.value;
  inputSaver.push(inputValue);
  outPut.innerHTML = inputSaver.join("<br>");
  inputTex.value = "";
}

saveBtn.addEventListener("click", outGenarate);
