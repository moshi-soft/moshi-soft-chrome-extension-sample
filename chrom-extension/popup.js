document.addEventListener("DOMContentLoaded", async () => {
    const apiUrl = "http://chromextensionapi.test/api/products"; // Endpoint for listing products
    const productListContainer = document.getElementById("product-list");
    const productDetailsContainer = document.getElementById("product-details");
    const titleElement = document.getElementById("product-title");
    const descriptionElement = document.getElementById("product-description");
    const priceElement = document.getElementById("product-price");
    const uploadButton = document.getElementById("upload-button");

    try {
        // Fetch the list of products
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch products");
        }
        const products = await response.json();

        // Populate the product list in the popup
        products.forEach((product, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = product.name || `Product ${index + 1}`; // Display product name
            listItem.dataset.index = index; // Store index for later use

            // Add click event listener to show product details
            listItem.addEventListener("click", async () => {
                // Show product details in the detail section
                titleElement.textContent = product.name;
                descriptionElement.textContent = product.description;
                priceElement.textContent = product.price;

                productDetailsContainer.style.display = "block"; // Show the detail section

                // Handle the "Upload" button click
                uploadButton.onclick = () => {
                    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                        const activeTab = tabs[0];
                        if (activeTab && activeTab.url.startsWith("http")) {
                            // Inject the content script if not already injected
                            chrome.scripting.executeScript({
                                target: { tabId: activeTab.id },
                                files: ["content.js"]
                            }, () => {
                                // Now send the message to fill the form
                                chrome.tabs.sendMessage(activeTab.id, { action: "fillForm", product: product });
                            });
                        }
                    });
                };
            });

            productListContainer.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error loading products:", error);
    }
});