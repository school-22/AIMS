document
  .getElementById("schoolForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Показываем анимации загрузки
    document.querySelector(".loader").style.display = "block";

    const city = document.getElementById("city").value;
    const schoolNumber = document.getElementById("schoolNumber").value;

    setTimeout(function () {
      if (city === "Tyumen" && schoolNumber === "22") {
        window.location.href = `${city}${schoolNumber}.html`;
      } else {
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
