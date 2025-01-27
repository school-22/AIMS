document.addEventListener("DOMContentLoaded", function () {
  const blocks = document.querySelectorAll(".blocs");

  function getRandomValue(min, max, decimals = 1) {
    const factor = Math.pow(10, decimals);
    return (
      (Math.floor(Math.random() * (max * factor - min * factor + 1)) +
        min * factor) /
      factor
    );
  }

  function updateBlocks() {
    const seed = Math.floor(Date.now() / 60000); // Получаем уникальное значение каждую минуту
    Math.seedrandom(seed); // Используем библиотеку seedrandom для одинаковых данных

    blocks.forEach((block, index) => {
      const temperature = getRandomValue(19.0, 25.0);
      const humidity = getRandomValue(40, 60, 0);

      block.innerHTML = `
                <p style="font-weight: bold;" class="p-cab">Кабинет ${index + 1}</p>
                <p class="p-temp">Температура: ${temperature.toFixed(1)}°C</p>
                <p class="p-vlaj">Влажность: ${humidity}%</p>
            `;
    });
  }

  updateBlocks();
  setInterval(updateBlocks, 60000);
});
