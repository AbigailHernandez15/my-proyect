function openModal(title, description, imageSrc) {
    document.getElementById('modalTitle').textContent = title; // Establece el título del modal
    document.getElementById('modalDescription').textContent = description; // Establece la descripción del modal
    document.getElementById('modalImage').src = imageSrc; // Establece la fuente de la imagen en el modal
    document.getElementById('modal').classList.remove('hidden'); // Muestra el modal
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden'); // Oculta el modal
}




function cambiarPagina() {
    document.getElementById('pagina1').classList.add('hidden');
    document.getElementById('pagina2').classList.remove('hidden');
}

function volver() {
    document.getElementById('pagina2').classList.add('hidden');
    document.getElementById('pagina1').classList.remove('hidden');
}

// captura formulario 

const form = document.getElementById('crudForm');
const dataTable = document.getElementById('dataTable');
const products = [
    { name: 'Producto 1', price: 19.99, image: 'https://via.placeholder.com/300' },
    { name: 'Producto 2', price: 29.99, image: 'https://via.placeholder.com/300' },
    { name: 'Producto 3', price: 39.99, image: 'https://via.placeholder.com/300' },
    { name: 'Producto 4', price: 49.99, image: 'https://via.placeholder.com/300' },
    { name: 'Producto 5', price: 59.99, image: 'https://via.placeholder.com/300' }
];

const productList = document.getElementById('product-list');

// Cargar productos
function loadProducts(products) {
    productList.innerHTML = '';
    products.forEach(product => {
        const productCard = `
            <div class="bg-purple-300 rounded-lg shadow-md overflow-hidden">
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-bold">${product.name}</h3>
                    <p class="text-gray-600">$${product.price.toFixed(2)}</p>
                    <button class="mt-2 w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600 transition">Agregar a favoritos</button>
                </div>
            </div>
        `;
        productList.innerHTML += productCard;
    });
}

loadProducts(products);

// Funcionalidad de búsqueda
document.getElementById('search').addEventListener('input', function(event) {
    const searchTerm = event.target.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    loadProducts(filteredProducts);
});

// Funcionalidad de desplazamiento hacia arriba
const scrollToTopBtn = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

