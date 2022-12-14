document.addEventListener('DOMContentLoaded', () => {
  // Variables
  const baseDeDatos = [
    {
      id: 1,
      nombre: 'Interaccion con pingรผinos',
      precio: 599,
      imagen: 'https://i.ibb.co/mhHD0jk/interacccion-carrito.jpg',
      ubicacion: 'Acuario Inbursa ๐',
    },
    {
      id: 2,
      nombre: 'General + interaccion',
      precio: 849,
      imagen: 'https://i.ibb.co/ZNxk8tj/general-pinguinos-carrito.jpg',
      ubicacion: 'Acuario Inbursa ๐',
    },
    {
      id: 3,
      nombre: 'Fast Pass',
      precio: 300,
      imagen: 'https://i.ibb.co/59p238c/fast-carrito.jpg',
      ubicacion: 'Acuario Inbursa ๐',
    },
    {
      id: 260,
      nombre: 'Entrada general',
      precio: 260,
      imagen: 'https://i.ibb.co/z8MMs9X/general-carrito.jpg',
      ubicacion: 'Acuario Inbursa ๐',
    },
  ];

  let carrito = [];
  const divisa = '$';
  const DOMitems = document.querySelector('#items');
  const DOMcarrito = document.querySelector('#carrito');
  const DOMtotal = document.querySelector('#total');
  const DOMbotonVaciar = document.querySelector('#boton-vaciar');
  const miLocalStorage = window.localStorage;

  // Funciones

  /**
   * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
   */
  function renderizarProductos() {
    baseDeDatos.forEach((info) => {
      // Estructura
      const miNodo = document.createElement('div');
      miNodo.classList.add('card', 'col-sm-4');
      // Body
      const miNodoCardBody = document.createElement('div');
      miNodoCardBody.classList.add('card-body');
      // Titulo
      const miNodoTitle = document.createElement('h5');
      miNodoTitle.classList.add('card-title');
      miNodoTitle.textContent = info.nombre;
      // Imagen
      const miNodoImagen = document.createElement('img');
      miNodoImagen.classList.add('img-fluid');
      miNodoImagen.setAttribute('src', info.imagen);
      // Precio
      const miNodoPrecio = document.createElement('h4');
      miNodoPrecio.classList.add('card-text');
      miNodoPrecio.textContent = `${divisa}${info.precio}`;
      // Ubicacion
      const miNodoUbicacion = document.createElement('p');
      miNodoUbicacion.classList.add('card-text');
      miNodoUbicacion.textContent = info.ubicacion;
      // Boton
      const miNodoBoton = document.createElement('button');
      miNodoBoton.classList.add('btn', 'btn-primary', 'btn-block');
      miNodoBoton.textContent = 'Agregar';
      miNodoBoton.setAttribute('marcador', info.id);
      miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoUbicacion);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
    });
  }

  /**
   * Evento para aรฑadir un producto al carrito de la compra
   */
  function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'));
    // Actualizamos el carrito
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
  }

  /**
   * Dibuja todos los productos guardados en el carrito
   */
  function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
      // Obtenemos el item que necesitamos de la variable base de datos
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
        // ยฟCoincide las id? Solo puede existir un caso
        return itemBaseDatos.id === parseInt(item);
      });
      // Cuenta el nรบmero de veces que se repite el producto
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
        // ยฟCoincide las id? Incremento el contador, en caso contrario no mantengo
        return itemId === item ? (total += 1) : total;
      }, 0);
      // Creamos el nodo del item del carrito
      const miNodo = document.createElement('li');
      miNodo.classList.add('list-group-item', 'text-right', 'mx-10');
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${divisa}${miItem[0].precio}`;
      // Imagen con tamaรฑo 50px
      const miNodoImagen = document.createElement('img');
      miNodoImagen.classList.add('img-fluid', 'mx-2');
      miNodoImagen.setAttribute('src', miItem[0].imagen);
      miNodoImagen.style.width = '30px';
      miNodo.appendChild(miNodoImagen);
      // Boton de borrar
      const miBoton = document.createElement('button');
      miBoton.classList.add('btn', 'btn-danger', 'mx-2');
      miBoton.textContent = 'X';
      miBoton.style.marginLeft = '1rem';
      miBoton.dataset.item = item;
      miBoton.addEventListener('click', borrarItemCarrito);
      // Mezclamos nodos
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
  }

  /**
   * Evento para borrar un elemento del carrito
   */
  function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
  }

  /**
   * Calcula el precio total teniendo en cuenta los productos repetidos
   */
  function calcularTotal() {
    // Recorremos el array del carrito
    return carrito
      .reduce((total, item) => {
        // De cada elemento obtenemos su precio
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
          return itemBaseDatos.id === parseInt(item);
        });
        // Los sumamos al total
        return total + miItem[0].precio;
      }, 0)
      .toFixed(2);
  }

  /**
   * Varia el carrito y vuelve a dibujarlo
   */
  function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    // Borra LocalStorage
    localStorage.clear();
  }

  function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function cargarCarritoDeLocalStorage() {
    // ยฟExiste un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
      // Carga la informaciรณn
      carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
  }

  // Eventos
  DOMbotonVaciar.addEventListener('click', vaciarCarrito);

  // Inicio
  cargarCarritoDeLocalStorage();
  renderizarProductos();
  renderizarCarrito();
});
