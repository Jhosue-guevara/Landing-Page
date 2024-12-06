// Inicializa EmailJS
(function() {
    console.log('Inicializando EmailJS...');
    emailjs.init('0itaP7BUuXmMFDv8z'); 
    
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Formulario enviado');

    const loading = document.querySelector('.loading');
    const errorMessage = document.querySelector('.error-message');
    const sentMessage = document.querySelector('.sent-message');

    loading.style.display = 'block';
    errorMessage.style.display = 'none';
    sentMessage.style.display = 'none';
    console.log('Indicadores de estado actualizados');

    const formData = new FormData(this);

    // Mostrar los datos del formulario en la consola
    console.log('Datos del formulario:');
    console.log('Nombre:', formData.get('name'));
    console.log('Correo electrónico:', formData.get('email'));
    console.log('Asunto:', formData.get('subject'));
    console.log('Mensaje:', formData.get('message'));

    emailjs.send('service_k037ijb', 'template_69fxqqt', {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    }).then((response) => {
        console.log('Correo enviado exitosamente:', response.status, response.text);
        loading.style.display = 'none';
        sentMessage.style.display = 'block';
        this.reset(); // Limpia el formulario después de enviar
    }).catch((error) => {
        console.error('Error al enviar el formulario:', error);
        loading.style.display = 'none';
        errorMessage.style.display = 'block';
    });
});
