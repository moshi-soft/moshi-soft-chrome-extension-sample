function uploadToFacebook(product) {
    // Simulate filling in the Facebook Marketplace form
    document.querySelector('input[name="title"]').value = product.name;
    document.querySelector('textarea[name="description"]').value = product.description;
    document.querySelector('input[name="price"]').value = product.price;

    // Trigger an alert to show success
    alert("Product details have been auto-filled!");
}

chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "uploadProduct") {
        uploadToFacebook(message.product);
    }
});