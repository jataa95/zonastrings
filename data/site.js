// Central content for the site. Swap images/videos here when new work comes in.

export const site = {
  name: "Zona Strings",
  artist: "Echezona Ogudu",
  email: "echezonaogudu@gmail.com",
  instagram: "https://www.instagram.com/zonastrings/",
  handle: "@zonastrings",
};

export const stats = [
  { value: "153K", label: "people following the work" },
  { value: "2.7M", label: "views on a single portrait reel" },
  { value: "152", label: "posts and counting" },
  { value: "100%", label: "fabric, cut by hand" },
];

// Ankara-inspired frame colours used across cards.
export const frames = ["#E4232F", "#1E9E8F", "#F29A2E", "#2C3FD1", "#F4C64E", "#EC5FA0"];

export const works = [
  {
    slug: "pac",
    title: "Pac",
    kind: "Tribute portrait",
    image: "/work/tupac.jpg",
    video: "/video/reveal.mp4",
    w: 720,
    h: 940,
    frame: "#F4C64E",
    note: "Bandana in blue paisley, skin built from a dozen warm wax prints, set against a teal diamond Ankara.",
  },
  {
    slug: "the-family",
    title: "The Family",
    kind: "Family commission",
    image: "/work/family-father.jpg",
    video: "/video/family.mp4",
    w: 360,
    h: 640,
    frame: "#1E9E8F",
    note: "Four faces, one sofa. Every figure traced, cut and layered from cloth, then framed on a green leaf print.",
  },
  {
    slug: "agbada-smile",
    title: "Agbada Smile",
    kind: "Personal portrait",
    image: "/work/agbada.jpg",
    video: "/video/agbada.mp4",
    w: 720,
    h: 1280,
    frame: "#E4232F",
    note: "A wide grin under an embroidered cap. Gold brocade for the fila, rich browns for the beard.",
  },
  {
    slug: "mother-and-daughter",
    title: "Mother & Daughter",
    kind: "Family commission · detail",
    image: "/work/family-mother.jpg",
    w: 360,
    h: 640,
    frame: "#EC5FA0",
    note: "Detail from The Family. A blue frock, braids and a hug, all in fabric.",
  },
  {
    slug: "pac-detail",
    title: "The Eye",
    kind: "Tribute portrait · detail",
    image: "/work/tupac-eye.jpg",
    w: 720,
    h: 1280,
    frame: "#2C3FD1",
    note: "Up close, the face dissolves into pattern: florals, geometry and paisley stacked edge to edge.",
  },
];

export const services = [
  {
    title: "Personal",
    tag: "Your face, in fabric",
    video: "/video/agbada.mp4",
    poster: "/work/agbada.jpg",
    frame: "#2C3FD1",
    text: "A one-of-one portrait of you or someone you love, from a single reference photo.",
  },
  {
    title: "Family",
    tag: "Everyone in one frame",
    video: "/video/family.mp4",
    poster: "/work/family-artist.jpg",
    frame: "#EC5FA0",
    text: "Family pieces, couples, weddings and anniversaries. Several faces, one story.",
  },
  {
    title: "Tribute",
    tag: "Icons & legends",
    video: "/video/studio.mp4",
    poster: "/work/process-tupac-2.jpg",
    frame: "#F29A2E",
    text: "Tribute portraits, gifts and pieces for brands, events and collectors.",
  },
];

export const process = [
  {
    n: "01",
    title: "Trace",
    image: "/work/process-family-1.jpg",
    text: "The reference photo becomes a line drawing on a large white board: features, shadows and edges mapped out.",
  },
  {
    n: "02",
    title: "Cut",
    image: "/work/process-tupac-1.jpg",
    text: "Piles of Ankara are sorted by tone and pattern. Every piece is cut by hand with scissors to fit its spot.",
  },
  {
    n: "03",
    title: "Layer",
    image: "/work/process-tupac-3.jpg",
    text: "Fabric goes down piece by piece. The pattern does the shading, so lights and darks come from the cloth itself.",
  },
  {
    n: "04",
    title: "Reveal",
    image: "/work/tupac.jpg",
    text: "The background print goes in last, the portrait is framed, and the face looks back.",
  },
];
