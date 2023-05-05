// const shows = [
// 	{
// 		id: 1,
// 		title: "Dexter",
// 		year: 2006,
// 		actors: ["Michael C. Hall", "Jennifer Carpenter", "David Zayas"],
// 		description:
// 		"He's smart. He's lovable. He's Dexter Morgan, America's favorite serial killer, who spends his days solving crimes and nights committing them.",
// 		details: {
// 		genre: ["Drama", "Crime", "Mistery"],
// 		reviews: [
// 			{
// 			username: "Supermanfan-13",
// 			content:
// 				"Dexter is easily one of my favorite tv shows of all-time and one of the few shows I can watch all the way through several times over without getting bored",
// 			score: 10,
// 			},
// 		],
// 		},
// 	},
	
// 	{
// 		id: 2,
// 		title: "The Killing",
// 		year: 2011,
// 		actors: ["Mireille Enos", "Mireille Enos", "Billy Campbell"],
// 		description:
// 		"A police investigation, the saga of a grieving family, and a Seattle mayoral campaign all interlock after the body of 17-year-old Rosie Larsen is found in the trunk of a submerged car.",
// 		details: {
// 		genre: ["Crime", "Drama", "Mystery", "Thriller"],
// 		reviews: [
// 			{
// 			username: "jon-stokes21",
// 			content:
// 				"I am not someone who typically watches a lot of the new crime investigation shows, most of them are very similar and repetitious however The Killing was really able to catch and keep my attention from the very beginning.",
// 			score: 9,
// 			},
// 			{
// 			username: "shedaymuch",
// 			content:
// 				"I love a good whodunit series and this one was excellent; kept me guessing at every twist and turn and there was a lot of both. This drama pulled me in and didn't let go until the last scene which had me holding my breath.",
// 			score: 8,
// 			},
// 		],
// 		},
// 	},

// 	{
// 		id: 3,
// 		title: "True Detective",
// 		year: 2014,
// 		actors: ["Matthew McConaughey", "Woody Harrelson", "Vince Vaughn", "Colin Farrell", "Rachel McAdams"],
// 		description:
// 		"Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
// 		details: {
// 		genre: ["Crime", "Drama", "Mystery"],
// 		reviews: [
// 				{
// 				username: "A_Different_Drummer",
// 				content: "If you want to skip this review just jump to the IMDb list of awards and nominations, and you're done. If you want the skinny, let me say this is one of the most perfect dramas ever to grace your flat screen.",
// 				score: 10,
// 				},
// 				{
// 				username: "grantss",
// 				content:
// 					"Last spring (2014) while surfing IMDb for a new show to watch I came across True Detective, a show that had received rave reviews across the board. I'm not a particular fan of crime mysteries, but I figured I'd give the show a shot. After all, IMDb ratings had been pretty reliable in giving me an idea of good a show would be. I thoroughly enjoyed Season 1. In fact, I'd say it's one of the best pieces of television I've ever seen. Yes, one of those rare masterpieces that stick out from the usual assembly of cheesy sitcoms and thrillers.",
// 				score: 7,
// 				},
// 				{
// 				username: "shanghaihorvath",
// 				content: "The first season is an amazing",
// 				score: 10,
// 				},
// 				{
// 				username: "bobzmcishl",
// 				content:
// 					"I intensely dislike series that tidy up all the loose ends of a mystery in the last 30 minutes of a series that lasted 8+ hours and that had little to do with almost all of episodes leading up to the grand finale. In most mysteries the cast of characters are identified early on in the series so we the audience can wonder about their guilt or innocence. No such luck here.",
// 				score: 6,
// 				},
// 			],
// 		},
// 	},
// ];


// Задача 1

// const film = [ 'фильм', 'фильма', 'фильмов' ];

// function getNumFilm(num, film) {
//   let numFilm = [2, 0, 1, 1, 1, 2];
//   return film[(num % 100 > 4 && num % 100 < 20) ? 2 : numFilm [(num % 10 < 5) ? num % 10 : 5]];
// }
// console.log(getNumFilm(1, ["фильм", "фильма", "фильмов"]));

// function getFormFilm(num) {
//   let formFilm = "фильм";
//   if (num % 10 === 1 && num % 100 !== 11) {
//     formFilm = "фильм";
//   } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
//     formFilm = "фильма";
//   } else {
//     formFilm = "фильмов";
//   }
//   return `${num} ${formFilm}`;
// }
// console.log(getFormFilm(1990000000));

// из интернета, не совсем её понял

// function getWordEnding(number, wordForms) {
//   let lastDigit = number.toString().split('').pop(); // преобразуем число в строку, получаем последнюю цифру числа с помощью метода split и pop
//   let lastTwoDigits = number.toString().slice(-2); // получаем последние две цифры числа методом slice
//   let wordForm = wordForms[2];
//   if (lastDigit === '1' && lastTwoDigits !== '11') { // типа проверка последней цифры и последних двух цифр
//     wordForm = wordForms[0];
//   } else if (['2', '3', '4'].includes(lastDigit) && !['12', '13', '14'].includes(lastTwoDigits)) {   // вот тут уже не всё понял, нужно разобрать
//     wordForm = wordForms[1];
//   }
//   return `${number} ${wordForm}`; // ну тут понятно: возвращаекм строку с числом и формой слова
// }
// console.log(getWordEnding(57, ["фильм", "фильма", "фильмов"]));

// if (isNaN(year) || !Number.isInteger(year)) {
//   return "It must be an integer number!";
// }


// Задача 2

// Первый способ

// function filterShows(shows, filterCriteria) {           //принимает массив сериалов shows и объект критериев filterCriteria
//   const { year, title, rating } = filterCriteria;       //деструктурируем объект filterCriteria для получения значений year, title и rating
//   return shows.filter(show => {                         // фильтруем массив shows, проверяем соответствует ли он критериям фильтрации из filterCriteria
//     const isMatchingYear = year ? show.year === year : true;  // если year совпадает, то isMatching будет true
    
//     // теперь сравниваем title из filterCriteria с title из shows с помощью includes(). Приводим всё к нижнему регистру с помощью toLowerCase(). Если всё совпадает, то isMatching будет true
//     const isMatchingTitle = title ? show.title.toLowerCase().includes(title.toLowerCase()) : true; 
//     const isMatchingRating = rating ? show.rating >= rating : true; // теперь rating из filterCriteria с rating из shows. Если rating >=, то isMatching будет true
//     return isMatchingYear && isMatchingTitle && isMatchingRating; // тут возвращается уже новый массив, который содержит соответствующие критерии
//   });
// }

// const filterCriteria = { year: 2011, title: "Kill", score: 6 };
// console.log(filterShows(shows, filterCriteria));


// Второй способ

const shows = [
  { title: "Dexter", year: 2006, rating: 9.1 },
  { title: "The Killing", year: 2011, rating: 8.4 },
  { title: "True Detective", year: 2014, rating: 8.6 },
  { title: "Breaking Bad", year: 2008, rating: 8.3 }
];

function filterShows(shows, filterCriteria) {   // ф-ция принимает два аргумента: массив shows (массив сериалов) и объект filterCriteria (набор критериев, по которым фильтруется)
  const filteredShows = shows.filter(show => {   // собственно, сама фильтрация с помощью метода filter()
    if (filterCriteria.year && show.year !== filterCriteria.year) {   // фильтр по критерию года
      return false;
    }
    if (filterCriteria.title && !show.title.toLowerCase().includes(filterCriteria.title.toLowerCase())) {   // фильтр по критерию названия с помощью includes(). Также приводится к нижнему регистру
      return false;
    }
    if (filterCriteria.rating && show.rating < filterCriteria.rating) {   // фильтр по критерию рейтинга
      return false;
    }
    return true;  // если филтруемый объект соответствует всекм критериям, возвращается true и объект попадает в filteredShows
  });
  return filteredShows;   // возвращаем отфильтрованный массив
}

const filterCriteria = { year: 2014, title: "true", rating: 8 };
const filteredShows = filterShows(shows, filterCriteria);   // это итоговый, уже отфильтрованный массив
console.log(filteredShows);


// Задача 3 (ПРОМТ)

// Первый способ

// function checkExamResult() {
//   let userInput = prompt("Введите число от 0 до 100");

//   if (isNaN(userInput)) { // проверяет userInput число ли это
//     alert ("It must be a number"); 
//   }

//   if (isNaN(userInput) || !Number.isInteger(userInput)) {
//     alert ("It must be an integer number!");
//   }

//   let userNumber = parseInt(userInput);

//   if (userNumber < 0 || userNumber > 100) {
//     alert ("The number must be from 0 to 100");
//   } else if (userNumber >= 0 && userNumber <= 40) {
//     alert ("You failed the exam, try again");
//   } else if (userNumber >= 41 && userNumber <= 70) {
//     alert ("You passed the exam, but you have to attend additional classes");
//   } else {
//     alert ("You passed the exam, get some rest before the next one");
//   }
// }

// console.log(checkExamResult());


// Второй способ

// function checkExamResult() {
//   let userInput = prompt("Введите число от 0 до 100");
//   if (userInput === null) {
//     alert ("Canceled by user");
//   }
//   let userNumber = Number(userInput);
//   if (Number.isNaN(userNumber)) {
//     alert ("It must be a number");
//   }
//   if (!Number.isInteger(userNumber)) {
//     alert ("It must be an integer number!");
//   }
//   if (userNumber < 0 || userNumber > 100) {
//     alert ("The number must be from 0 to 100");
//   }
//   if (userNumber >= 0 && userNumber <= 40) {
//     alert ("You failed the exam, try again");
//   }
//   if (userNumber >= 41 && userNumber <= 70) {
//     alert ("You passed the exam, but you have to attend additional classes");
//   }
//   if (userNumber >= 71 && userNumber <= 100) {
//     alert ("You passed the exam, get some rest before the next one");
//   }
// }

// console.log(checkExamResult());