const bouquets = [
  { title: "باقة وردية", img: "images/pink-bouquet.png" },
  { title: "باقة حمراء", img: "images/red-bouquet.png" },
  { title: "باقة بنفسجية", img: "images/purple-bouquet.png" },
  { title: "باقة مختلطة", img: "images/mixed-bouquet.png" }
];

const container = document.getElementById("bouquetContainer");

bouquets.forEach(bouquet => {
  const card = document.createElement("div");
  card.className = "bouquet-card";

  const img = document.createElement("img");
  img.src = bouquet.img;
  img.alt = bouquet.title;

  const title = document.createElement("h3");
  title.textContent = bouquet.title;

  card.appendChild(img);
  card.appendChild(title);
  container.appendChild(card);
});
