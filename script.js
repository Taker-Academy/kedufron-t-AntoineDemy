// Dummy product data
const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
];

// Function to display products
function displayProducts() {
    const productsSection = document.getElementById("products");
    productsSection.innerHTML = ""; // Clear previous content

    products.forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("product");
        productDiv.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productDiv);
    });
}

// Dummy function to add product to cart
function addToCart(productId) {
    alert(`Product with ID ${productId} added to cart!`);
}

// Display products when the page loads
displayProducts();
