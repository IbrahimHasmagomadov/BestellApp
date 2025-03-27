let basket = [];



function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function init() {
    document.getElementById("pizza_container").innerHTML = `
        <img src="assets/img/pizza.jpg" class="category_image">
        <h2>Pizza</h2>
        ${getItemsHTML(pizzas, "pizzas")}
    `;

    document.getElementById("burger_container").innerHTML = `
        <img src="assets/img/burger.jpg" class="category_image">
        <h2>Burger</h2>
        ${getItemsHTML(burgers, "burgers")}
    `;

    document.getElementById("sides_container").innerHTML = `
        <img src="./assets/img/Beilagen.jpg" class="category_image">
        <h2>Beilagen</h2>
        ${getItemsHTML(sides, "sides")}
    `;

    document.getElementById("dips_container").innerHTML = `
        <img src="assets/img/dips.jpg" class="category_image">
        <h2>Dips</h2>
        ${getItemsHTML(dips, "dips")}
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

    if (type == 'pizzas') {
        item = pizzas[i];
    }else if (type == 'burgers') {
        item = burgers[i];
    }else if (type == 'sides') {
        item = sides[i];
    }else if (type == 'dips') {
        item = dips[i];
    }

    basket.push(item);
    renderBasket();
}



function renderBasket() {
    
    const basketContainer = document.querySelector('.basket');
    basketContainer.innerHTML = '<h2>Warenkorb</h2>';
    let countedItems = getCountedItems();
    let total = 0;
    let delivery = 4;

    if (basket.length === 0) {
        basketContainer.innerHTML += '<p>Dein Warenkorb ist leer.</p>';
        
    }for (let i = 0; i < countedItems.length; i++) {
        let item = countedItems[i];
        let itemTotal = item.price * item.count;

        basketContainer.innerHTML += `
            <div class="basket_item">
                <p>
                    <button onclick="decreaseItem('${item.name}')">−</button>
                    ${item.count} 
                    <button onclick="increaseItem('${item.name}')">+</button>
                    ${item.name}  -  ${itemTotal.toFixed(2)} €
                </p>
            </div>
        `;
    }

    for (let i = 0; i < basket.length; i++) {
        total += basket[i].price
    }

    if (total >=30){
        delivery = 0;
    }

    let deliveryText = '';
    if (delivery == 0){
        deliveryText = 'kostenlos'
    }else {
         deliveryText = delivery.toFixed(2) + '€ <br>(kostenlos ab 30€ Bestellwert)';
    }

    let totalWithDelivery = total + delivery;

    basketContainer.innerHTML += /*html*/`
        <div class="basket_total">
            <p>Zwischensumme: ${total.toFixed(2)}€</p>
            <p>Lieferkosten: ${deliveryText} </p>
            <p><strong> Gesamt: ${totalWithDelivery.toFixed(2)}€</strong></p>
        </div>
    `
}

function getCountedItems() {
    let counted = [];

    for (let i = 0; i < basket.length; i++) {
        let currentItem = basket[i];
        let alreadyInCounted = false;

        for (let j = 0; j < counted.length; j++) {
            if (counted[j].name === currentItem.name) {
                counted[j].count++;
                alreadyInCounted = true;
                break;
            }
        }

        if (!alreadyInCounted) {
            let newItem = {
                name: currentItem.name,
                price: currentItem.price,
                count: 1
            };
            counted.push(newItem);
        }
    }

    return counted;
}


function increase(name) {
    for (let i = 0; i < basket.length; i++) {
        const element = array[i];
        
    }
}
