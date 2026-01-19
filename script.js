const display = document.getElementById("display");

function append(value) {
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

  if (type === "pi") {
    display.value += Math.PI;
    return;
  }

  if (isNaN(value)) return;

  if (type === "sin") display.value = Math.sin(value);
  if (type === "cos") display.value = Math.cos(value);
  if (type === "tan") display.value = Math.tan(value);
  if (type === "sqrt") display.value = Math.sqrt(value);
  if (type === "square") display.value = value * value;
}
