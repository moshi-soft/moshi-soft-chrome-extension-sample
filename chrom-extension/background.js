// async function fetchProductDetails() {
//     const apiUrl = "http://chromextensionapi.test/api/product-details"; // Replace with your actual API endpoint
//     try {
//         const response = await fetch(apiUrl);
//         if (!response.ok) {
//             throw new Error(`API call failed with status ${response.status}`);
//         }
//         const productDetails = await response.json();
//         console.log("Fetched product details:", productDetails);
//         return productDetails;
//     } catch (error) {
//         console.error("Error fetching product details:", error);
//         return null;
//     }
// }
//
// // Listen for messages from content.js
// chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
//     if (request.action === "getProductDetails") {
//         fetchProductDetails()
//             .then((productDetails) => {
//                 sendResponse(productDetails); // Send the product details back
//             })
//             .catch((error) => {
//                 console.error("Failed to fetch product details:", error);
//                 sendResponse(null); // Send null if there's an error
//             });
//         return true; // Keep the message port open for asynchronous response
//     }
// });
