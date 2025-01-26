const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

number1.addEventListener("click", () => {
  navigator.clipboard.writeText("+79048884763");
  alert("Номер телефона скопирован в буфер обмена!");
});

number2.addEventListener("click", () => {
  navigator.clipboard.writeText("+79952384763");
  alert("Номер телефона скопирован в буфер обмена!");
});
