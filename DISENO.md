# Sistema de diseño «Esmalte»

La web de Alicia Lozano, psicóloga sanitaria especializada en trastornos de la conducta alimentaria. Habla de cariño, de sonrisas y de la paz de quererse a una misma. Lo hace a través de dos cosas de su vida: sus gatos, Maddy y Furi, y la cerámica que hace como aficionada.

**Lo serio** es una rejilla firme de 12 columnas, una sola familia tipográfica, mucho blanco y la información práctica siempre a la vista. **Lo humano** son los bordes de pieza hecha a mano (ninguna esquina es igual a otra), los colores sacados de la cerámica de Ali, su cara en la portada y Maddy y Furi viviendo en las cornisas.

## Principios
1. **Ninguna recta.** Ni bordes, ni líneas, ni marcos geométricos perfectos. Todo lo que delimita algo está dibujado a mano.
2. **La información práctica, siempre a la vista.** Una franja cobalto en todas las páginas con dónde, cuánto y el teléfono.
3. **Ali al frente.** Su cara va arriba, en la portada. Las fotos de cerámica y de los gatos acompañan, no protagonizan.
4. **Detalles y animación, sin infantilizar.** Hay movimiento pequeño y con sentido (una cola, un parpadeo, una foto que aparece). No se usan colores chillones, letra infantil ni dibujos por todas partes.
5. **Un solo color de acción.** El cobalto marca lo que se puede pulsar y los bloques importantes. El celadón es para los momentos tranquilos.
6. **Menos ruido.** Si un dato no ayuda a quien lee, sobra. Por ejemplo, en el blog no hay fecha, minutos de lectura ni categoría encima del título.

## Color
| Token | Valor | Uso |
| --- | --- | --- |
| `--blanco` | `#ffffff` | Fondo de toda la web |
| `--tinta` | `#111111` | Texto, gatos, pie de página, botón oscuro |
| `--gris` | `#555555` | Texto secundario (7,5:1 sobre blanco) |
| `--linea` | `#dddddd` | Detalles sueltos; las líneas de verdad son trazos SVG |
| `--hueso` | `#f3f3f1` | Campos de formulario, tarjetas neutras, fondo de fotos cargando |
| `--cobalto` | `#2b45a6` | Acción, enlaces, franja de información, bloques de color, logo. Blanco encima: 8:1 |
| `--cobalto-hondo` | `#1f3483` | Cobalto al pasar el ratón |
| `--cobalto-suave` | `#dfe4f5` | Texto secundario y palabra clave sobre cobalto (5,9:1); fondo de las motas con número |
| `--celadon` / `--celadon-ink` | `#d3e6dc` / `#2c5e52` | Bloques tranquilos (el panel «Primer paso») y su texto de acento |
| `--ojo` | `#d3d77a` | Solo los ojos de Furi |
| `--error` | `#a8302a` | Mensajes de error del formulario |

Los colores salen de la cerámica de Ali: el cobalto del portalápices «made with love» y el verde del cuenco de flores caladas. No hay fondos crema, naranjas ni degradados. Todas las combinaciones de texto cumplen AA.

## Tipografía
Solo *Schibsted Grotesk*, variable de 400 a 700, servida en local (subconjunto latino, `fontProviders.local()` en `astro.config.mjs`).
- **Titulares** (`--t-h1`, `--t-h2`, `--t-h3`): grandes, en peso 500, con interletrado apretado (de −0,045em a −0,02em) y `text-wrap: balance`.
- **La palabra clave** de cada titular va en `<em>`, que se muestra en cobalto y sin cursiva. Sobre cobalto o tinta se muestra en cobalto suave, y sobre celadón en celadón oscuro.
- **Antetítulos** (`.eyebrow`): en mayúsculas, en 700, con algo de interletrado y en cobalto.
- **Texto**: `--t-base` con interlineado 1,55. La entradilla (`.lead`) va en `--t-lg` con un máximo de 44 caracteres por línea.
- No se usan cursivas decorativas, letra manuscrita ni una segunda familia. La única letra «a mano» es la firma del logo.

## Rejilla y espacio
- `.container`: máximo de 80rem con margen lateral `--gutter`. `.container.narrow` (50rem) se usa para textos largos.
- `.g12`: rejilla de 12 columnas. Las piezas se descolocan a propósito (por ejemplo, el texto en 1–6 y la foto en 8–12) para que no quede todo centrado.
- `.section`: espacio vertical generoso (`--section`, entre 4,5 y 8rem).
- `.bloque`: bloque de color separado del borde de la pantalla, como una pieza apoyada en la página.

## Formas: ninguna recta
Todas las formas se dibujan como SVG dentro del CSS (`global.css`) y se aplican como máscara o como fondo:

| Qué | Cómo | Tokens |
| --- | --- | --- |
| Líneas separadoras | Pincelada de grosor variable que ondula, puesta como `background` en lugar de `border` | `--trazo`, `--trazo-fino`, `--trazo-gris`, `--trazo-blanco`, `--trazo-blanco-fino` |
| Dato clave | Pincelada encima (`.rule`) | `--trazo` |
| Botones, frases, filtros, pestañas, campos | Píldora con los bordes de arriba y abajo ondulados. Las variantes se alternan | `--m-pill-1..3` (máscara), `--o-pill-1..3` y versiones `-cobalto` (contorno) |
| Tarjetas y paneles | Forma irregular, con tres variantes que se alternan para que ninguna vecina se repita | `--m-forma-1..3`, clases `.pieza-1..3`, contornos `--o-forma-*` |
| Bloques de color | La máscara va en un `::before` para que el gato que se sienta encima no se recorte | `.bloque` (cobalto), `.bloque.on-celadon`, `.bloque.b` (otra forma) |
| Franja superior | Borde inferior ondulado | `--m-franja` |
| Pie | Borde superior ondulado | `--m-pie` |
| Retrato y fotos en arco | Recorte dibujado a mano con la cima descentrada, lados que ondulan y una base que no es recta | `--arco`, `--arco-inv` (`clipPath` en `Base.astro`) |
| Números e iconos | Mota redonda irregular | `--mota`, `--mota-b`, `.mota-num` |
| Controles con borde | Contorno a mano sobre una píldora | `.contorno` |

**Foco con teclado:** el control pierde la máscara para que el anillo de foco (3 px cobalto, o blanco sobre fondo oscuro) se vea entero.

## Logo
Firma «AL» de un solo trazo: la A sube, baja, hace un lazo y sigue hasta la L, que termina en una pequeña cola hacia arriba. Va en blanco sobre una mota cobalto de «canto rodado», ancha, con un lado más plano y un hombro más alto, como barro aplastado con la palma (`src/components/Logo.astro`).
- Al lado va el nombre: **Alicia Lozano** — Psicóloga.
- Sobre fondo cobalto, como en el menú móvil, la marca se invierte (`sobre="cobalto"`): mota blanca y trazo cobalto.
- Los iconos de `public/favicon/` llevan la misma marca con el trazo más grueso para que se lea a 16 px.
- Se descartaron una «a» minúscula en cursiva (le faltaba fuerza), un logo puntiagudo y la A con barra en sonrisa. El lienzo de pruebas es «Logo Ali · la A a mano».

## Maddy y Furi (`Silueta.astro`)
Son ilustraciones planas, redondas y dibujadas a mano en SVG. Siempre son decorativas (`aria-hidden`). Tienen la cabeza grande, el cuerpo en forma de pera y una cola que sale por detrás del cuerpo: tienen que ser monas, nunca inquietantes. Están dibujados a propósito y no sacados de bancos de imágenes, para que se parezcan a los gatos de Ali y compartan el trazo del resto de la web.

| Gato | Cómo es | Movimiento |
| --- | --- | --- |
| **Furi** (`gato="furi"`, sentado) | El pequeño, «Furia nocturna». Negro entero, interior de las orejas ciruela oscuro, ojos grandes amarillo verdoso (`--ojo`) con pupila y brillo blanco, y dedos marcados. Es asustadizo y mimoso | Cola nerviosa (más rápida al pasar el ratón por la zona) y parpadeo |
| **Furi asomado** (`pose="asomado"`) | Cabeza y dos patitas apoyadas en un borde | Parpadeo |
| **Maddy** (`gato="maddy"`, tumbada) | La mayor. Gata de esmoquin de pelo largo: negra, con hocico, babero y patitas blancas, mechones en las mejillas, nariz rosa y ojos cerrados de gusto. Es independiente pero cariñosa | Respira y deja la cola colgando de la cornisa, despacio |

**Dónde viven:**
- Furi está sentado sobre el arco del retrato de la portada y sobre el bloque de formación de «Sobre mí».
- Furi se asoma donde da miedo dar el paso: el panel «Primer paso» y el formulario de contacto.
- Maddy duerme sobre el bloque cobalto de especialidades, el pie, las tarifas de servicios, la 404 y el menú móvil.

**Cómo colocarlos:** la base del gato es el borde inferior del elemento. El padre lo coloca con `bottom: calc(100% - 0.4rem)` para que se apoye sobre la cornisa, y la cola puede colgar por debajo.

## Fotos
- El retrato de Ali y las fotos de página van en arco (`--arco`). Las fotos de cerámica y de los gatos acompañan en tamaños pequeños.
- Al entrar en pantalla, las fotos se «despegan del barro»: el recorte se abre suavemente (`data-reveal-foto`).
- Los artículos sin foto llevan una portada tipográfica de color (`Portada.astro`), con la categoría como una etiqueta de taller. El color depende de la categoría (cobalto, celadón o hueso), así que cada tema siempre tiene el mismo.

## Piezas
- **Franja de información** (`InfoBar`): cobalto con borde ondulado, en todas las páginas. Muestra consultas (Tomares · Dos Hermanas · Mairena del Aljarafe · Online), sesión y precio, y teléfono.
- **Cabecera** (`Header`): logo, menú con subrayado de pincelada al pasar el ratón y botón «Pedir cita». En móvil, el menú es un bloque cobalto a pantalla completa con Maddy.
- **Pie** (`Footer`): tinta, con borde superior ondulado. Incluye el aviso de crisis 024 / 112.
- **Llamada final** (`CtaBand`): panel celadón «Primer paso» con Furi asomado.
- **Pasos** (`Steps`), **preguntas frecuentes** (`Faq`), **mapa de consultas** (`Locations`, mapa propio con pestañas en píldora) y **«¿Te suena?»** (`Resonates`, frases en píldora que se pueden marcar).
- **Cabecera de página** (`PageHero`): migas, antetítulo, titular grande, entradilla y, si hay foto, un arco a la derecha.
- **Tarjeta de artículo** (`PostCard`): portada y título, sin fecha ni minutos de lectura.

## Movimiento
- Los bloques aparecen suavemente al hacer scroll (`data-reveal`, escalonados con `--d`).
- Los botones se inclinan un grado y suben un poco al pasar el ratón, y la flecha avanza. En las tarjetas del blog, la portada se acerca un poco y el título se subraya con una pincelada.
- Las páginas cambian con una transición de vista suave.
- Los gatos se animan con `cola`, `cola-lenta`, `parpadeo` y `respira`.
- Con «reducir movimiento» activado, nada se mueve.

## Accesibilidad
- Todas las combinaciones de texto cumplen AA. El foco es visible siempre. Hay un enlace para saltar al contenido.
- Los gatos y los adornos están ocultos para lectores de pantalla.
- La web funciona sin JavaScript (`@media (scripting: none)` muestra lo que se revela al hacer scroll).
- No hay cookies ni analítica.

## Lo que no
- Fondo crema u ocre, Fraunces y Figtree, letra manuscrita y cursivas decorativas.
- Ilustraciones grandes, sellos, cintas y adornos de «hecho a mano» puestos encima. Lo hecho a mano está en la forma de las cosas, no pegado sobre ellas.
- Rectángulos, círculos perfectos, bordes rectos y arcos geométricos.
- Gatos de banco de imágenes o con aspecto inquietante.
- Fechas, minutos de lectura y metadatos que no ayudan a quien lee.
- Testimonios de pacientes (pendiente de confirmar con la asesoría de Ali).
