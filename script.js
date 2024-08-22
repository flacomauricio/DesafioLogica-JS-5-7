// Se inicializa la lista de compras y las categorías correspondientes
let listaDeCompras = {
    "Frutas": [],
    "Lácteos": [],
    "Congelados": [],
    "Dulces": [],
    "Otros": []
};

// Crear Función para agregar un alimento a la lista

function agregarAlimento() {
    let alimento = document.getElementById("alimento").value;
    let categoria = document.getElementById("categoria").value;

    // Validar que se ha ingresado un alimento
    if (alimento.trim() === "") {
        alert("Se debe ingresar un alimento a listar, no se registra elemento!");
        return;
    }

    // Agregar el alimento a la categoría seleccionada
    listaDeCompras[categoria].push(alimento);

    // Limpiar el campo de entrada
    document.getElementById("alimento").value = "";
    alert(`${alimento} ha sido agregado a la categoría ${categoria}.`);
}

// Función para mostrar la lista de compras
function mostrarLista() {
    let listaHTML = "<h2>Lista de Compras:</h2>";

    for (let categoria in listaDeCompras) {
        if (listaDeCompras[categoria].length > 0) {
            listaHTML += `<strong>${categoria}:</strong> ${listaDeCompras[categoria].join(", ")}<br>`;
        }
    }

    document.getElementById("listaDeCompras").innerHTML = listaHTML;
}