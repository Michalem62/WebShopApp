const productDetailContainer = document.getElementById("product-detail");
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

function createProductDetail(product) {
    const wrapper = document.createElement("article");
    const image = document.createElement("img");
    const copy = document.createElement("div");
    const category = document.createElement("p");
    const title = document.createElement("h2");
    const price = document.createElement("p");
    const description = document.createElement("p");
    const backLink = document.createElement("a");

    wrapper.classList.add("product-detail");
    image.classList.add("product-detail-image");
    copy.classList.add("product-detail-copy");
    price.classList.add("product-price");
    backLink.classList.add("item-button");

    image.src = product.photo;
    image.alt = product.name;
    category.textContent = product.category;
    category.classList.add("section-label");
    title.textContent = product.name;
    price.textContent = `${product.price} zl`;
    description.textContent = product.details;
    backLink.href = "main_page.html";
    backLink.textContent = "Back to products list";

    copy.appendChild(category);
    copy.appendChild(title);
    copy.appendChild(price);
    copy.appendChild(description);
    copy.appendChild(backLink);

    wrapper.appendChild(image);
    wrapper.appendChild(copy);

    return wrapper;
}

function renderProductDetail() {
    const selectedProduct = shopItems.find((item) => item.id === productId);

    if (!selectedProduct) {
        productDetailContainer.innerHTML = `
            <section class="hero">
                <p class="hero-badge">Blad</p>
                <h2>Haven't found a product</h2>
                <p class="hero-text">Go back to main page</p>
            </section>
            `;
        return;
    }

    productDetailContainer.appendChild(createProductDetail(selectedProduct));
}

renderProductDetail();
