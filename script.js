const display = document.getElementById("display");

function append(value) {
  if (navigator.vibrate) {
    navigator.vibrate(30);
  }
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
function scientific(type) {
  let value = parseFloat(display.value);

  if (isNaN(value) && type !== "pi") {
    return;
  }

  if (type === "sin") {
    display.value = Math.sin(value);
  } else if (type === "cos") {
    display.value = Math.cos(value);
  } else if (type === "tan") {
    display.value = Math.tan(value);
  } else if (type === "sqrt") {
    display.value = Math.sqrt(value);
  } else if (type === "square") {
    display.value = value * value;
  } else if (type === "pi") {
    display.value += Math.PI;
  }
}
