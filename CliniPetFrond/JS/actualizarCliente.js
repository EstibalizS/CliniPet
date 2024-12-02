document.getElementById("formActualizarCliente").addEventListener("submit", async function(event) {
    event.preventDefault();

    // Obtén los valores del formulario
    const cedula = document.getElementById("cedula").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const direccion = document.getElementById("direccion").value;

    // Validar que los campos no estén vacíos
    if (!cedula || !telefono || !email || !direccion) {
        document.getElementById("message").innerHTML = "Todos los campos son obligatorios.";
        return;
    }

    try {
        // Llamar a la API para actualizar el cliente
        const response = await fetch(`https://tuservidor/api/actualizarcliente/actualizar?cedula=${cedula}&telefono=${telefono}&email=${email}&direccion=${direccion}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById("message").innerHTML = `<span style="color: green;">${result.message}</span>`;
        } else {
            document.getElementById("message").innerHTML = `<span style="color: red;">${result.error}</span>`;
        }
    } catch (error) {
        console.error(error);
        document.getElementById("message").innerHTML = "Hubo un error al intentar actualizar la información. Intenta nuevamente.";
    }
});
