// ─────────────────────────────────────────────────────────────
//  Reseñas de Google que se muestran en la portada.
//  Solo la inicial del nombre, las estrellas y el texto: sin foto,
//  sin apellidos y sin detalles personales o de salud.
//  Los textos son los originales; […] o … marcan un recorte.
// ─────────────────────────────────────────────────────────────

export const GOOGLE = {
  nota: "5,0",
  total: "más de 40 reseñas",
  url: "https://maps.google.com/?cid=15612491531778791555",
};

export type Resena = { inicial: string; estrellas: 1 | 2 | 3 | 4 | 5; texto: string };

export const RESENAS: Resena[] = [
  {
    inicial: "V",
    estrellas: 5,
    texto:
      "Nunca es fácil responsabilizarse de uno mismo y animarse a pedir ayuda, pero desde el minuto uno Alicia me hizo sentir muy comprendida y acompañada. […] Sus herramientas, ejercicios, sesiones y sobre todo su calidez me han ayudado en buena medida a ser mejor hoy.",
  },
  {
    inicial: "M",
    estrellas: 5,
    texto:
      "Profesional, cercana y respetuosa. Gran capacidad de escucha activa que con el diálogo te ayuda a tomar conciencia de tu situación y establecer herramientas sanas.",
  },
  {
    inicial: "N",
    estrellas: 5,
    texto:
      "Yo que tenía dudas de consultar y más dudas de hacerlo online y cada día estoy más contenta de haberme puesto en las manos de Alicia. Me ha ayudado a salir de un pequeño/gran bache y aunque aún queda mucho que hacer, vamos por el camino.",
  },
  {
    inicial: "C",
    estrellas: 4,
    texto:
      "Alicia es una gran profesional. Se implica mucho conmigo y hace que no me sienta incómoda contando mis cosas con ella. Ella siempre tiene una alternativa o una solución a algún problema que me surja […]. Estoy muy contenta con ella.",
  },
  {
    inicial: "Y",
    estrellas: 5,
    texto:
      "Nunca había ido anteriormente a una consulta de psicología. Iba con miedo y sin saber muy bien si me podía ayudar. Desde el minuto uno se me quitaron esos miedos, sabe escuchar, aborda los problemas desde otro punto de vista. […] En definitiva me ha hecho la vida más fácil y me ha ayudado muchísimo con mis problemas.",
  },
  {
    inicial: "O",
    estrellas: 5,
    texto:
      "Muy profesional pero sin esa frialdad de algunos psicólogos, a mi me da vibes de hermana mayor. Desde que estoy con ella he crecido personalmente muchísimo, estoy muy agradecida de que sea mi psicóloga!!",
  },
  {
    inicial: "A",
    estrellas: 5,
    texto:
      "Lo que más me gusta de sus sesiones es que me hace mucho pensar y descubrir por mis propios medios el por qué de lo que hago para así poder entenderme mejor y poder actuar. Su trato es muy amable…",
  },
  {
    inicial: "J",
    estrellas: 5,
    texto:
      "Es mi primera experiencia como paciente de terapia psicológica y tengo claro que seguiré aquí. Si algo funciona, para qué cambiarlo? Alicia no solo es una excelente profesional sino una persona muy empática y que te hace sentir cómodo.",
  },
];
