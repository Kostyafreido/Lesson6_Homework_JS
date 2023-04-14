const series = [
	{
		id: 1,
		title: "Dexter",
		year: 2006,
		actors: ["Michael C. Hall", "Jennifer Carpenter", "David Zayas"],
		description:
		"He's smart. He's lovable. He's Dexter Morgan, America's favorite serial killer, who spends his days solving crimes and nights committing them.",
		details: {
		genre: ["Drama", "Crime", "Mistery"],
		reviews: [
			{
			username: "Supermanfan-13",
			content:
				"Dexter is easily one of my favorite tv shows of all-time and one of the few shows I can watch all the way through several times over without getting bored",
			score: 10,
			},
		],
		},
	},

	{
		id: 2,
		title: "The Killing",
		year: 2011,
		actors: ["Mireille Enos", "Mireille Enos", "Billy Campbell"],
		description:
		"A police investigation, the saga of a grieving family, and a Seattle mayoral campaign all interlock after the body of 17-year-old Rosie Larsen is found in the trunk of a submerged car.",
		details: {
		genre: ["Crime", "Drama", "Mystery", "Thriller"],
		reviews: [
			{
			username: "jon-stokes21",
			content:
				"I am not someone who typically watches a lot of the new crime investigation shows, most of them are very similar and repetitious however The Killing was really able to catch and keep my attention from the very beginning.",
			score: 9,
			},
			{
			username: "shedaymuch",
			content:
				"I love a good whodunit series and this one was excellent; kept me guessing at every twist and turn and there was a lot of both. This drama pulled me in and didn't let go until the last scene which had me holding my breath.",
			score: 8,
			},
		],
		},
	},

	{
		id: 3,
		title: "True Detective",
		year: 2014,
		actors: ["Matthew McConaughey", "Woody Harrelson", "Vince Vaughn", "Colin Farrell", "Rachel McAdams"],
		description:
		"Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
		details: {
		genre: ["Crime", "Drama", "Mystery"],
		reviews: [
				{
				username: "A_Different_Drummer",
				content: "If you want to skip this review just jump to the IMDb list of awards and nominations, and you're done. If you want the skinny, let me say this is one of the most perfect dramas ever to grace your flat screen.",
				score: 10,
				},
				{
				username: "grantss",
				content:
					"Last spring (2014) while surfing IMDb for a new show to watch I came across True Detective, a show that had received rave reviews across the board. I'm not a particular fan of crime mysteries, but I figured I'd give the show a shot. After all, IMDb ratings had been pretty reliable in giving me an idea of good a show would be. I thoroughly enjoyed Season 1. In fact, I'd say it's one of the best pieces of television I've ever seen. Yes, one of those rare masterpieces that stick out from the usual assembly of cheesy sitcoms and thrillers.",
				score: 7,
				},
				{
				username: "shanghaihorvath",
				content: "The first season is an amazing",
				score: 10,
				},
				{
				username: "bobzmcishl",
				content:
					"I intensely dislike series that tidy up all the loose ends of a mystery in the last 30 minutes of a series that lasted 8+ hours and that had little to do with almost all of episodes leading up to the grand finale. In most mysteries the cast of characters are identified early on in the series so we the audience can wonder about their guilt or innocence. No such luck here.",
				score: 6,
				},
			],
		},
	},
];

// console.log(series);

// for (let i = 0; i <= series.length - 1; i++) {
// 	console.log(series[i]); 
// 	console.log(`The ${series[i].year} film ${series[i].title}, ${series[i].description}. This movie starred ${series[i].actors} and etc. It was rated by ${series[i].details.reviews.length} users, with a total rating of 9. Register to watch this ${series[i].details.genre}.`)
// }

// series.forEach((element) => {
// 	console.log(`The ${element.year} film ${element.title}, ${element.description}. This movie sterred ${element.actors} end etc. It was rated by ${element.details.reviews.length} users, with a total rating of 9. Register to watch this ${element.details.genre}.`);
// })

series.forEach(function(element) {
	console.log(`The ${element.year} film ${element.title}, ${element.description}. This movie sterred ${element.actors} end etc. It was rated by ${element.details.reviews.length} users, with a total rating of 9. Register to watch this ${element.details.genre}.`);
});

// const getSeriesByYear = (series, year) => {
// 	return
// }