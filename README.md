# Gadsden

Theme de Shopify basado en [Dawn](https://github.com/Shopify/dawn) 16.0.0, pensado para tiendas de un producto o de pocos productos que venden con landings: ficha de producto con bloques de conversión, carrito lateral armable por bloques y más de 30 secciones para armar páginas de venta sin tocar código.

Es *white-label*: no trae marca, colores ni textos de ninguna tienda. Todos los ajustes del editor están en castellano.

## Qué agrega a Dawn

**En todas las secciones**
- Colores propios por sección (además de las combinaciones de la paleta), con degradé o imagen de fondo.
- Palabras resaltadas en los títulos (lo que se marca en negrita toma el color de acento).
- Modo carrusel con flechas, puntos, arrastre, pase automático y cantidad por pantalla, por dispositivo.
- Mostrar sólo en mobile o sólo en desktop, y nombre de ancla para que un botón lleve hasta la sección.
- Íconos de Material Symbols por nombre.

**Ficha de producto**
- Galería con miniaturas abajo, a un costado u ocultas, flechas y paginación en mobile.
- Selector de variantes con muestras de color e imagen, ofertas por cantidad, barra de compra fija.
- Bloques: reseñas destacadas, beneficios, separador, urgencia, íconos con texto, imagen, características, estrellas (también estilo Trustpilot), cupón con un clic, productos para sumar, video, sellos de pago, oferta combinada, regalos por cantidad, envío estimado, hitos del envío, botones a secciones, avatares de reseñas, campo personalizado y botón con enlace.

**Carrito lateral**
- Armado por bloques: barra de envío gratis, hitos con premios, cuenta regresiva, regalo automático o condicional, productos sugeridos, cupón, nota, términos para aceptar, sellos de pago, imagen, texto con ícono y código propio.

**Cabecera y pie**
- Link activo resaltado, ícono de carrito a elección, menú mobile con título y menú secundario, mega menú de productos con imágenes.
- Barra de anuncios en carrusel con cupón para copiar y redes, visibilidad por producto.
- Pie con anchos propios, suscripción, producto y colección destacados, medios de pago elegidos.
- Logo secundario y cabecera transparente sobre el hero.

**Secciones nuevas**
Hero de diapositivas con video de fondo, barra de íconos, cinta deslizante (horizontal o vertical), slider de fotos y videos, antes y después, tabla comparativa, pestañas, testimonios, franja de logos, resultados en porcentaje, volver arriba, seguimiento de pedido, popup promocional con cupón, reproductor de música, ofertas combinadas, cambiador de colores, columnas armables, testimonios estilo red social, íconos con contenido, historias, hero con parallax 3D, tabla de planes, puntos sobre imagen, separador de secciones, unión de dos secciones, imagen comprable, reseñas estilo Trustpilot y grilla con ventanas.

**Secciones para landings**
Progreso de lectura, estilo propio de una página, oferta del producto, muro de reseñas, pósters con texto, pasos con cronómetro, pasos automáticos tipo historias, tarjetas desplegables con ventana, sellos animados, capítulos en video, reseñas en dos cintas con avatares, carrusel 3D de videos, garantía con anillo, cierre con resaltador, hero con palabra que rota, tarjetas con imagen recortada, aviso y datos legales, cuestionario con resultado por perfil y nota (advertorial) armada por bloques.

Las animaciones respetan "reducir movimiento" del sistema.

**Ajustes globales**
Etiquetas de oferta con porcentaje, etiquetas propias por tag, estilos de tarjeta, tipografía extra (por enlace), cursor y barra de scroll propios, idiomas de derecha a izquierda, ventana para cambiar de idioma, bloqueo por país y protección de contenido.

Gadsden no trae ningún tipo de seguimiento ni píxel.

## Instalación

Con [Shopify CLI](https://shopify.dev/docs/api/shopify-cli):

```bash
shopify theme push --unpublished --store tu-tienda.myshopify.com
```

O descargá el repositorio como ZIP y subilo desde *Tienda online > Temas > Agregar tema*.

## Desarrollo

```bash
shopify theme dev --store tu-tienda.myshopify.com
shopify theme check
```

`theme check` debe dar lo mismo que Dawn de base (0 errores).

## Licencias

- El código de Dawn se distribuye bajo la licencia de Shopify (`LICENSE-DAWN.md`), que permite usarlo para hacer themes de Shopify.
- Lo que agrega Gadsden está bajo licencia MIT (`LICENSE.md`).
- La fuente Material Symbols (`assets/material-symbols-outlined.woff2`) es de Google, bajo licencia Apache 2.0.
