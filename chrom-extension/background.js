async function fetchProductDetails() {
    const response = await fetch("http://chromextensionapi.test/api/products");
    const products = await response.json();
    console.log("Fetched products:", products);
    return products;
}

chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
    if (message.action === "fetchProducts") {
        const products = await fetchProductDetails();
        sendResponse(products);
    }
});
  