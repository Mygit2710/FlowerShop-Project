export function getProduct(productId) {
  const matchingProduct = products.find((product) => product.id === productId);

  return matchingProduct;
}

export const products = [
  {
    id: '1',
    type: 'rose',
    image: "background-image: url('images/rose/Glorious-Rose.jpg')",
    name: "Rose 'Glorious'",
    priceCents: 2490,
  },
  {
    id: '2',
    type: 'rose',
    image: "background-image: url('images/rose/Granada.jpg')",
    name: "Rose 'Granada'",
    priceCents: 2599,
  },
  {
    id: '3',
    type: 'rose',
    image: "background-image: url('images/rose/Grandmas-Rose-1.jpg')",
    name: "Rose 'Grandmas'",
    priceCents: 3399,
  },
  {
    id: '4',
    type: 'rose',
    image: "background-image: url('images/rose/Hybrid_Tea_Rose_Duet.jpg')",
    name: 'Hybrid Tea Rose Duet',
    priceCents: 3999,
  },
  {
    id: '5',
    type: 'rose',
    image: "background-image: url('images/rose/Ian-Thorpe-Rose.jpg')",
    name: 'Ian Thorpe Rose',
    priceCents: 4399,
  },
  {
    id: '6',
    type: 'rose',
    image: "background-image: url('images/rose/Lady-X.jpg')",
    name: 'Lady-X',
    priceCents: 3699,
  },
  {
    id: '7',
    type: 'rose',
    image: "background-image: url('images/rose/Old-Port-Rose1.jpg')",
    name: 'Old Port',
    priceCents: 3999,
  },
  {
    id: '8',
    type: 'rose',
    image: "background-image: url('images/rose/Rosa-Brass-Band-Rose.jpeg')",
    name: 'Rosa Brass Band',
    priceCents: 3999,
  },
  {
    id: '9',
    type: 'rose',
    image:
      "background-image: url('images/rose/Rosa-Cabana-Colourful-rose.jpg')",
    name: 'Rosa Cabana Colourful',
    priceCents: 4399,
  },
  {
    id: '10',
    type: 'rose',
    image:
      "background-image: url('images/rose/Rosa-hybrid-tea-Avon-Rose-red-green-scaled.jpg')",
    name: 'Rosa Hybrid Tea Avon',
    priceCents: 3399,
  },
  {
    id: '11',
    type: 'rose',
    image: "background-image: url('images/rose/Rosa-hybrid-Tea-Sonia-.jpg')",
    name: 'Rosa Hybrid Tea Sonia',
    priceCents: 3699,
  },
  {
    id: '12',
    type: 'rose',
    image: "background-image: url('images/rose/Rose-Angel-Face.jpg')",
    name: 'Angel Face',
    priceCents: 2499,
  },
  {
    id: '13',
    type: 'rose',
    image:
      "background-image: url('images/rose/Rose-hybrid-Tea-Peace-rosa.jpg')",
    name: 'Hybrid Tea Peace Rosa',
    priceCents: 3399,
  },
  {
    id: '14',
    type: 'camelia',
    image: "background-image: url('images/camelia/ardoch-02.jpg')",
    name: 'Ardoch',
    priceCents: 1999,
  },
  {
    id: '15',
    type: 'camelia',
    image:
      "background-image: url('images/camelia/Camellia_x_reticulata_Debbie_1.jpg')",
    name: 'Reticulata Debbie',
    priceCents: 1999,
  },
  {
    id: '16',
    type: 'camelia',
    image:
      "background-image: url('images/camelia/Camellia-Grace-Albritton-Camellia-japonica-1.jpg')",
    name: 'Grace Albritton',
    priceCents: 2599,
  },
  {
    id: '17',
    type: 'camelia',
    image:
      "background-image: url('images/camelia/Camellia-japonica-Betty-Ridley.jpg')",
    name: 'Betty Ridley',
    priceCents: 4299,
  },
  {
    id: '18',
    type: 'camelia',
    image:
      "background-image: url('images/camelia/camellia-japonica-Camellia-Nuccios-Gem-1.jpg')",
    name: 'Nuccios Gem',
    priceCents: 2599,
  },
  {
    id: '19',
    type: 'camelia',
    image:
      "background-image: url('images/camelia/Camellia-japonica-Desire-1.jpg')",
    name: 'Desire',
    priceCents: 3999,
  },
  {
    id: '20',
    type: 'camelia',
    image:
      "background-image: url('images/camelia/camellia-japonica-margaret-davies.jpg')",
    name: 'Margaret Davies',
    priceCents: 2599,
  },
  {
    id: '21',
    type: 'camelia',
    image:
      "background-image: url('images/camelia/CAMELLIA-JAPONICA-WATERLILY.jpg')",
    name: 'Waterlily',
    priceCents: 2999,
  },
  {
    id: '22',
    type: 'camelia',
    image:
      "background-image: url('images/camelia/Camellia-Paradise-Blush-2.jpg')",
    name: 'Paradise Blush',
    priceCents: 2599,
  },
  {
    id: '23',
    type: 'camelia',
    image: "background-image: url('images/camelia/CM Hovey.jpg')",
    name: 'CM Hovey',
    priceCents: 1999,
  },
  {
    id: '24',
    type: 'camelia',
    image: "background-image: url('images/camelia/volunteer.jpg')",
    name: 'Volunteer',
    priceCents: 3399,
  },
  {
    id: '25',
    type: 'dahlia',
    image:
      "background-image: url('images/dahlia/Dahlia-Burgundy-Bi-Colour.jpg')",
    name: 'Burgundy Bi Colour',
    priceCents: 1499,
  },
  {
    id: '26',
    type: 'dahlia',
    image: "background-image: url('images/dahlia/Dahlia-Dalaya-Fireball.png')",
    name: 'Dalaya Fireball',
    priceCents: 1499,
  },
  {
    id: '27',
    type: 'dahlia',
    image: "background-image: url('images/dahlia/Dahlia-Dalina Tequila.jpg')",
    name: 'Dalina Tequila',
    priceCents: 1499,
  },
  {
    id: '28',
    type: 'dahlia',
    image: "background-image: url('images/dahlia/Dahlia-Dalina-Cadena.jpg')",
    name: 'Dalina Cadena',
    priceCents: 1499,
  },
  {
    id: '29',
    type: 'dahlia',
    image:
      "background-image: url('images/dahlia/Dahlia-Dalina-Maxi-Salinas.jpg')",
    name: 'Maxi Salinas',
    priceCents: 1799,
  },
  {
    id: '30',
    type: 'dahlia',
    image:
      "background-image: url('images/dahlia/Dahlia-Grande-Castillo-flower-closeup.jpg')",
    name: 'Maxi Castillo',
    priceCents: 1699,
  },
  {
    id: '31',
    type: 'dahlia',
    image: "background-image: url('images/dahlia/Dahlia-Hi-Dolly.jpg')",
    name: 'Hi Dolly Mix',
    priceCents: 599,
  },
  {
    id: '32',
    type: 'dahlia',
    image: "background-image: url('images/dahlia/Dahlia-Lubega-Power-Red.jpg')",
    name: 'Lubega Power Red',
    priceCents: 1699,
  },
  {
    id: '33',
    type: 'dahlia',
    image:
      "background-image: url('images/dahlia/Dahlia-Lubega-Power-Rose.jpg')",
    name: 'Lubega Power Rose',
    priceCents: 1699,
  },
  {
    id: '34',
    type: 'dahlia',
    image:
      "background-image: url('images/dahlia/Dahlia-Lubega-Power-White-Lilac-Frost.jpg')",
    name: 'White Lilac Frost',
    priceCents: 1699,
  },
  {
    id: '35',
    type: 'dahlia',
    image:
      "background-image: url('images/dahlia/Dahlia-Maxi-Tampico-flower-closeup.jpg')",
    name: 'Maxi Tampico',
    priceCents: 1499,
  },
  {
    id: '36',
    type: 'daisy',
    image:
      "background-image: url('images/daisy/Argyranthemum-frutescens-GRANDAISY-PINK-HALO-marguerite-daisy.jpg')",
    name: 'Pink Halo Marguerite',
    priceCents: 1499,
  },
  {
    id: '37',
    type: 'daisy',
    image:
      "background-image: url('images/daisy/Argyranthemum-LaRita-Red-1.jpg')",
    name: 'LaRita Red',
    priceCents: 1299,
  },
  {
    id: '38',
    type: 'daisy',
    image:
      "background-image: url('images/daisy/Bellis-Mars-Rose-Daisy-4-Pot-Main-Photo.jpg')",
    name: 'Bellis Mars Rose',
    priceCents: 699,
  },
  {
    id: '39',
    type: 'daisy',
    image:
      "background-image: url('images/daisy/Bracteantha-Daisy-Fields-Gold-Paper-Daisy-Everlasting-Daisy.jpg')",
    name: 'Fields Gold Paper',
    priceCents: 1799,
  },
  {
    id: '40',
    type: 'daisy',
    image:
      "background-image: url('images/daisy/osteospermum-ecklonis-spider-pink-african-daisy--scaled.jpg')",
    name: 'Spider Pink African',
    priceCents: 1599,
  },
  {
    id: '41',
    type: 'daisy',
    image:
      "background-image: url('images/daisy/Leucanthemum-Shasta-Daisy.jpg')",
    name: 'Leucanthemum Shasta',
    priceCents: 1999,
  },
  {
    id: '42',
    type: 'daisy',
    image: "background-image: url('images/daisy/Osteospermum-3D-Pink.jpg')",
    name: '3D Pink',
    priceCents: 1499,
  },
  {
    id: '43',
    type: 'daisy',
    image:
      "background-image: url('images/daisy/Osteospermum-ecklonis-3D-Purple-African-Daisy-flowers.jpg')",
    name: '3D Purple African',
    priceCents: 999,
  },
  {
    id: '44',
    type: 'daisy',
    image:
      "background-image: url('images/daisy/Osteospermum-ecklonis-African-Daisy-Unicorn-flower.jpg')",
    name: 'African Unicorn',
    priceCents: 799,
  },
  {
    id: '45',
    type: 'daisy',
    image:
      "background-image: url('images/daisy/Osteospermum-ecklonis-Pink-Daisy-Chain-african-daisy.jpg')",
    name: 'Pink Chain',
    priceCents: 1799,
  },
  {
    id: '46',
    type: 'daisy',
    image:
      "background-image: url('images/daisy/Pallenis-Mediterranean-Beach-Daisy-flower.jpg')",
    name: 'Mediterranean Beach',
    priceCents: 1099,
  },
];
