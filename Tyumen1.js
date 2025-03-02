
const floors = {
  1: [
    "Спортзал",
    "Столовая",
    "Кабинет технологии",
    ...Array.from({ length: 9 }, (_, i) => `${11 + i}`),
  ],
  2: [
    "Кабинет химии",
    "Актовый зал",
    "Кабинет физики",
    "Кабинет биологии",
    ...Array.from({ length: 9 }, (_, i) => `${21 + i}`),
  ],
  3: [
    ...Array.from({ length: 9 }, (_, i) => `${31 + i}`),
  ],
  4: [
    ...Array.from({ length: 9 }, (_, i) => `${41 + i}`),
  ],
};

function getRandomTemperature() {
  return (18 + Math.random() * 5).toFixed(1) + "°C";
}

function getRandomHumidity() {
  return (40 + Math.random() * 20).toFixed(1) + "%";
}

function updateEnvironmentalData() {
  document
    .querySelectorAll(".temp")
    .forEach((el) => (el.textContent = getRandomTemperature()));
  document
    .querySelectorAll(".humidity")
    .forEach((el) => (el.textContent = getRandomHumidity()));
}

function generateRoomsTable() {
  const cabinetsContainer = document.querySelector(".cabinets tbody");
  if (!cabinetsContainer) return;

  let html = "";
  for (const [floor, rooms] of Object.entries(floors)) {
    rooms.forEach((room) => {
      html += `<tr><td class='room-name'><b>${room}</b></td><td class='temp'></td><td class='humidity'></td><td>${floor}</td></tr>`;
    });
  }

  cabinetsContainer.innerHTML = html;
  updateEnvironmentalData();
}

document.addEventListener("DOMContentLoaded", () => {
  generateRoomsTable();
  setInterval(updateEnvironmentalData, 60000);
});

// Добавление фильтра в шапку
const headerFilter = document.querySelector(".header__btn-block");
if (headerFilter) {
}

document.addEventListener("change", (event) => {
  if (
    event.target.matches(".filter-floor") ||
    event.target.matches("#filter-room")
  ) {
    applyFilter();
  }
});

function applyFilter() {
  const checkedFloors = Array.from(
    document.querySelectorAll(".filter-floor:checked")
  ).map((cb) => cb.value);
  const roomFilter = document
    .getElementById("filter-room")
    .value.trim()
    .toLowerCase();

  document.querySelectorAll(".cabinets tbody tr").forEach((row) => {
    const floor = row.lastElementChild.textContent;
    const room = row.firstElementChild.textContent.toLowerCase();

    if (
      checkedFloors.includes(floor) &&
      (roomFilter === "" || room.includes(roomFilter))
    ) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });
}

// Закрепление шапки таблицы
const style = document.createElement("style");
style.textContent = `
  .cabinets-table thead {
      position: sticky;
      top: 100px;
      background: white;
      z-index: 10;
  }
  .room-name b {
      font-weight: bold;
  }
`;
document.head.appendChild(style);
