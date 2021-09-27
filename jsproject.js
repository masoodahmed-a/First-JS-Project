let num = 0

function increment() {
  num += 1;
  document.getElementById("output").innerHTML = num
}


function save() {
  output = num + " - "
  document.getElementById("prev").innerHTML += output
  document.getElementById("output").innerHTML = 0
}