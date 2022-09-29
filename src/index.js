const homePage = (() => {
  const content = document.querySelector("#content");
  const home = document.querySelector("#home");
  const menu = document.querySelector("#menu");
  const contact = document.querySelector("#contact");

  
  const cleanContent = () => {
    content.innerHTML='';
  };
  home.addEventListener("click", cleanContent);
  
  const createHeading = () => {
    div = document.createElement("div");
    h1 = document.createElement("h1");
    h2 = document.createElement("h2");
    h1.innerText = "Best pizza in Town!";
    h2.innerText = "Italian pizza";
    div.setAttribute("id", "headings-wrapper");
    content.appendChild(div);

    div.appendChild(h1);
    div.appendChild(h2);
  };

  const createArticle = () => {
    div = document.createElement("div");
    p = document.createElement("p");
    div.setAttribute("id", "content-article");
    p.setAttribute("class", "txt");

    p.innerText =
      "We serve our Mediterranean delicacies in a beautiful and chic atmosphere. We are ready to welcome you at our table, and welcome you to our restaurant, if you wish.";
    content.appendChild(div);
    div.appendChild(p);
  };

  const createQuote = () => {
    div = document.createElement("div");
    img = document.createElement("img");
    p = document.createElement("p");

    div.setAttribute("id", "quote-wrapper");
    img.setAttribute("id", "chef");
    img.src = "/dist/img/chef.svg";
    p.setAttribute("class", "txt quote");

    p.innerText = "Papa Bons: Mama mia... è delizioso!";
    content.appendChild(div);
    div.appendChild(img);
    div.appendChild(p);
  };

  createHeading();
  createArticle();
  createQuote();
})();
