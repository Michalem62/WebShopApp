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

    wrapper.classList.add("product-detail");
    image.classList.add("product-detail-image");
    copy.classList.add("product-detail-copy");
    price.classList.add("product-price");

    image.src = product.photo;
    image.alt = product.name;
    category.textContent = product.category;
    category.classList.add("section-label");
    title.textContent = product.name;
    price.textContent = `${product.price} zl`;
    description.textContent = product.description;

    copy.appendChild(category);
    copy.appendChild(title);
    copy.appendChild(price);
    copy.appendChild(description);

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
