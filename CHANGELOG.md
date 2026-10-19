# Cambios

## Sin publicar

- **Volanta** (texto chico arriba del título, con color propio opcional) en todas las secciones Gadsden con título: muros y cintas de reseñas, pasos, pósters, sellos, capítulos, carrusel 3D, cuestionario, tabla comparativa, íconos con contenido (también en su bloque Título) y el resto. Vacía, nada cambia.
- Formulario de contacto: botón de enviar a todo el ancho.
- Contenido desplegable: texto al pie, debajo de las filas.
- Muro de reseñas: colores propios (fondo y texto) para las destacadas.
- Hero con palabra que rota: color del resaltado de la promesa.
- Tabla comparativa: posición *Texto arriba, centrado* (título, texto y botón arriba de la tabla también en desktop), encabezado de la columna de características y tilde **parcial** por celda, con su color.
- Cuestionario: opciones en dos líneas (lo que va después de " — " baja a una línea más chica) y resumen de las respuestas en el resultado (no se guarda ni se envía). Corregido: "Volver" ya no aparece en la primera pregunta.
- Nota: estilo **Diario** (portal de noticias: letra de lectura con serifa, volanta en el color del botón, líneas finas en lugar de cajas y sombras; los colores siguen siendo los de la combinación) y chips de **temas** al pie.
- Íconos con contenido: bloque **Video o imagen** (con proporción, ancho máximo y redondeo) que va con el título y el texto, y **pulso** alrededor de los íconos (quieto con "reducir movimiento").
- Lista de colecciones: estilo **Título sobre la imagen** (posición, velo con color y opacidad, color y tamaño del título por pantalla, flecha, redondeo), **carrusel** compartido (bucle, pase automático, por pantalla, de a cuántos, vista previa, flechas y puntos por pantalla), ancho completo sin márgenes en desktop e **imagen y título propios** por colección (también con el estilo del tema).
- Estilo de esta página: fuente del texto y etiqueta de oferta de la ficha (fondo, texto, inclinación y mayúsculas).
- Hero con palabra que rota: **tamaño de la promesa** "como el título", con resaltado de marcador; sin título cargado, la promesa pasa a ser el título.
- Íconos con contenido: pulso también **por ícono** (además del de toda la sección).
- Estilo de esta página: **detalles de las secciones** de Gadsden en esa página: volanta con la fuente de los títulos o como etiqueta en las secciones claras, palabras resaltadas con marcador en las secciones claras, texto con el color pleno, borde en tarjetas, fotos y cajas (grosor y opacidad para secciones claras y oscuras), esquinas rectas, trama de puntos y línea entre secciones. La inclinación y la cursiva de los títulos ya no se aplican a los títulos chicos (desplegables, pasos).
- **Alineación del encabezado** (izquierda o centro, y aparte en mobile) en las secciones que lo centraban siempre.
- Corregido: tarjetas desplegables, nota, cuestionario, pasos con cronómetro y unión de secciones no pintaban su fondo detrás del contenido con colores propios (ahora son bloque).

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
