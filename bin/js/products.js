document.addEventListener('DOMContentLoaded', () => {
    const productsContainer = document.getElementById('products');

    // Placeholder JSON data (use actual API endpoint or JSON file in production)
    const apiEndpoint = 'https://jsonplaceholder.typicode.com/photos?_limit=10';

    // Fetch data using AJAX
    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            data.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
            <img src="${product.url}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${(Math.random() * 50 + 20).toFixed(2)}</p>
            <button class="add-to-cart">Add to Cart</button>
          `;
                productsContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});
