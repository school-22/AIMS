document.querySelector(".burger-menu").addEventListener("click", () => {
  document.querySelector(".wrapper").style.display = "none";

  document.querySelector(".wrapper-menu").style.display = "block";
});

document.querySelector(".wrapper-menu-close").addEventListener("click", () => {
  document.querySelector(".wrapper").style.display = "block";

  document.querySelector(".wrapper-menu").style.display = "none";
});

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

// Получаем все элементы с классом "m__item"
const menuItems = document.querySelectorAll(".menu__item");

// Добавляем обработчик события для каждого элемента
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".wrapper").style.display = "block";
    console.log("s");

    document.querySelector(".wrapper-menu").style.display = "none";
  });
});
