const increment = document.getElementById("incre");
const decrement = document.getElementById("decre");
const txt = document.getElementById("text");
const reset = document.getElementById("rst");
console.log(text.value);
function incr() {
  let temp = Number(txt.textContent);
  temp += 1;
  txt.textContent = temp;
}
function Decre() {
  let temp = Number(txt.textContent);
  temp -= 1;
  txt.textContent = temp;
}
function Reset() {
  let temp = Number(txt.textContent);
  temp = 0;
  txt.textContent = temp;
}
