# React + Vite

Tarea Semanal 2

Lista de 10 ejercicios en js , para el jueves proximo 21 de septiembre

Cargar Datos Asíncronamente:
    Crea una función cargarDatos que simule la carga de datos de un servidor usando setTimeout. Utiliza async/await para esperar la carga de los datos y luego imprime el resultado.

Manejo de Errores:
    Modifica la función anterior para que maneje errores. Si la carga de datos falla, debe imprimir un mensaje de error.

Múltiples Promesas:
    Crea una función obtenerDatos que tome un arreglo de URLs y utilice Promise.all para cargar múltiples datos de forma concurrente. Utiliza async/await para esperar la resolución de todas las promesas.

Iteración Asíncrona:
    Escribe una función iterar que acepte un número y una función de retorno de llamada. La función de retorno de llamada debería ejecutarse en un bucle async, iterando desde 1 hasta el número proporcionado.

Manejo de Tiempo de Espera:
    Crea una función esperar que tome un número y espere ese número de milisegundos antes de resolver una promesa.

Cadena de Promesas:
    Escribe tres funciones paso1, paso2 y paso3. Cada función debe retornar una promesa que resuelva con un mensaje específico. Utiliza async/await para encadenar estas funciones y mostrar los mensajes en orden.

Concurrencia Limitada:
    Crea una función procesarConcurrencia que tome una matriz de elementos y una función de procesamiento. Debe procesar los elementos en paralelo, pero no más de N elementos a la vez (donde N es un parámetro).

Manejo de Múltiples Promesas con Errores:
    Crea una función promesasConErrores que ejecute varias promesas en paralelo y maneje cualquier error que pueda ocurrir. Asegúrate de que todas las promesas se completen, incluso si una falla.

Retardo Aleatorio:
    Escribe una función retardoAleatorio que tome un número y espere un tiempo aleatorio entre 1 y el número proporcionado antes de resolver una promesa.

Uso de Async/Await con Fetch API:
    Crea una función obtenerUsuario que utilice fetch para obtener datos de un usuario desde una API y devuelve la información del usuario. Utiliza async/await para esperar la respuesta de la API.
