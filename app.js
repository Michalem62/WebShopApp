const itemsContainer = document.getElementById("items");

function createItemElement(item) {
    const card = document.createElement("article");
    const title = document.createElement("h3");
    const meta = document.createElement("div");
    const price = document.createElement("p");
    const category = document.createElement("p");
    const description = document.createElement("p");
    const actions = document.createElement("div");
    const button = document.createElement("a");
    const linkText = document.createElement("span");

    card.classList.add("single-item");
    meta.classList.add("item-meta");
    price.classList.add("item-price");
    description.classList.add("item-description");
    actions.classList.add("item-actions");
    button.classList.add("item-button");

    title.textContent = item.name;
    category.textContent = item.category;
    price.textContent = `${item.price} zl`;
    description.textContent = item.description;
    linkText.textContent = "Show details";
    button.href = `product_page.html?id=${item.id}`;

    card.appendChild(title);

    if (item.photo) {
        const image = document.createElement("img");
        image.src = item.photo;
        image.alt = item.name;
        image.classList.add("item-image");
        card.appendChild(image);
    }

    meta.appendChild(category);
    meta.appendChild(price);
    card.appendChild(meta);
    card.appendChild(description);
    button.appendChild(linkText);
    actions.appendChild(button);
    card.appendChild(actions);

    return card;
}

function renderItems(items) {
    itemsContainer.textContent = "";

    items.forEach((item) => {
        const itemElement = createItemElement(item);
        itemsContainer.appendChild(itemElement);
    });
}

renderItems(shopItems);
