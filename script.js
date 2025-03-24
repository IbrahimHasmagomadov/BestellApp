let basket = [];



function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function init() {
    document.getElementById("pizza_container").innerHTML = `
        <img src="assets/img/pizza.jpg" class="category_image">
        <h2>Pizza</h2>
        ${getItemsHTML(pizzas, 'pizza')}
    `;

    document.getElementById("burger_container").innerHTML = `
        <img src="assets/img/burger.jpg" class="category_image">
        <h2>Burger</h2>
        ${getItemsHTML(burgers, 'burger')}
    `;

    document.getElementById("sides_container").innerHTML = `
        <img src="./assets/img/Beilagen.jpg" class="category_image">
        <h2>Beilagen</h2>
        ${getItemsHTML(sides, 'sides')}
    `;

    document.getElementById("dips_container").innerHTML = `
        <img src="assets/img/dips.jpg" class="category_image">
        <h2>Dips</h2>
        ${getItemsHTML(dips)}
    `;
    renderBasket();
}

function getItemsHTML(items, type) {
    let html = "";
    for (let i = 0; i < items.length; i++) {
        html += /*html*/`
            <div class="menu-item">
                <h3>${items[i].name}</h3>
                <p>${items[i].ingredients}</p>
                <p><strong>${items[i].price.toFixed(2)} €</strong></p>
                <button onclick="addToBasket('${type}', ${i})" class="add-button">+</button>
            </div>
        `;
    }
    return html;
}

function addToBasket(type, i) {
    let item;

    if (type === pizzas) {
        item = pizzas[i];
    }else if (type === burgers) {
        item = burgers[i];
    }else if (type === sides) {
        item = sides[i];
    }else if (type === dips) {
        item = dips[i];
    }

    basket.push(item);
    renderBasket();
}



function renderBasket() {
    const basketContainer = document.querySelector('.basket');
    basketContainer.innerHTML = '<h2>Warenkorb</h2>';

    if (basket.length === 0) {
        basketContainer.innerHTML += '<p>Dein Warenkorb ist leer.</p>';
    }for (let i = 0; i < basket.length; i++) {
        let item = basket[i];
        basketContainer.innerHTML += `
            <div class="basket_item">
                <p>${item.name} - ${item.price.toFixed(2)} €</p>
            </div>
        `;
    }
}
