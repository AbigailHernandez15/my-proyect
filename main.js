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