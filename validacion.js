// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Selecciona el formulario
    const form = document.querySelector('.formcontato__form');

    // Agrega un event listener para el evento submit
    form.addEventListener('submit', function (event) {
        // Detiene el envío del formulario predeterminado
        event.preventDefault();

        // Valida los campos del formulario
        if (validateForm()) {
            // Si la validación es exitosa, puedes enviar el formulario aquí
            form.submit();
        }
    });

    // Función para validar los campos del formulario
    function validateForm() {
        // Obtén los valores de los campos del formulario
        //.trim() eliminar cualquier espacio en blanco al principio y al final del valor
        const name = form.name.value.trim(); 
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        // Verifica si algún campo está vacío
        if (name === '' || email === '' || subject === '' || message === '') {
            alert('Por favor, completa todos los campos del formulario.');
            return false;
        }

        // Verifica si el formato del correo electrónico es válido
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Por favor, ingresa una dirección de correo electrónico válida.');
            return false;
        }

        // Si todas las validaciones pasan, devuelve true
        return true;
    }
});
