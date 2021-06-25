let count = 0;

function increment() {
  count++;
  document.getElementById("count-el").innerText = count;
  //   console.log(count);
}

function save() {
  let countStr = count + " - ";
  document.getElementById("save-el").textContent += countStr;

  document.getElementById("count-el").textContent = 0;
  count = 0;

  //   console.log(count);
}
