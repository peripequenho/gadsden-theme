# Cambios

## 1.2.6

### Ficha de producto
- Precio anterior arriba: el precio anterior va a la mitad del tamaño del actual y la etiqueta queda centrada con el precio actual.

## 1.2.5

### Ficha de producto
- Precio anterior arriba: la etiqueta va a la altura del precio actual, no entre los dos precios.

## 1.2.4

### Ficha de producto
- Barra fija: opción **botón abajo, a todo el ancho** en mobile (foto, título y precio arriba; el botón más grande en su propia fila).
- Precio anterior arriba: la etiqueta queda centrada respecto de los dos precios (sin el margen de abajo de Dawn).

## 1.2.3

### Corregido
- Precio anterior arriba: la etiqueta va al borde derecho del bloque y los dos precios quedan sin espacio entre sí.

## 1.2.2

### Carrusel
- Modo centrado como el código propio: centra la diapositiva activa sin achicar ni apagar las demás (no quedan espacios entre los ítems).
- En un carrusel se reproducen todos los videos a la vista, también las copias del loop, no sólo el de la diapositiva activa.

## 1.2.1

Widgets compartidos con el markup, el CSS y el JS del código propio, sobre sus mismos ajustes (los ids de Gadsden no cambian: una tienda que actualiza conserva lo que tenía).

### Widgets
- **Tabla comparativa**: tabla del código propio (íconos en círculo, columna propia sin pestaña, primera columna al 46 %), con el precio anterior, la etiqueta de característica y la tilde parcial de Gadsden.
- **Pestañas**: botones del código propio (con borde, con sombra o **llenos**, opción nueva) y panel con imagen o video.
- **Testimonios**: tarjetas del código propio (comillas suaves, estrellas, autor con foto).
- **Barra de íconos**: tarjetas del código propio; el ícono queda en 24 px y el tamaño elegido rige para las imágenes.

### Colores propios
- El texto de una sección con colores propios va con el color pleno (antes al 75 %), como en el código propio.

## 1.2.0

Los widgets de landing pasan a ser el código propio original, tal cual (mismo código y mismos ajustes): una tienda que actualiza desde 1.1.x pierde los ajustes de estos widgets.

### Widgets reemplazados por el código propio
- Hero con palabra que rota, Pasos automáticos, Filas de reseñas, Tarjetas recortadas, Videos en coverflow, Garantía y Cierre.
- Tarjetas desplegables, Sellos animados, Pasos con cronómetro, Pósters con texto, Capítulos en video, Muro de reseñas, Aviso y datos legales, Progreso de lectura, Cuestionario y Nota.
- Íconos con contenido.

### Widgets nuevos (código propio)
- Antes y después barrido, Reseñas mini, Objeciones, Skin de la ficha, Tabla versus, Marquesina y Llamado final.

### Estilo y ficha
- Estilo base **Dawn**: la tipografía y los botones de Dawn sin cambios.
- Tamaños del título de la ficha como el código propio (2,4/3, 3/4 y 4/5,2 rem).

### Corregido
- Estilo Clásico: un `h1` con clase `h0` (o un `h4` con otra clase de tamaño) tomaba el tamaño del `h1`.

## 1.1.3

### Corregido
- Ficha de producto: sin cuotas de Shop Pay para mostrar (por ejemplo, fuera de EE. UU.), el contenedor vacío ya no deja un margen debajo del precio.
- Precio anterior arriba: renglones más juntos.

## 1.1.2

### Ficha de producto (bloque Precio)
- **Letra del precio**: la del texto o la de los títulos.
- Orden **precio anterior arriba**, con la etiqueta en una segunda columna (la etiqueta no crece con el tamaño de letra del bloque).
- **Letra de la etiqueta**: la del texto o la de los títulos.

## 1.1.1

### Widgets
- Antes y después: manija **círculo relleno** (toma el color de la línea, flechas con el fondo o el texto de la sección, sombra y se achica al arrastrar). Por defecto sigue "En círculo".

## 1.1.0

Ajustes nuevos, todos apagados o con el valor de antes por defecto: una tienda que actualiza no cambia sola.

### En todas las secciones con título
- **Volanta** (texto chico arriba del título) con color propio opcional.
- **Alineación del encabezado** (izquierda o centro, y aparte en mobile) en las secciones que lo centraban siempre.

### Estilo de esta página (para landings)
- Fuente del texto, etiqueta de oferta de la ficha (fondo, texto, inclinación, mayúsculas), ancho de la página propio y títulos más chicos en mobile.
- **Detalles de las secciones** de esa página: volanta con la letra de los títulos o como etiqueta en las secciones claras, palabras resaltadas con marcador en las claras, texto con el color pleno, borde en tarjetas, fotos y cajas (grosor y opacidad para claras y oscuras), esquinas rectas, trama de puntos y línea entre secciones. "Clara" u "oscura" sale del fondo de cada sección.
- La inclinación y la cursiva de los títulos ya no se aplican a los títulos chicos (desplegables, pasos).

### Secciones de Dawn
- Lista de colecciones: estilo **título sobre la imagen** (posición, velo con color y opacidad, color y tamaño del título por pantalla, flecha, redondeo), **carrusel**, ancho completo sin márgenes e **imagen y título propios** por colección.
- Formulario de contacto: botón de enviar a todo el ancho.
- Contenido desplegable: texto al pie y filas **en caja con borde** (fondo propio, fila abierta con otro color).

### Widgets
- Tabla comparativa: texto **arriba y centrado**, encabezado de la columna de características y tilde **parcial**.
- Cuestionario: opciones en dos líneas y **resumen de las respuestas** en el resultado (no se guarda ni se envía).
- Nota: estilo **Diario** y **temas** al pie.
- Íconos con contenido: bloque **video o imagen** (también al costado de los ítems y a sangre en mobile), **pulso** en los íconos (de la sección o por ícono), ítems **en caja con número** e ítem **destacado**.
- Tarjetas desplegables: frase con la letra de los títulos, tamaño por pantalla, al medio y flecha chica del acento.
- Sellos: **en caja** con la palabra grande, colores alternados, último con marcador, video del ancho de la página y remate como **franja**.
- Pasos con cronómetro: colores propios del panel, cronómetro como **etiqueta**, duración sin borde, **nota en caja** y vista previa del siguiente en mobile.
- Pósters: **primero más ancho**, **alto fijo** en desktop, títulos en el acento, datos como **filas**, desplegable en caja, sello como **franja** y vista previa en mobile.
- Capítulos: proporción propia en desktop, **etapas a la derecha en lista**, etapas numeradas (la activa invertida), "Etapa 1" sobre el video y video a sangre en mobile.
- Muro de reseñas: colores propios y letra de los títulos para las destacadas, proporción fija de las fotos, botón "ver más" lleno con la **cantidad** (`{cantidad}`) y promedio alineado con el encabezado.
- Aviso legal: título del desplegable en el acento y mayúsculas, línea de datos en mayúsculas (también debajo del desplegable) e ícono de línea.
- Hero con palabra que rota: color del resaltado de la promesa y promesa **del tamaño del título**.
- Cinta: reseñas recortadas a 1–3 renglones.

### Corregido
- Tarjetas desplegables, nota, cuestionario, pasos con cronómetro y unión de secciones no pintaban su fondo detrás del contenido con colores propios; el muro de reseñas, el formulario de contacto, las ofertas y regalos por cantidad, las historias y el seguimiento de pedido no respetaban el ancho de la página.
- Cuestionario: "Volver" aparecía en la primera pregunta.

## 1.0.1

- Apoyo por Cafecito: grupo *Gadsden · Apoyá el proyecto* en Configuración del tema y link de soporte en Información del tema. Sólo lo ve quien administra la tienda; en el storefront no cambia nada. Y una serpiente escondida en `layout/theme.liquid`.
- Nuevo estilo de fábrica (preset Clásico): Poppins e Inter, botones con borde de 2 px y redondeo de 6, tarjetas y cajas con sombra, texto centrado en las tarjetas, íconos finos, redes cuadradas, títulos de página centrados, precio de oferta primero y combinaciones de color neutras.
- Tarjetas con "precio de oferta primero": los productos sin oferta mostraban el precio dos veces.
- Nombre de la tienda sin logo: ya no se corta a mitad de palabra y en mobile se achica si no entra.

## 1.0.0

Primera versión estable.

### Estilo y ajustes globales
- **Estilo base** (Configuración del tema > Gadsden · Estilo): *Clásico* (por defecto: tipografía y botones de la línea clásica de Dawn, texto al 90 %) o *Ecom* (títulos compactos, botones y precios en negrita, campos redondeados). Dos estilos de theme listos en `settings_data.json`: *Clásico* y *Ecom*.
- **Carruseles: vista de desktop desde** 750 px (por defecto) o 990 px. Lo siguen los carruseles, las pestañas, el slider de fotos y videos, los testimonios y la franja de logos.
- Color de las flechas transparentes (texto o fondo de su combinación).
- Íconos de Facebook e Instagram redondos o cuadrados. Trazo de los íconos normal o fino.
- Todos los rangos de medidas van de a 1 px (los valores guardados siguen siendo válidos).
- Alineación de los títulos de página (izquierda o centro).
- Imágenes dentro de textos y de bloques de apps alineadas abajo; íconos propios nítidos en pantallas de alta densidad; la cinta acompaña la escala del texto.

### Cabecera y pie
- Menú mobile como panel lateral sobre la página, con título y botón para cerrar.
- Acceso a la cuenta dentro del menú mobile; lupa a la derecha en mobile; ícono de la cuenta opcional en mobile.
- Link de la página actual en negrita.
- Pie: alineación del copyright, tamaño de los íconos de redes, imagen con el redondeo de los medios.

### Tarjetas y páginas
- Tarjetas de producto y de colección "Con velo".
- Tarjeta de producto: orden y color del precio, precio anterior en negrita, peso del título, redondeo a la mitad con dos columnas en mobile.
- Etiquetas: posición propia en las tarjetas de producto, "arriba al centro" sobre el borde, modo sin la etiqueta de oferta.
- Suscripción con botón debajo del campo. Lista de colecciones con rellenos y tamaño del título en desktop.

### Ficha de producto
- Producto destacado con los mismos ajustes de precio y de botones que la ficha.
- Con "info fija", opción para que la galería no acompañe; alto de la imagen grande igual al de la más alta (las miniaturas no saltan); mostrar la primera imagen al abrir.
- Galería mobile de borde a borde corregida; flechas de las miniaturas apagadas cuando entran todas.
- Reseñas con alto adaptable y con los puntos entre las flechas.
- Texto con íconos con relleno distinto arriba y a los costados (también en el carrito, columnas, cinta e imagen con texto).
- Hitos de envío con fechas opcionales; video con redondeo.
- Bloque **Fragmento propio**: muestra `snippets/gad-slot-1.liquid` a `gad-slot-5.liquid` para sumar código a la ficha sin copiar la sección.
- **Ofertas por cantidad**: descuento fijo además del porcentaje, precio y precio anterior escritos a mano o con comodines (`{precio}`, `{precio_anterior}`, `{ahorro}`, `{porcentaje}`, `{precio_unidad}`, `{cantidad}`), pastilla de beneficio, insignia inclinada, color de acento y variante elegida por unidad.

### Carrito
- El ahorro total usa la misma base de precio que la lista de productos.
- Opción para ocultar los centavos cuando son cero; la barra de envío avanza con decimales; el ahorro de cada producto puede ir debajo del precio.
- Opción global para que el "menos" se detenga en el mínimo del producto.
- La nota de la página del carrito queda alineada con los totales.

### Secciones
- Puntos sobre imagen: disposición a todo el ancho con una ventana por punto.
- Testimonios sociales: estilo red social con reacciones, barra de acciones y comentarios.
- Íconos con contenido: disposición en dos columnas.
- Separador de secciones: olas en movimiento, relieve, olas en dos capas (normales y cortas), ondas y diagonal; márgenes con los colores vecinos.
- Slider de fotos y videos: mostrar las diapositivas vacías.
- Barra de íconos: sombra y alto natural de las tarjetas; ícono al costado también en tarjetas angostas; sin caja cuando la tarjeta tiene la misma combinación que la sección.
- Antes y después: texto en caja, etiquetas en las esquinas, manija con triángulos, línea de color propio, imagen "antes" ajustada a su parte y ancho máximo.
- Resultados: título chico y en caja, panel del ancho de su contenido.
- Tabla comparativa: columna propia que sobresale abajo.
- Testimonios: imagen al ras arriba de la tarjeta.
- Filas desplegables con el ícono proporcional al título; carruseles que no recortan la sombra de las tarjetas; flechas a los costados sin altura extra.

## 0.x

Versiones de desarrollo: base Dawn 16.0.0, secciones y bloques de conversión, carrito lateral por bloques, secciones para landings, galería de la ficha con miniaturas editables por pantalla.
