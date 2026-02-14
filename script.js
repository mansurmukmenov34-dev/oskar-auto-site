const bmw = {
  title: "BMW X5",
  year: "2021",
  mileage: "45 000 км",
  engine: "3.0 бензин",
  price: "2 450 000 ₽",
  image: "bmw.jpg"
};

const camry = {
  title: "Toyota Camry",
  year: "2020",
  mileage: "60 000 км",
  engine: "2.5 бензин",
  price: "1 850 000 ₽",
  image: "camry.jpg"
};

function openModal(car) {
  document.getElementById("m-img").src = car.image;
  document.getElementById("m-title").innerText = car.title;
  document.getElementById("m-year").innerText = car.year;
  document.getElementById("m-mileage").innerText = car.mileage;
  document.getElementById("m-engine").innerText = car.engine;
  document.getElementById("m-price").innerText = car.price;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
