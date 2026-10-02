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

## Formas
- Bloques de color: `--forma-bloque` y `--forma-bloque-b`, separados del borde de la pantalla (`.bloque`).
- Tarjetas: `--forma-1` a `--forma-4`, que se alternan para que ninguna vecina se repita.
- Retrato y fotos en arco: recortes SVG dibujados a mano (`--arco`, `--arco-inv`, definidos en `Base.astro`): cima descentrada, lados que ondulan, base que no es recta. Botones y campos: `--forma-pill` y `--forma-campo`. Números e iconos: `--mota`.
- Datos clave: línea de 2 px encima (`.rule`).

## Maddy y Furi (`Silueta.astro`)
Son siluetas negras, sin cara dibujada, siempre decorativas.
- **Furi** (`gato="furi"`) se sienta sobre el retrato de la portada y sobre el bloque de formación. Mueve la cola, parpadea y gira una oreja.
- **Furi asomado** (`pose="asomado"`) aparece donde da miedo dar el paso: «Primer paso» y el formulario.
- **Maddy** (`gato="maddy"`) duerme sobre la cornisa del bloque azul y del pie, respirando y con la cola colgando.

Con «reducir movimiento» activado, ninguna animación se mueve.

## Movimiento
Los bloques aparecen suavemente al hacer scroll. Los botones cambian de forma al pasar el ratón. Las tarjetas suben un poco. Las frases de «¿Te suena?», el mapa de consultas y las preguntas frecuentes son interactivos.
