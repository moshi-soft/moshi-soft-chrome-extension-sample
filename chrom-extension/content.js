chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "fillForm") {
        const product = request.product;
        fillMarketplaceForm(product);
    }
});

function waitForElement(selector) {
    return new Promise(resolve => {
        const interval = setInterval(() => {
            const element = document.querySelector(selector);
            if (element) {
                clearInterval(interval);
                resolve(element);
            }
        }, 100);
    });
}
// Simulate form-filling on Facebook Marketplace
function fillMarketplaceForm(product) {
    console.log("Filling the form with product details:", product);

    // Fill in the title
    const labelElement = document.querySelector('label[aria-label="Title"]');
    if (labelElement) {
        const titleField = labelElement.querySelector('input[type="text"]');
        if (titleField) {
            titleField.value = product.name || "";
            titleField.dispatchEvent(new Event("input", {bubbles: true}));
        } else {
            console.error("Title field not found.");
        }
    } else {
        console.error("Title field not found.");
    }
    const labelElementPrice = document.querySelector('label[aria-label="Price"]');
    if (labelElementPrice) {
        const priceField = labelElementPrice.querySelector('input[type="text"]');
        if (priceField) {
            priceField.value = product.price || "";
            priceField.dispatchEvent(new Event("input", {bubbles: true}));
        } else {
            console.error("Price field not found.");
        }
    } else {
        console.error("Price field not found.");
    }
    const labelElementDescription = document.querySelector('label[aria-label="Description"]');
    if (labelElementDescription) {
        const descriptionField = labelElementDescription.querySelector('textarea');
        if (descriptionField) {
            descriptionField.value = product.description || "";
            descriptionField.dispatchEvent(new Event("textarea", {bubbles: true}));
        } else {
            console.error("Description field not found.");
        }
    } else {
        console.error("Description field not found.");
    }
}

// Request product details from the background script
chrome.runtime.sendMessage({action: "getProductDetails"}, (product) => {
    if (chrome.runtime.lastError) {
        console.error("Error fetching product details:", chrome.runtime.lastError.message);
        return;
    }

    if (product) {
        console.log("Product details received:", product);
        fillMarketplaceForm(product);
    } else {
        console.error("No product details received.");
    }
});
