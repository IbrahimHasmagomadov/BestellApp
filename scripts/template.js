
function basketItemHTML(item, itemTotal) {
    return /*html*/`
        <div class="basket_item">
            <p>
                <button class="plus_minus" onclick="decreaseItem('${item.name}')">-</button>
                ${item.count} 
                <button class="plus_minus" onclick="increaseItem('${item.name}')">+</button>
                ${item.name}
                <span>${itemTotal.toFixed(2)} €</span>
                <button class="plus_minus" onclick="deleteItem('${item.name}')">🗑️</button>
            </p>
        </div>
    `;
}

function BasketTotalHTML(total, deliveryText, totalWithDelivery) {
    return /*html*/`
        <div class="basket_total">
            <p>Zwischensumme: ${total.toFixed(2)}€</p>
            <p>Lieferkosten: ${deliveryText}</p>
            <p><strong>Gesamt: ${totalWithDelivery.toFixed(2)}€</strong></p>
        </div>
        <div class="basket_order">
            <button class="order_button" onclick="placeOrder()">Bestellen</button>
        </div>
    `;
}

function createMenuItemHTML(item, type, index) {
    return /*html*/`
        <div class="menu-item">
            <div>
                <h3>${item.name}</h3>
                <p>${item.ingredients}</p>
                <p><strong>${item.price.toFixed(2)} €</strong></p>
            </div>
            <button onclick="addToBasket('${type}', ${index})" class="add-button">+</button>
        </div>
    `;
}

function renderCategory(containerId, imagePath, title, items, type) {
    document.getElementById(containerId).innerHTML = `
        <img src="${imagePath}" class="category_image">
        <h2>${title}</h2>
        ${getItemsHTML(items, type)}
    `;
}
