const point = document.querySelectorAll(".point h5");
const category = document.querySelectorAll(".poin-img span");
const img = document.querySelectorAll(".poin-img img");
let count = score.textContent;

async function fetchData() {
  try {
    const response = await fetch("./data.json");
    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

async function updateElements() {
  const data = await fetchData();

  for (let i = 0; i < data.length; i++) {
    point[i].textContent = data[i].score;
    category[i].textContent = data[i].category;
    img[i].src = data[i].icon;
  }
}

updateElements();
