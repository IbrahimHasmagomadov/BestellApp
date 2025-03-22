function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}


function init() {
    document.getElementById("pizza_container").innerHTML = `
        <img src="assets/img/pizza.jpg" class="category_image">
        <h2>Pizza</h2>
        ${getItemsHTML(pizzas)}
    `;

    document.getElementById("burger_container").innerHTML = `>
        <img src="assets/img/burger.jpg" class="category_image">
        <h2>Burger</h2
        ${getItemsHTML(burgers)}
    `;

    document.getElementById("sides_container").innerHTML = `
        <img src="./assets/img/Beilagen.jpg" class="category_image">
        <h2>Beilagen</h2>
        ${getItemsHTML(sides)}
    `;

    document.getElementById("dips_container").innerHTML = `
        <img src="assets/img/dips.jpg" class="category_image">
        <h2>Dips</h2>
        ${getItemsHTML(dips)}
    `;
}

function getItemsHTML(items) {
    let html = "";
    for (let i = 0; i < items.length; i++) {
        html += `
            <div class="menu-item">
                <h3>${items[i].name}</h3>
                <p>${items[i].ingredients}</p>
                <p><strong>${items[i].price.toFixed(2)} €</strong></p>
                <button class="add-button">+</button>
            </div>
        `;
    }
    return html;
}
