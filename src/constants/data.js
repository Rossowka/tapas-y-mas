import { images } from './images';

export const heroContent = {
	'welcome-p1': 'quiquiriquí',
	'welcome-p2': ['tapas', 'wine', 'good time'],
	'primary-action': 'Book a table',
	'secondary-action': 'Order Now',
};

export const aboutContent = {
	'left-heading': 'About Us',
	'left-body-p1':
		'We combined exquisite style, rich flavors and a modern level of comfort to provide a venue alike Spanish warm, welcoming, and tight-knit communities.',
	'left-body-p2':
		'We are hoping our delicious food meeting quality service, will make us a place you want to come back to.',
	'right-heading': 'Our Story',
	'right-body-p1':
		'Created by friends who love spending time together obsessing over food with a glass of wine. Any excuse is good for us to meet up and cook for one another.',
	'right-body-p2':
		'We want to share that experience with you and give you a warm welcome into our family.',
};

export const awards = [
	{
		imgUrl: images.award01,
		title: 'Decanter Award',
	},
	{
		imgUrl: images.award02,
		title: 'European Street Food Awards',
	},
	{
		imgUrl: images.award03,
		title: 'Riesling Weeks Award',
	},
	{
		imgUrl: images.award04,
		title: 'Tripadvisor Award',
	},
];

export const cardItems = [
	{
		imgUrl: images.mainCard,
		title: 'Menu Card',
		positionBottom: -30,
		positionRight: -30,
	},
	{
		imgUrl: images.wineCard,
		title: 'Wine Card',
		positionBottom: -10,
		positionRight: -10,
	},
];

export const wineSpecial = [
	{
		name: 'Sangria',
		price: 10,
		tags: ['red or white | Rioja or Valdepeñas'],
	},
	{
		name: 'Marina Alta aus Alicante',
		price: 20,
		tags: ['white | Moscatel de Alejandria'],
	},
	{
		name: 'Añada Roble',
		price: 22,
		tags: [' red | Manto Negro, Callet, Tempranillo'],
	},
	{
		name: 'Maciá Batle Añada',
		price: 23,
		tags: ['red | Mantonegro, Cabernet Sauvignon, Merlot'],
	},
	{
		name: 'Binigrau Rosat',
		price: 26,
		tags: ['rosé | Manto Negro, Merlot'],
	},
];

export const mealSpecial = [
	{
		name: 'Tabla de quesos de Mahón',
		price: 12,
		tags: ['Platter of cheese specialties from Mahón, Menorca'],
	},
	{
		name: 'Tabla de ibéricos',
		price: 14,
		tags: ['Platter of cured meats and ham'],
	},
	{
		name: 'Flambi Carne',
		price: 22,
		tags: [
			'Beef skewers with onion, bacon, peppers. Served with potatoes and pisto',
		],
	},
	{
		name: 'Paella Mixta',
		price: 34,
		tags: ['with meat, fish and seafood'],
	},
	{
		name: 'Tapas Variation',
		price: 40,
		tags: ['6 choices of tapas from the card'],
	},
];
