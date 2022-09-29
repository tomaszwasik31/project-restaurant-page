const menuPage = () => {
  console.log("change");

  const createHeading = () => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");

    h1.innerText = "Our Pizzas:";
    content.appendChild(div);
    div.appendChild(h1);
  };

  class Pizza {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }
  const margarita = new Pizza("Margarita ", 10);
  const cheesePizza = new Pizza("Cheese Pizza", 12);
  const veggiePizza = new Pizza("Veggie Pizza ", 12);
  const pepperoniPizza = new Pizza("Pepperoni Pizza ", 14);
  const meatPizza = new Pizza("Meat Pizza ", 14);

  let pizzaList = [
    margarita,
    cheesePizza,
    veggiePizza,
    pepperoniPizza,
    meatPizza,
  ];

  const createPizzaDiv = (pizza) => {
    const div = document.createElement("div");
    const p = document.createElement("p");

    p.innerText = `${pizza.name} $${pizza.price}`;
    content.appendChild(div);
    div.appendChild(p);
  };
  const renderPizzaList = () => {
    pizzaList.forEach((e) => {
      createPizzaDiv(e);
    });
  };
  createHeading();
  renderPizzaList();
};

export default menuPage;
