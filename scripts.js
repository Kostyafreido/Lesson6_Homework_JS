const User = {
	fullName:'mr. Pink',
	age: 35,
	anyInfoAboutYourPlace: {
		country: 'USA',
		city: 'LA',
	},
	hasCats: false,
	hobbies: ['drink vodka', 'play balalayka', 'fight with bears'],
	greeting() {
		console.log(this);
		return	`Why am I ${this.fullName}?`
	},
};

const copyUser = { ...User, occupation:{
  work: 'criminal'
}};

console.log(copyUser.occupation.work);
console.log(User.greeting());

const title = document.getElementById('title');
title.innerHTML = copyUser.occupation.work;