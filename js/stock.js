//CREAMOS LOS OBJETOS

const productos = [
    {
        nombre: "logo",
        id: "logo_001",
        precio: 10.00,  
        tamanio: "grande",      
        descripcion: "Este es un logotipo vectorizado, con formato svg, el mejor formato adaptativo, tiene todas las ventajas de cualquier formato vectorial. Es escalable, pesa poco y permite una definición mayor a tamaños reducidos, mucho mayor que los archivos de bitmap; es un formato abierto, estandar y basado en XML, por lo que funciona en todos los navegadores y está aceptado por todos. El tamaño GRANDE posee las medidas de 1000x 1000 px. El tiempo de entrega  es en días habiles y posee una promoción, siendo que si desea que se entregue luego de 10 días o más, no debera abonar por este servicio, caso contrario, si desea que la entrega sea más pronto, deberá abonar por este servicio un pequeño impuesto. Usted cuenta con una revisión gratis que le hacemos por cortesía, en caso de desear mas de una revisión, debera abonar por ello, cuenta con un precio promocional hasta tres revisiones inclusive, en caso de ser más de tres, deberá acordar el valor con el diseñador",   
        formato: "SVG",
        tiempoDeEntrega: 10, 
        nroDeRevisiones: 1,
        cantidad: 0,
    },
    {
        nombre: "flyer",
        id: "flyer_001",
        precio: 5.00,       
        tamanio: "mediano",        
        descripcion: "El flyer/tarjeta de presentación, contiene un mensaje con el fin de transmitir, vender o promocionar un producto o servicio por parte de empresas, pequeños negocios o incluso organizadores de eventos. Puede ser entregado a mano o compartido a través de las redes sociales para lanzar promociones especiales. Será elaborado en base a sus necesidades. Su tamaño correspondiente a mediano posee las medidas de 500x500 px. El tiempo de entrega  es en días habiles y posee una promoción, siendo que si desea que se entregue luego de 10 días o más, no debera abonar por este servicio, caso contrario, si desea que la entrega sea más pronto, deberá abonar por este servicio un pequeño impuesto. Usted cuenta con una revisión gratis que le hacemos por cortesía, en caso de desear mas de una revisión, debera abonar por ello, cuenta con un precio promocional hasta tres revisiones inclusive, en caso de ser más de tres, deberá acordar el valor con el diseñador",    
        formato: "PNG",
        tiempoDeEntrega: 4,   
        nroDeRevisiones: 2,
        cantidad: 0,
    },

//En forma rectangular y con orientación horizontal que se coloca muchas veces en el tercio superior de la página. existen tres subformatos que varían según sus medidas. Tenemos el megabanner (desde 728 x 90 píxeles a más de 900 píxeles de anchura por 90 de altura), el banner (de 468 x 60 píxeles) y el medio banner ( de 234 x 60 o 234 x 90 píxeles). En el caso del megabanner, éste se ubica con frecuencia en la cabecera de la página Web , lo que lo hace especialmente efectivo por su gran visibilidad.
    {
        nombre: "banner",
        id: "banner_001",
        precio: 3.00, 
        tamanio: "grande",
        descripcion: "El banner es una forma de publicidad en Internet consistente en incluir una pieza publicitaria gráfica dentro de una página web. Su objetivo fundamental es generar reconocimiento de marca y atraer tráfico hacia el sitio web del anunciante que paga por su inclusión. Usted adquirirá un banner de tamaño grande el cual posee las siguientes medidas: desde 900 píxeles de anchura por 90 de altura. El tiempo de entrega  es en días habiles y posee una promoción, siendo que si desea que se entregue luego de 10 días o más, no debera abonar por este servicio, caso contrario, si desea que la entrega sea más pronto, deberá abonar por este servicio un pequeño impuesto. Usted cuenta con una revisión gratis que le hacemos por cortesía, en caso de desear mas de una revisión, debera abonar por ello, cuenta con un precio promocional hasta tres revisiones inclusive, en caso de ser más de tres, deberá acordar el valor con el diseñador",
        formato: "PNG",
        tiempoDeEntrega: 4,
        nroDeRevisiones: 3,
        cantidad: 0,
    },
    {
        nombre: "publicidad",
        id: "publicidad_001",
        precio: 3.00,
        tamanio: "pequenio",
        descripcion: "La publicidad que ofrecemos en este caso, puede ser para que usted imprima o publique y comparta a través de sus redes sociales, con ella podrá informar, difundir y persuadir al consumidor sobre un producto o servicio. El tamaño pequeño cuenta con una medida de 250x250 px. El tiempo de entrega  es en días habiles y posee una promoción, siendo que si desea que se entregue luego de 10 días o más, no debera abonar por este servicio, caso contrario, si desea que la entrega sea más pronto, deberá abonar por este servicio un pequeño impuesto. Usted cuenta con una revisión gratis que le hacemos por cortesía, en caso de desear mas de una revisión, debera abonar por ello, cuenta con un precio promocional hasta tres revisiones inclusive, en caso de ser más de tres, deberá acordar el valor con el diseñador",
        formato: "JPG",
        tiempoDeEntrega: 3,
        nroDeRevisiones: 1,
        cantidad: 0,
    },
    {
        nombre: "disenioEditorial",
        id: "disenioEditorial_001",
        precio: 4.00,
        tamanio: "mediano",
        descripcion: "En cuanto al diseño editorial, realizamos la maquetación y composición de publicaciones tales como revistas, periódicos, libros o arte de tapa de ellos y/o en discos. Su tamaño correspondiente a mediano posee las medidas de 500x500 px. El tiempo de entrega  es en días habiles y posee una promoción, siendo que si desea que se entregue luego de 10 días o más, no debera abonar por este servicio, caso contrario, si desea que la entrega sea más pronto, deberá abonar por este servicio un pequeño impuesto. Usted cuenta con una revisión gratis que le hacemos por cortesía, en caso de desear mas de una revisión, debera abonar por ello, cuenta con un precio promocional hasta tres revisiones inclusive, en caso de ser más de tres, deberá acordar el valor con el diseñador. El valor del diseño editorial varia según lo que usted necesite adquirir, el valor plasmado es para elemento por unidad y/o página",
        formato: "PNG",
        tiempoDeEntrega: 10,
        nroDeRevisiones: 1,
        cantidad: 0,
    },
    {
        nombre: "dibujo",
        id: "dibujo_001",
        precio: 3.00,
        tamanio: "mediano",
        descripcion: "El dibujo que obtendrá será una representación de algo en un medio bi o tridimensional mediante diversas herramientas y/o métodos de ilustración digital. Su tamaño correspondiente a mediano posee las medidas de 500x500 px. El tiempo de entrega  es en días habiles y posee una promoción, siendo que si desea que se entregue luego de 10 días o más, no debera abonar por este servicio, caso contrario, si desea que la entrega sea más pronto, deberá abonar por este servicio un pequeño impuesto. Usted cuenta con una revisión gratis que le hacemos por cortesía, en caso de desear mas de una revisión, debera abonar por ello, cuenta con un precio promocional hasta tres revisiones inclusive, en caso de ser más de tres, deberá acordar el valor con el diseñador",
        formato: "PNG",
        tiempoDeEntrega: 10,
        nroDeRevisiones: 1,
        cantidad: 0,
    },
    {
        nombre: "personajeAnimado",
        id: "personajeAnimado_001",
        precio: 3.00,
        tamanio: "mediano",
        descripcion: "Los personajes animados son aquellas secuencias visuales realizadas en dos dimensiones, el mismo será realizado en base a lo que este buscando, en la reunión previa podremos sacar todas sus dudas y poder armar juntos un prototipo del trabajo a elaborar. Su tamaño correspondiente a mediano posee las medidas de 500x500 px. El tiempo de entrega  es en días habiles y posee una promoción, siendo que si desea que se entregue luego de 10 días o más, no debera abonar por este servicio, caso contrario, si desea que la entrega sea más pronto, deberá abonar por este servicio un pequeño impuesto. Usted cuenta con una revisión gratis que le hacemos por cortesía, en caso de desear mas de una revisión, debera abonar por ello, cuenta con un precio promocional hasta tres revisiones inclusive, en caso de ser más de tres, deberá acordar el valor con el diseñador",
        formato: "PNG",
        tiempoDeEntrega: 10, 
        nroDeRevisiones: 1,
        cantidad: 0,
    },
    {
        nombre: "marca",
        id: "marca_001",
        precio: 3.00,
        tamanio: "mediano",
        descripcion: "Su futura marca tendrá un gran poder de identificación comercial y el conjunto de varios identificadores con los que se relacione, pudiendo ofrecer un producto o servicio en el mercado. Su tamaño correspondiente a mediano posee las medidas de 500x500 px. El tiempo de entrega  es en días habiles y posee una promoción, siendo que si desea que se entregue luego de 10 días o más, no debera abonar por este servicio, caso contrario, si desea que la entrega sea más pronto, deberá abonar por este servicio un pequeño impuesto. Usted cuenta con una revisión gratis que le hacemos por cortesía, en caso de desear mas de una revisión, debera abonar por ello, cuenta con un precio promocional hasta tres revisiones inclusive, en caso de ser más de tres, deberá acordar el valor con el diseñador",
        formato: "PNG",
        tiempoDeEntrega: 3,
        nroDeRevisiones: 1,
        cantidad: 0,
    },
    {
        nombre: "eslogan",
        id: "eslogan_001",
        precio: 2.00,
        tamanio: "mediano",
        descripcion: "Su eslogan será el que utilice su marca para destacarse de la competencia, usualmente hablando de aquella característica que la hace diferente al resto. Tendrá el formato GIF, el cual es una imagen animada hecha a partir de la unión de varias imágenes en una de sola que se van reproduciendo como un vídeo en forma de bucle, este formato suele ser muy atractivo a los ojos del cliente. Su tamaño correspondiente a mediano posee las medidas de 500x500 px. El tiempo de entrega  es en días habiles y posee una promoción, siendo que si desea que se entregue luego de 10 días o más, no debera abonar por este servicio, caso contrario, si desea que la entrega sea más pronto, deberá abonar por este servicio un pequeño impuesto. Usted cuenta con una revisión gratis que le hacemos por cortesía, en caso de desear mas de una revisión, debera abonar por ello, cuenta con un precio promocional hasta tres revisiones inclusive, en caso de ser más de tres, deberá acordar el valor con el diseñador",
        formato: "GIF",
        tiempoDeEntrega: 3,
        nroDeRevisiones: 1,
        cantidad: 0,
    },
    // {
    //     nombre: 
    //     precio:   
    //     tamanio: 
    //     descripcion: 
    //     formato: 
    //     tiempoDeEntrega: 
    //     nroDeRevisiones: 
    // },
];

