# Sistema de diseño «Hecho a mano»

La web de Ali es una pieza de taller. **Casi todo es barro, y el esmalte va solo donde importa.** Nada es perfecto, y eso es lo bonito.

## La idea

- **Cerámica de aficionada = quererse a una misma.** Un borde torcido, un esmalte que chorrea, la huella de un dedo… no estropean la pieza: la hacen única. Para una psicóloga de TCA e imagen corporal es casi un manifiesto: *tu cuerpo no es una pieza de fábrica*.
- **Maddy y Furi** son el modelo de la paz de quererse: ocupan su sitio sin pedir perdón, buscan el sol y descansan sin culpa.
  - **Maddy**: la mayor, blanca y negra de pelo largo, moderada, refinada, independiente pero cariñosa. Aparece serena, con *parpadeo lento* (en idioma gato, «confío en ti»). Es la anfitriona: la portada y la siesta del pie de página.
  - **Furi** (Furia Nocturna): el pequeño, negro entero, asustadizo y mimoso con quien acepta. Lo encontraron en el motor de un coche con la pata rota. **Se asoma** antes de acercarse. Aparece donde da miedo dar el paso: el bloque «Primer paso» y el formulario de contacto. También duerme en la 404.
- **Sonrisa**: el perfil de un cuenco visto de lado. Es el subrayado de las palabras importantes.

## Paleta (muestreada de las fotos)

Los colores salen de piezas de Ali y de sus gatos, no de una paleta de moda. Cada esmalte tiene versión «pieza» (fondos e ilustraciones) y versión «ink» (texto, AA ≥ 4,5:1).

| Token | Color | De dónde sale | Uso |
| --- | --- | --- | --- |
| `--bizcocho` | `#f5efe3` | plato sin esmaltar | fondo de la web |
| `--esmalte` | `#fdfbf6` | jarrón del arco | tarjetas, superficies |
| `--barbotina` | `#e9e0d0` | botes de barbotina | secciones alternas |
| `--barro` | `#d9ccb6` | barro crudo | bordes y rellenos suaves |
| `--furi` | `#1d1a1e` | Furi | texto principal (15:1) |
| `--maddy` | `#5c5258` | el negro de Maddy al sol | texto secundario (6,5:1) |
| `--cobalto` | `#2f4aa8` | moteado del portalápices y la tetera | acción, enlaces, énfasis (6,9:1) |
| `--celadon` / `--celadon-claro` / `--celadon-ink` | `#a9cfbf` / `#d6e8df` / `#2f6a5f` | cuenco de flores caladas | calma, paneles, iconos |
| `--ciruela` / `--ciruela-honda` | `#6b4458` / `#4f3242` | rayas de la jarra | secciones oscuras, pie |
| `--naranja` | `#e8913f` | cuadros de la jarra | destellos decorativos (nunca texto) |
| `--lengua` / `--rosa` | `#e48f9a` / `#f2c3c4` | la lengüita de Maddy | cariño, notas |
| `--ojo` | `#d3d77a` | ojos de Maddy y Furi, pie de los saleros | detalles, ojos de los gatos |
| `--mantequilla` | `#f0e08e` | centro de la flor | resaltados sobre oscuro |
| `--polvo` | `#c2d3e1` | mantequera | azul suave |
| `--granada` | `#a8463c` | pétalos de la flor | errores, sin regañar |

Reglas:
- Por su especialidad, nada de verdes «de dieta» ni rojos de alarma.
- El naranja y los tonos claros son decoración; el texto va en `--furi`, `--maddy`, `--cobalto` o una versión `-ink`.
- Sobre `--ciruela-honda`, el texto va en `--bizcocho` y los acentos en `--rosa` o `--mantequilla`.
- Los nombres antiguos (`--oat`, `--ink`, `--terracotta`…) siguen funcionando como alias.

## Tipografía

- **Titulares**: *Fraunces* instanciada con `SOFT=100` y `WONK=1`: una serif blanda y redondeada, con cuerpo de barro.
- **Texto**: *Figtree*, muy legible.
- **A mano** (`.mano`, `--hand`): *Shantell Sans* con rebote. **Solo** para notas, firmas y susurros («No tienes que hacerlo sola ♥»). Nunca en párrafos.
- **Sello** (`.sello`): mayúsculas espaciadas en relieve, como el «MADDY ♥» estampado en su cuenco. Para etiquetas de piezas y firmas pequeñas.

Todas las fuentes están alojadas en la web y recortadas a los caracteres del español.

## Formas

- **Ninguna esquina es igual a otra**: `--radius`, `--radius-lg`, `--radius-xl`, `--radius-pill` son radios ligeramente asimétricos. Los círculos son motas (`52% 48% 55% 45% / …`).
- **Arco** (`--arch`): el jarrón del arco, casi simétrico, nunca del todo. Para retratos.
- **Festón**: el borde ondulado del cuenco de flores caladas, en el borde superior de secciones y del pie.
- **Sonrisa** (`.sonrisa`): subrayado curvo para la palabra clave de un titular. Una por pantalla, como mucho.

## Texturas

- **Moteado** (`.moteado`, `--moteado`, `--moteado-claro`): salpicado de cobalto del portalápices *made with love*. En la cinta, el botón de WhatsApp y el relleno de los botones al pasar el ratón.
- **Chamota** (fondo de la web): puntitos de hierro del barro sin esmaltar, muy suaves.
- **Vichy** (`.vichy`): los cuadros ciruela y naranja de la jarra.
- **Vidriado** (`--vidriado`): un reflejo arriba, como una pieza esmaltada. En los botones.

## Componentes nuevos

- `src/components/art/Gato.astro`: Maddy y Furi en el estilo de los saleros de Ali (cuerpo de huevo esmaltado en negro, cara rayada en el barro, pie amarillo).
  ```astro
  <Gato quien="maddy" />                       <!-- sentada -->
  <Gato quien="furi" pose="asomado" />         <!-- se asoma por un borde -->
  <Gato quien="furi" pose="dormido" label="Furi durmiendo" />
  ```
- `src/components/home/HechoAMano.astro`: la sección manifiesto con las piezas de Ali.

## Fotos

- `public/img/taller/`: piezas de cerámica de Ali.
- `public/img/gatos/`: Maddy y Furi.

## Voz

Cálida, con algún guiño que saque una sonrisa («Esta página se ha quedado dormida»), y seria donde toca: lo clínico se explica con claridad, sin bromas.
