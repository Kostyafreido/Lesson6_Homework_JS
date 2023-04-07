"use strict";

const myObject = {
    fullname:'mr. Pink',
    age: 35,
    anyInfoAboutYourPlace: {
        country: 'USA',
        city: 'LA',
    },
    hascats: false,
    hobbies: ['drink vodka', 'play balalayka', 'fight with bears'],
    greetting(){
        `Why am I ${this.fullname}?`
    }
}

const copyMyObject = { ...myObject, occupation:{
    work: 'criminal'
}};

console.log(copyMyObject.occupation.work);

const title = document.getElementById('title');
title.innerHTML = copyMyObject.occupation.work;