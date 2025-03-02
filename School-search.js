document
  .getElementById("schoolForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Показываем анимации загрузки
    document.querySelector(".loader").style.display = "block";

    const city = document.getElementById("city").value.trim();
    const schoolNumber = document.getElementById("schoolNumber").value.trim();

    setTimeout(function () {
      const validSchools = {
        Tyumen22: "Tyumen22.html",
        Tyumen1: "Tyumen1.html",
        Tyumen2: "Tyumen2.html",
        Tyumen3: "Tyumen3.html",
        Tyumen4: "Tyumen4.html",
        Tyumen5: "Tyumen5.html",
        Tyumen6: "Tyumen6.html",
        Tyumen7: "Tyumen7.html",
        Tyumen8: "Tyumen8.html",
        Tyumen9: "Tyumen9.html",
        Tyumen10: "Tyumen10.html",
        Tyumen11: "Tyumen11.html",
        Tyumen12: "Tyumen12.html",
        Tyumen13: "Tyumen13.html",
        // Добавь сюда остальные школы, например:
        // Tyumen3: "Tyumen3.html",
        // Moscow5: "Moscow5.html"
      };

      const schoolKey = city + schoolNumber; // Формируем ключ как комбинацию города и номера

      if (validSchools[schoolKey]) {
        // Если школа существует, переходим на нужную страницу
        window.location.href = validSchools[schoolKey];
      } else {
        // Если школы нет в каталоге, показываем ошибку
        alert(
          "Этой школы пока нет в доступном каталоге школ, или её не существует."
        );
        document.getElementById("city").value = "";
        document.getElementById("schoolNumber").value = "";
      }

      // Скрываем анимацию загрузки
      document.querySelector(".loader").style.display = "none";
    }, 3000);
  });
