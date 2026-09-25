// ─────────────────────────────────────────────────────────────
//  Datos globales del sitio. Cambia aquí y se actualiza en toda la web.
// ─────────────────────────────────────────────────────────────

export const SITE_NAME = "Alicia Lozano";
export const SITE_TITLE = "Alicia Lozano · Psicóloga especialista en TCA e imagen corporal";
export const SITE_DESCRIPTION =
  "Psicóloga sanitaria especializada en trastornos de la conducta alimentaria, imagen corporal y psiconutrición. Consulta presencial en Tomares, Dos Hermanas y Mairena del Aljarafe, y terapia online.";

export const CONTACT = {
  email: "alicia.lozano.psicologia@gmail.com",
  phone: "+34 655 042 852",
  phoneHref: "tel:+34655042852",
  whatsapp: "https://wa.me/34655042852?text=" +
    encodeURIComponent("Hola Alicia, me gustaría pedir información sobre la terapia."),
  instagram: "https://www.instagram.com/", // TODO: usuario real de Instagram
  instagramHandle: "@alicialozano.psicologia", // TODO
  // PROVISIONAL: número de colegiada real
  license: "Psicóloga General Sanitaria · Col. AN-00000",
};

/**
 * Formulario de contacto.
 * Cloudflare Pages sirve la web como estática, así que el formulario necesita
 * un servicio externo. Opción gratuita recomendada: https://web3forms.com
 * (pega aquí la access key). Si se deja vacío, el formulario abre el correo
 * de la persona con el mensaje ya redactado.
 */
export const FORM_ACCESS_KEY = "";

export type Location = {
  id: string;
  name: string;
  area: string;
  lines: string[];
  maps?: string;
  note: string;
  /** posición en el mapa ilustrado (0–100) */
  x: number;
  y: number;
};

const maps = (q: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;

export const LOCATIONS: Location[] = [
  {
    id: "tomares",
    name: "Tomares",
    area: "Aljarafe",
    lines: ["Glorieta del Agua s/n", "Edificio Center, puerta 2", "Planta 1, local 10"],
    maps: maps("Glorieta del Agua, Edificio Center, Tomares, Sevilla"),
    note: "En pleno Aljarafe, a un paso de Sevilla capital.", // PROVISIONAL
    x: 30,
    y: 36,
  },
  {
    id: "mairena",
    name: "Mairena",
    area: "del Aljarafe",
    lines: ["Polígono PISA, C/ Industria 1", "Edificio Metropol 1", "Planta 3, oficina 19"],
    maps: maps("Calle Industria 1, Edificio Metropol 1, Mairena del Aljarafe"),
    note: "En el Polígono PISA, zona de oficinas tranquila.", // PROVISIONAL
    x: 22,
    y: 60,
  },
  {
    id: "dos-hermanas",
    name: "Dos Hermanas",
    area: "Sevilla sur",
    lines: ["Avenida Gabriel Miró 3", "Edificio Wértice, 2ª planta", "Oficina 7A"],
    maps: maps("Avenida Gabriel Miró 3, Dos Hermanas, Sevilla"),
    note: "Para quienes vivís en el sur de la provincia.", // PROVISIONAL
    x: 74,
    y: 78,
  },
  {
    id: "online",
    name: "Online",
    area: "desde donde estés",
    lines: ["Videollamada segura", "España y resto del mundo", "Mismo horario y tarifa"],
    note: "Solo necesitas un espacio tranquilo, conexión y un rato para ti.",
    x: 88,
    y: 18,
  },
];

export const NAV = [
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/servicios", label: "Cómo te ayudo" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

// PROVISIONAL: tarifas de ejemplo
export const PRICES = [
  { name: "Primera sesión", time: "60 min", price: "60 €", detail: "Nos conocemos, me cuentas qué te trae y valoramos juntas cómo seguir." },
  { name: "Sesión individual", time: "50 min", price: "55 €", detail: "Presencial en cualquiera de las tres consultas u online. Mismo precio." },
  { name: "Bono 4 sesiones", time: "4 × 50 min", price: "200 €", detail: "Para procesos con frecuencia semanal o quincenal. Válido 3 meses." },
];
