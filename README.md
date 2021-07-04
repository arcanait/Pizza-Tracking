## Librerias y herramientas:

1) React router
2) Bootstrap
3) Sweet Alert2
4) React table
5) Reactstrap
6) Recharts
7) React icons
8) Validator
9) firebase
10) redux
11) redux-thunk

## Proceso, problemas y soluciones:

1) Para la creación de las pizzas quise crear una vista amigable y directa, de tal manera que fuera lo más intuitivamente posible para el usuario entender el proceso de la creación, esta vista se compone de varias partes:

    1.1) El encabezado: con el cual se le dice al usuario qué es lo que tiene que hacer en dicha sección.

    1.2) El sub título: este será el que le indique al usuario que tiene que elegir mínimo 15 ingredientes.

    1.3) Mensaje Contador: con esto se le indica al usuario cuantos ingredientes ha ingresado.

    1.4) El precio: Con este se le indica el precio que lleva la pizza cada vez que se ingresan y se suman los precios de los ingredientes.

    1.5) Campo nombre de la pizza: para ingresar el nombre de la pizza, el cual es obligatorio.

    1.6) Lista de ingredientes: para ello se decide crear una lista de ingredientes scrolleable con inputs, indicandole al usuario que se pueden seleccionar varios de estos ingredientes y a su vez indicando el precio de los mismos.

    1.7) Botón siguiente: Con este botón deshabilitado le indicamos al usuario que aún no cumple con los 15 ingredientes necesarios, a su vez se le indica que hay un siguiente paso.

    1.8) Modal formulario de cliente: Con el cual el usuario puede asumir que es el último paso y con este se le obliga a introducir el nombre y el teléfono del cliente.

    1.9) Botón enviar: este es el que le indica a el usuario que se va a enviar el formulario e idealmente se van a guardar sus datos.

    1.9.1) Para guardar los datos de forma persistente en la máquina del usuario se utiliza el local storage, de esta manera se tiene acceso transversalmente de cara a mostrar los datos en el dashboard.

    1.9.2) Como funcionalidad adicional se tiene la acción de un swal, que notificará al usuario cuando se hayan guardados sus datos y posteriormente re direccionará al dashboard para poder consultar la información guardada.

2) Para el dashboard contamos con una viste simple pero informativa, esta está compuesta de tres partes, cada una separada por medio de una CARD:

    2.1) Gráfico de barras doble: El usuario va poder ver la cantidad de pizzas vendidas por mes y su monto monetario respectivo.

    2.2) Gráfico de torta: este únicamente dará la cantidad por mes, sin embargo un gráfico de torta muestra mas trivialmente en qué meses se vendió más y en qué meses se vendió menos.

    2.3) Tabla con la lista de las pizzas: Esta nos dá información más detallada de todas las pizzas que se vendieron historicamente, contando con : NOMBRE DE LA PIZZA, PRECIO, NOMBRE DEL COMPRADOR, TELÉFONO DEL COMPRADOR, FECHA DE COMPRA con su respectivo paginador.


3) FACTORES TÉCNICOS:
    3.1) Para la lista de los ingredientes se decide renderizar de manéra dinámica mendiante un glosario en primera instancia con nombre y precio del ingrediente; esto de cara a que si se desea agregar más ingredientes con su respectivo precio en el futuro, mediante un mecanismo que los guarde en una base de datos, el dueño del software podrá crearlos sin necesidad de ingresar más código.

    3.2) Se crea una pequeña animación para que sea más facil para el usuario saber en qué fila se encuentra y poderla marcar (un poco de UX), caso contrario para los campos en donde se ingresan el nombre y telefono del comprador el cual el botón se habilita solo cuando se ingresan ambos valores.

    3.3) Cuando el usuario no ingresa el nombre, se decide dar la validación cuando se le dá click al borón siguiente, saliendo una retro alimentación del mismo.

    3.4) Se decide crear estilos personalizados en css de cara a la necesidad de manipular mejor los estilos, sin embargo, tambien se hace uso del sistema de grillas de bootstrap y reactstrap(bootstrap).

    3.5) Se construyen componentes aparte para 1, poder ser re utilizados, 2 para que el código pueda ser más mantenible cuando el software crezca más.

    3.6) se hace inclución de documentación y proptypes para de alguna manera "tipar" e indicarle a otros desarrolladores qué tipo de parámetros reciben los distintos componentes, evitando así bugs.


