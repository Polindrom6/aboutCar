class Transport {
  constructor(type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }

  getInfo() {
    return `Type: ${this.type}<br>Brand: ${this.brand}`;
  }

  getPrice() {
    return `Price: ${this.price}$`;
  }
}

class Car extends Transport {
  constructor(type, price, brand, image, doors) {
    super(type, price, brand);
    this.image = image;
    this.doors = doors;
  }
  getDoorsCount() {
    return `Doors: ${this.doors}`;
  }
}

class Bike extends Transport {
  constructor(type, price, brand, image, maxSpeed) {
    super(type, price, brand);
    this.image = image;
    this.maxSpeed = maxSpeed;
  }

  getMaxSpeed() {
    return `Max Speed: ${this.maxSpeed} mph`;
  }
}

const data = [
  {
    id: 1,
    type: "car",
    brand: "Audi",
    doors: 4,
    price: 4300000,
    image: "assets/images/audi.jpg",
  },
  {
    id: 2,
    type: "car",
    brand: "Mercedes-Benz",
    doors: 4,
    price: 2800000,
    image: "assets/images/mercedes.jpg",
  },
  {
    id: 3,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 210,
    price: 1300000,
    image: "assets/images/harley1.jpg",
  },
  {
    id: 4,
    type: "bike",
    brand: "Harley-Davidson",
    maxSpeed: 220,
    price: 1400000,
    image: "assets/images/harley2.jpg",
  },
];

const container = document.getElementById("transport-container");

data.forEach((item) => {
  let transport;
  if (item.type === "car") {
    transport = new Car(
      item.type,
      item.price,
      item.brand,
      item.image,
      item.doors
    );
  } else if (item.type === "bike") {
    transport = new Bike(
      item.type,
      item.price,
      item.brand,
      item.image,
      item.maxSpeed
    );
  }

  const div = document.createElement("div");
  div.classList.add("transport-card");
  div.innerHTML = `
    <img src="${transport.image}" alt = "${transport.brand}" width = "400" />
        <p>${transport.getInfo()}</p>
        <p>${transport.getPrice()}</p>
        <p>${
          item.type === "car"
            ? transport.getDoorsCount()
            : transport.getMaxSpeed()
        }</p>
        `;
  container.appendChild(div);
});
