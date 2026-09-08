// Esta es la capa donde se persisten los datos

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let pizzas = [
    {
        id: 1,
        nombre: "Pizza Pepperoni",
        ingredientes: "Queso Mozarella, salsa de tomate y pepperoni"
    },
    {
        id: 2,
        nombre: "Pizza Hawaiana",
        ingredientes: "Queso Mozarella, jamón y piña"
    },
    {
        id: 3,
        nombre: "Pizza Mexicana",
        ingredientes: "Queso Mozarella, chorizo, jalapeño y cebolla"
    }
];

/**
 * Regresa una lista de las pizzas
 * @returns []
 */
export async function obtenerTodasLasPizzasAsync() {
    await sleep(2000);

    return pizzas;
}

/**
 * Regresa la pizza del id buscado o indefinida si no lo encuentra
 * @params (*) id
 */
export async function obtenerPizzaPorIdAsync(id) {
    await sleep(1000);

    const pizza = pizzas.find(x => x.id == id);

    return pizza;
}

/**
 * Agrega una nueva pizza a la lista
 * @params (*) datos
 */
export async function agregarPizzaAsync(datos) {
    await sleep(1000);

    const nuevoId = pizzas.length > 0
        ? Math.max(...pizzas.map(x => x.id)) + 1
        : 1;

    const nuevaPizza = {
        id: nuevoId,
        nombre: datos.nombre,
        ingredientes: datos.ingredientes
    };

    pizzas.push(nuevaPizza);

    return nuevaPizza;
}

/**
 * Actualiza la pizza del id buscado
 * @params (*) id
 * @params (*) datos
 */
export async function actualizarPizzaAsync(id, datos) {
    await sleep(1000);

    const pizza = pizzas.find(x => x.id == id);

    if (!pizza) {
        return undefined;
    }

    pizza.nombre = datos.nombre;
    pizza.ingredientes = datos.ingredientes;

    return pizza;
}

/**
 * Elimina la pizza del id buscado
 * @params (*) id
 */
export async function borrarPizzaAsync(id) {
    await sleep(1000);

    const indice = pizzas.findIndex(x => x.id == id);

    if (indice === -1) {
        return false;
    }

    pizzas.splice(indice, 1);

    return true;
}