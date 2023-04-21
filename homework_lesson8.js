// const film = [ 'фильм', 'фильма', 'фильмов' ];

// function getNumFilm(num, film) {
//   let numFilm = [2, 0, 1, 1, 1, 2];
//   return film[(num % 100 > 4 && num % 100 < 20) ? 2 : numFilm [(num % 10 < 5) ? num % 10 : 5]];
// }
// console.log(getNumFilm(1, ["фильм", "фильма", "фильмов"]));

function getFormFilm(num) {
  let formFilm = "фильм";
  if (num % 10 === 1 && num % 100 !== 11) {
    formFilm = "фильм";
  } else if (num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20)) {
    formFilm = "фильма";
  } else {
    formFilm = "фильмов";
  }
  return `${num} ${formFilm}`;
}
console.log(getFormFilm(1001));

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