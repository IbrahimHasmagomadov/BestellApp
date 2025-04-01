let countedBasket = [];

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function init() {
    renderCategory("pizza_container", "./assets/img/pizza.jpg", "Pizza", pizzas, "pizzas");
    renderCategory("burger_container", "./assets/img/burger.jpg", "Burger", burgers, "burgers");
    renderCategory("sides_container", "./assets/img/beilagen.jpg", "Beilagen", sides, "sides");
    renderCategory("dips_container", "./assets/img/dips.jpg", "Dips", dips, "dips");
    renderBasket();
}

function getItemsHTML(items, type) {
    let html = "";
    for (let i = 0; i < items.length; i++) {
        html += createMenuItemHTML(items[i], type, i);
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
    let alreadyInBasket = false;

    for (let j = 0; j < countedBasket.length; j++) {
        if (countedBasket[j].name === item.name) {
            countedBasket[j].count++;
            alreadyInBasket = true;
            break;
        }
    }
    if (!alreadyInBasket) {
        let newItem = {
            name: item.name,
            price: item.price,
            count: 1
        };
        countedBasket.push(newItem);
    }
    renderBasket();
}

function renderBasket() {
    
    const basketContainer = document.querySelector('.basket');
    basketContainer.innerHTML = '<h2>Warenkorb</h2>';

    let total = 0;
    let delivery = 4;

    if (countedBasket.length === 0) {
        basketContainer.innerHTML += '<p>Dein Warenkorb ist leer.</p>';
        return;
        
    }for (let i = 0; i < countedBasket.length; i++) {
        let item = countedBasket[i];
        let itemTotal = item.price * item.count;

        basketContainer.innerHTML += basketItemHTML(item, itemTotal);
        total += itemTotal;
    }
    if (total >=30){
        delivery = 0;
    }
    let deliveryText = '';
    if (delivery === 0){
        deliveryText = '0€'
    }else {
         deliveryText = delivery.toFixed(2) + '€ <br>(kostenlos ab 30€ Bestellwert)';
    }
    let totalWithDelivery = total + delivery;
    basketContainer.innerHTML += BasketTotalHTML(total, deliveryText, totalWithDelivery);
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

function increaseItem(name) {
    for (let i = 0; i < countedBasket.length; i++) {
        if (countedBasket[i].name === name) {
            countedBasket[i].count++;

            break;
        }
    }
    renderBasket();
}

function decreaseItem(name) {
    for (let i = 0; i < countedBasket.length; i++) {
        if (countedBasket[i].name === name) {
            countedBasket[i].count--;

            if (countedBasket[i].count === 0) {
                countedBasket.splice(i, 1);
            }
            break;
        }
    }
    renderBasket();
}

function deleteItem(name) {
    for (let i = 0; i < countedBasket.length; i++) {
        if (countedBasket[i].name === name) {
            countedBasket.splice(i, 1);
            break;
        }
    }
    renderBasket();
}

function placeOrder() {
    countedBasket = [];
    renderBasket();

    const basketContainer = document.querySelector('.basket');
    const feedback = document.createElement('p');
    feedback.textContent = "Ihre Bestellung wurde erfolgreich entgegengenommen. Lieferzeit: ca. 45 Minuten. Guten Appetit!";
    feedback.classList.add('order-feedback');
    basketContainer.appendChild(feedback);
}

function toggleBasket() {
    const basket = document.querySelector('.basket_content');
    basket.classList.toggle('show_mobile_basket');
}