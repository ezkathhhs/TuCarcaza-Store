// Este archivo contiene todas las funciones JavaScript para el proyecto.

// --- Datos de Carcasas (GLOBAL para poder ser usado por ambas páginas) ---
const carcasasData = [
    {
        id: 1,
        nombre: 'Carcasa Transparente Ultra Fina',
        imagen: 'https://via.placeholder.com/500x400?text=Carcasa+Transparente',
        descripcion: 'Protección discreta que mantiene el diseño original de tu teléfono. Fabricada con TPU flexible de alta calidad que no amarillea. Proporciona una excelente absorción de impactos y un agarre cómodo.',
        precio: '12.990',
        material: 'TPU Flexible',
        compatibilidad: 'iPhone 15, Samsung Galaxy S24, Google Pixel 8',
        colores: ['Transparente'],
        caracteristicas: ['Ultra fina', 'Anti-amarilleo', 'Protección básica', 'Ligera']
    },
    {
        id: 2,
        nombre: 'Carcasa Reforzada Antigolpes',
        imagen: 'https://via.placeholder.com/500x400?text=Carcasa+Antigolpes',
        descripcion: 'Diseño robusto con esquinas reforzadas para máxima protección contra caídas y golpes severos. Ideal para aventureros y quienes necesitan una seguridad extra para su dispositivo.',
        precio: '19.990',
        material: 'Policarbonato y TPU',
        compatibilidad: 'iPhone 15 Pro Max, Samsung Galaxy S24 Ultra, Google Pixel 8 Pro',
        colores: ['Negro', 'Verde Militar'],
        caracteristicas: ['Alta resistencia a impactos', 'Esquinas reforzadas', 'Protección de grado militar', 'Diseño ergonómico']
    },
    {
        id: 3,
        nombre: 'Carcasa de Silicona Colores Pastel',
        imagen: 'https://via.placeholder.com/500x400?text=Carcasa+Silicona+Pastel',
        descripcion: 'Suave al tacto y con un acabado mate, disponible en una variedad de colores pastel vibrantes. Proporciona un agarre antideslizante y protección contra arañazos diarios.',
        precio: '15.490',
        material: 'Silicona Líquida',
        compatibilidad: 'iPhone 14, Samsung Galaxy A55, Xiaomi Redmi Note 13',
        colores: ['Rosa Pastel', 'Azul Cielo', 'Menta', 'Lila'],
        caracteristicas: ['Tacto suave', 'Antihuellas', 'Antideslizante', 'Fácil de limpiar', 'Colores vibrantes']
    },
    {
        id: 4,
        nombre: 'Carcasa de Cuero Premium',
        imagen: 'https://via.placeholder.com/500x400?text=Carcasa+Cuero',
        descripcion: 'Elegancia y sofisticación con nuestra carcasa de cuero genuino. Protege tu dispositivo con estilo, desarrollando una pátina única con el tiempo que le dará un carácter distintivo.',
        precio: '25.000',
        material: 'Cuero Genuino',
        compatibilidad: 'iPhone 15 Pro, Samsung Galaxy S24+, Google Pixel 8 Pro',
        colores: ['Marrón', 'Negro', 'Azul Oscuro'],
        caracteristicas: ['Acabado premium', 'Protección elegante', 'Desarrolla pátina', 'Sensación de lujo']
    },
    {
        id: 5,
        nombre: 'Carcasa con Diseño Geométrico',
        imagen: 'https://via.placeholder.com/500x400?text=Carcasa+Geometrica',
        descripcion: 'Dale un toque moderno a tu teléfono con esta carcasa de patrón geométrico único. Combina estilo y protección, ofreciendo una alta resistencia a arañazos y un agarre seguro.',
        precio: '14.000',
        material: 'TPU y Policarbonato',
        compatibilidad: 'Todos los modelos recientes de iPhone y Samsung',
        colores: ['Negro/Blanco', 'Azul/Gris', 'Rosado/Dorado'],
        caracteristicas: ['Diseño moderno', 'Antihuellas', 'Resistente a arañazos', 'Agarre mejorado']
    }
];


// --- Funciones para index.html ---

// Función 1: Mensaje de Bienvenida Dinámico
function mostrarMensajeBienvenida() {
    const elementoMensaje = document.getElementById('mensaje-bienvenida');
    if (elementoMensaje) { // Verificar si el elemento existe en la página actual
        const horaActual = new Date().getHours();
        let mensaje = '';

        if (horaActual < 12) {
            mensaje = '¡Buenos días! Bienvenido a Carcasas Store.';
        } else if (horaActual < 18) {
            mensaje = '¡Buenas tardes! Explora nuestras ofertas.';
        } else {
            mensaje = '¡Buenas noches! Encuentra tu carcasa ideal.';
        }
        elementoMensaje.textContent = mensaje;
    }
}

// Función 2: Mostrar/Ocultar Contenido (Sección "Acerca de Nosotros")
function configurarToggleAbout() {
    const toggleButton = document.getElementById('toggle-about');
    const aboutContent = document.getElementById('about-content');
    const arrow = document.getElementById('arrow');

    if (toggleButton && aboutContent && arrow) { // Verificar si los elementos existen
        toggleButton.addEventListener('click', () => {
            // Alterna la clase 'hidden' de Tailwind CSS para mostrar/ocultar
            aboutContent.classList.toggle('hidden');
            // Cambia la dirección de la flecha
            if (aboutContent.classList.contains('hidden')) {
                arrow.innerHTML = '&#9660;'; // Flecha hacia abajo
            } else {
                arrow.innerHTML = '&#9650;'; // Flecha hacia arriba
            }
        });
    }
}

// Función 3: Manipulación de Array y Renderizado de Carcasas en la página principal
function cargarCarcasasDestacadas() {
    const contenedorCarcasas = document.getElementById('carcasas-destacadas');
    if (contenedorCarcasas) { // Verificar si el elemento existe
        carcasasData.forEach(carcasa => {
            const carcasaDiv = document.createElement('div');
            carcasaDiv.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden');

            carcasaDiv.innerHTML = `
                <img src="${carcasa.imagen}" alt="${carcasa.nombre}" class="w-full card-image">
                <div class="p-4">
                    <h3 class="text-xl font-semibold mb-2">${carcasa.nombre}</h3>
                    <p class="text-gray-600 text-sm mb-4">${carcasa.descripcion.substring(0, 100)}...</p>
                    <div class="flex justify-between items-center">
                        <span class="text-blue-700 font-bold text-lg">$${carcasa.precio}</span>
                        <a href="detalles.html?id=${carcasa.id}" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Ver Detalles</a>
                    </div>
                </div>
            `;
            contenedorCarcasas.appendChild(carcasaDiv);
        });
    }
}


// --- Funciones para detalles.html ---

// Función Adicional (6): Obtener parámetro de la URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Función Adicional (7): Renderizar detalles de una carcasa específica
function renderizarDetalleCarcasa() {
    const carcasaId = parseInt(getQueryParam('id')); // Obtener el ID de la URL y convertirlo a número
    const carcasa = carcasasData.find(c => c.id === carcasaId); // Buscar la carcasa en el array

    const container = document.getElementById('carcasa-detalle-container');
    const errorMsg = document.getElementById('error-carcasa-no-encontrada');
    const pageTitle = document.getElementById('detalle-titulo-pagina');

    if (container && errorMsg && pageTitle) { // Asegurarse de que los elementos existen
        if (carcasa) {
            errorMsg.style.display = 'none'; // Ocultar mensaje de error
            pageTitle.textContent = `${carcasa.nombre} - Carcasas Store`; // Actualizar título de la página

            container.innerHTML = `
                <h2 class="text-3xl font-bold mb-6 text-center text-blue-700">${carcasa.nombre}</h2>
                <div class="flex flex-col md:flex-row gap-6">
                    <div class="md:w-1/2">
                        <img src="${carcasa.imagen}" alt="${carcasa.nombre}" class="w-full rounded-lg shadow-sm">
                    </div>
                    <div class="md:w-1/2">
                        <h3 class="text-2xl font-semibold mb-2">${carcasa.nombre}</h3>
                        <p class="text-gray-700 mb-4">${carcasa.descripcion}</p>
                        <ul class="list-disc list-inside text-gray-600 mb-4">
                            <li>**Material:** ${carcasa.material}</li>
                            <li>**Compatibilidad:** ${carcasa.compatibilidad}</li>
                            <li>**Colores disponibles:** ${carcasa.colores.join(', ')}</li>
                            <li>**Características:** ${carcasa.caracteristicas.join(', ')}</li>
                        </ul>
                        <p class="text-blue-700 font-bold text-3xl mb-6">$${carcasa.precio}</p>
                        <button class="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition duration-300 w-full md:w-auto">Agregar al Carrito</button>
                    </div>
                </div>
            `;
        } else {
            // Mostrar mensaje de error si la carcasa no se encuentra
            container.innerHTML = ''; // Limpiar cualquier contenido previo
            errorMsg.style.display = 'block';
            pageTitle.textContent = `Carcasa no encontrada - Carcasas Store`;
        }
    }
}


// --- Funciones para contacto.html ---

// Función 5: Validación de Formulario
function validarFormulario(event) {
    // Solo ejecutar si estamos en la página de contacto y el formulario existe
    const form = document.getElementById('contact-form');
    if (!form) return; // Si el formulario no existe, no hacemos nada

    event.preventDefault(); // Previene el envío por defecto del formulario

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const asunto = document.getElementById('asunto');
    const mensaje = document.getElementById('mensaje');

    let isValid = true;

    // Limpiar mensajes de error previos
    document.getElementById('error-nombre').textContent = '';
    document.getElementById('error-email').textContent = '';
    document.getElementById('error-asunto').textContent = '';
    document.getElementById('error-mensaje').textContent = '';
    document.getElementById('form-success-message').classList.add('hidden'); // Ocultar mensaje de éxito

    // Validación de Nombre
    if (nombre.value.trim() === '') {
        document.getElementById('error-nombre').textContent = 'El nombre es obligatorio.';
        isValid = false;
    }

    // Validación de Email (formato básico)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === '') {
        document.getElementById('error-email').textContent = 'El correo electrónico es obligatorio.';
        isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
        document.getElementById('error-email').textContent = 'El formato del correo electrónico no es válido.';
        isValid = false;
    }

    // Validación de Asunto
    if (asunto.value.trim() === '') {
        document.getElementById('error-asunto').textContent = 'El asunto es obligatorio.';
        isValid = false;
    }

    // Validación de Mensaje
    if (mensaje.value.trim() === '') {
        document.getElementById('error-mensaje').textContent = 'El mensaje es obligatorio.';
        isValid = false;
    }

    if (isValid) {
        // Si todo es válido, puedes simular el envío del formulario
        console.log('Formulario enviado:', {
            nombre: nombre.value,
            email: email.value,
            asunto: asunto.value,
            mensaje: mensaje.value
        });
        document.getElementById('form-success-message').classList.remove('hidden'); // Mostrar mensaje de éxito
        form.reset(); // Limpiar el formulario
        // Aquí iría el código para enviar los datos a un servidor real
    }
}


// --- Ejecución de funciones al cargar el DOM ---
document.addEventListener('DOMContentLoaded', () => {
    // Detectar la página actual para ejecutar solo las funciones relevantes
    const currentPage = window.location.pathname.split('/').pop();

    if (currentPage === 'index.html' || currentPage === '') { // Para index.html o la raíz
        mostrarMensajeBienvenida(); // Función 1
        configurarToggleAbout(); // Función 2
        cargarCarcasasDestacadas(); // Función 3 (que contiene la Función 4)
    } else if (currentPage === 'detalles.html') {
        renderizarDetalleCarcasa(); // Función Adicional (7)
    } else if (currentPage === 'contacto.html') {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', validarFormulario); // Función 5
        }
    }
});