let date = document.getElementById("dateInput");
let goodDone = document.getElementById("goodDone");
const saveBtn = document.getElementById("saveBtn");
let dateOutput = document.getElementById("dateOutput");

function addDate() {
  let li = document.createElement("li");
  li.innerHTML = date.value;
  dateOutput.appendChild(li);
}

saveBtn.addEventListener("click", addDate);
