document.getElementById("fetch-products").addEventListener("click", () => {
    chrome.runtime.sendMessage({ action: "fetchProducts" }, (products) => {
        const productList = document.getElementById("product-list");
        productList.innerHTML = "";
        products.forEach(product => {
            const listItem = document.createElement("li");
            listItem.textContent = `${product.name} - $${product.price}`;
            productList.appendChild(listItem);
        });
    });
});