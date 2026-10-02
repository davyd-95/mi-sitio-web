// Espera a que todo el documento HTML esté cargado
document.addEventListener("DOMContentLoaded", () => {
    
    // Selecciona todas las filas de la tabla
    const filas = document.querySelectorAll("tbody tr");

    // Recorre cada fila para agregarle interactividad
    filas.forEach(fila => {
        // Cuando el mouse entra a la fila, cambia el fondo
        fila.addEventListener("mouseenter", () => {
            fila.style.backgroundColor = "#eef2f7";
            fila.style.transition = "background-color 0.2s ease";
        });

        // Cuando el mouse sale de la fila, vuelve a la normalidad
        fila.addEventListener("mouseleave", () => {
            fila.style.backgroundColor = "";
        });
    });

    console.log("¡JavaScript de la tabla comparativa cargado correctamente!");
});
