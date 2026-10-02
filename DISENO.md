# Sistema de diseño «Esmalte»

**Lo serio** es una rejilla firme de 12 columnas, una sola familia tipográfica, mucho blanco, líneas en lugar de cajas y la información práctica siempre a la vista. **Lo humano** son los bordes de pieza hecha a mano (ninguna esquina es igual a otra), los colores sacados de la cerámica de Ali y Maddy y Furi viviendo en las cornisas.

## Color
| Token | Valor | Uso |
| --- | --- | --- |
| `--blanco` | `#ffffff` | Fondo |
| `--tinta` | `#111111` | Texto, líneas fuertes, siluetas, pie |
| `--gris` | `#555555` | Texto secundario (7,5:1) |
| `--hueso` | `#f3f3f1` | Campos, tarjetas neutras |
| `--cobalto` | `#2b45a6` | Acción y bloques de color (el portalápices «made with love»). Blanco encima: 8:1 |
| `--cobalto-suave` | `#dfe4f5` | Texto secundario sobre cobalto |
| `--celadon` / `--celadon-ink` | `#d3e6dc` / `#2c5e52` | Bloques tranquilos (el cuenco de flores caladas) |
| `--ojo` | `#d3d77a` | Solo los ojos de Furi |

## Tipografía
*Schibsted Grotesk*, de 400 a 700. Titulares grandes, en peso 500 y con interletrado apretado. La palabra clave de cada titular va en `<em>`, que se muestra en cobalto y sin cursiva. Los antetítulos van en mayúsculas, en 700 y en cobalto.

## Formas: ninguna recta
Regla: en la web no hay líneas ni bordes rectos.
- **Líneas separadoras:** pinceladas SVG de grosor variable que ondulan (`--trazo`, `--trazo-fino`, `--trazo-blanco`…), puestas como `background` en lugar de `border`.
- **Píldoras** (botones, frases, filtros, pestañas, campos): máscara SVG con los bordes de arriba y abajo ondulados (`--m-pill-1..3`) y contorno a juego (`--o-pill-1..3`). Las variantes se alternan.
- **Tarjetas y bloques:** máscara SVG irregular (`--m-forma-1..3`, clases `.pieza-1..3`). En los bloques que llevan un gato encima, la máscara va en un `::before` para no recortarlo.
- **Franja superior y pie:** borde ondulado (`--m-franja`, `--m-pie`).
- **Foco con teclado:** el control pierde la máscara para que el anillo de foco se vea entero.

- Bloques de color: `--forma-bloque` y `--forma-bloque-b`, separados del borde de la pantalla (`.bloque`).
- Tarjetas: `--forma-1` a `--forma-4`, que se alternan para que ninguna vecina se repita.
- Retrato y fotos en arco: recortes SVG dibujados a mano (`--arco`, `--arco-inv`, definidos en `Base.astro`): cima descentrada, lados que ondulan, base que no es recta. Botones y campos: `--forma-pill` y `--forma-campo`. Números e iconos: `--mota`.
- Datos clave: línea de 2 px encima (`.rule`).

## Maddy y Furi (`Silueta.astro`)
Ilustraciones planas y redondas, dibujadas a mano en SVG, siempre decorativas. Cabeza grande, cuerpo de pera y cola que sale por detrás del cuerpo: monas, no inquietantes.
- **Furi** (`gato="furi"`) se sienta sobre el retrato de la portada y sobre el bloque de formación. Negro entero, ojos grandes amarillo verdoso con brillo. Mueve la cola (más rápido al pasar el ratón) y parpadea.
- **Furi asomado** (`pose="asomado"`) aparece donde da miedo dar el paso: «Primer paso» y el formulario.
- **Maddy** (`gato="maddy"`) esmoquin: negra con hocico, babero y patitas blancas, mechones en las mejillas y nariz rosa. Duerme con los ojos cerrados sobre la cornisa del bloque azul y del pie, respirando y con la cola colgando.

Con «reducir movimiento» activado, ninguna animación se mueve.

## Movimiento
Los bloques aparecen suavemente al hacer scroll. Los botones cambian de forma al pasar el ratón. Las tarjetas suben un poco. Las frases de «¿Te suena?», el mapa de consultas y las preguntas frecuentes son interactivos.

## Logo
Firma «AL» de un solo trazo, en blanco, sobre una mota cobalto de «canto rodado», con un lado más plano y un hombro más alto (`src/components/Logo.astro`). Sobre fondo cobalto, como en el menú móvil, se invierte: mota blanca y trazo cobalto. Los iconos de `public/favicon/` llevan la misma marca.
