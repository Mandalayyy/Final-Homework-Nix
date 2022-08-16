//Task 1
class user  {
constructor (name, surname){
    this.name = name;
    this.surname = surname;

};
getFullName (){
    alert (`${this.name}  ${this.surname}`)
};
};

class student extends user {
constructor (name,surname, year){
    super(name,surname);
    this.year = year;
}
 
getCourse(){
    let currentYear = new Date().getFullYear();
    let currentCourse = currentYear - this.year;
    if(currentCourse>5){
        alert(`${this.name} ${this.surname} already graduated`)
    }if(currentCourse == 0){
        alert(`${this.name} ${this.surname} 1 year student`)
    }
    else{
        alert(`${this.name} ${this.surname} ${currentCourse} year student`)
    }
};
};
//Task 2
function counter() {
	let i = 1;
	return function() {return i++};
}

let func = counter();

//Task 3
let numbers = function() {
	var alreadyUsed = [];
	return function() {
		var newNum = Math.floor(Math.random() * 100 + 1);
		for (var i = 0; i < alreadyUsed.length; i++) {
			if (alreadyUsed[i] == newNum) {return}
		};

		parag.innerHTML += newNum+', ';
		alreadyUsed.push(newNum);
	}
}

var but = document.querySelector('button').addEventListener('click', numbers());
var parag = document.querySelector('p');

//Task 4
let elems = document.getElementsByTagName('div');
for (var i = 0; i < elems.length; i++) {
	elems[i].addEventListener('click', setRed);
}

function setRed() {
	this.style.background = 'red';
	this.removeEventListener('click', setRed);
	this.addEventListener('click', setGreen);
}

function setGreen() {
	this.style.background = 'green';
	this.removeEventListener('click', setGreen);
	this.addEventListener('click', setRed);
}

//Task 5
let promise = new Promise ((resolve, reject)=>
setTimeout(()=> {
    resolve(5);
},3000));

promise.then(
    (result) =>
    new Promise((resolve,reject) =>
    setTimeout(()=>{
        resolve(Math.pow(result,2));
    },3000))
).then((result) =>
new Promise ((resolve,reject)=>
setTimeout(() => {
    resolve(Math.pow(result,2));
},3000))
).then ((result) =>
alert(result));

//Task 6
let promisee = new Promise ((resolve, reject)=>
setTimeout(()=> {
    resolve(5);
},3000));

promise.then(
    (result) =>
    new Promise((resolve,reject) =>
    setTimeout(()=>{
        resolve(Math.pow(result,2));
    },3000))
).then((result) =>
new Promise ((resolve,reject)=>
setTimeout(() => {
    resolve(Math.pow(result,2));
},reject('error'),3000)),(error) =>{
    throw new Error ('critical error')}
).then ((result) =>
alert(result)).catch(
    (error) => alert(error)
);

//Task 7

document.querySelector('#date-input')
  .addEventListener('blur', function() {
    let bd = new Date(Date.parse(this.value))
    let now = new Date
    bd.setFullYear(+now.getFullYear())
    if (bd <= now) {д
      bd.setFullYear(+bd.getFullYear() + 1)
    }
    let diff = Math.round((+bd - now) / 86400000)
    document.getElementById('output').innerHTML = diff
  })

//Task 8

var arr = [-1, -2, -3, -4, 0, 1, 2, 3,4];
function mass (elem){return elem > 0};
var arrTemp = arr.filter(mass);

var result = arrTemp.map(function(elem) {
	return Math.sqrt(elem);
});
console.log(result); 

//Task 9


//Task 10

var fib = function(){
	var a = 0;
	var b = 1;
	var temp;
	return function() {
		this.nextElementSibling.innerHTML = a;
		temp = a;
		a = b;
		b = temp +a;
	}
}

var buts_collect = document.getElementsByTagName('button');
for (var i = 0; i < buts_collect.length; i++) {
	buts_collect[i].addEventListener('click', fib());
}

//Task 11-12
function Human(name, sex, lang, age) {
      this.name = name;
      this.sex = sex;
      this.lang = lang;
      this.age = age;
    }
    
    var human = new Human();
    var humans = [];
    humans.push(new Human("Ken", "male", "eng", 28));
    humans.push(new Human("Pol", "male", "eng", 22));
    humans.push(new Human("July", "female", "uk", 25));
    humans.push(new Human("Bill", "male", "rus", 36));       
    humans.sort(function(o1, o2) {
        var v1 = o1.age;
        var v2 = o2.age;
        return ((v1 < v2) ? -1 : ((v1 > v2) ? 1 : 0));
        });
        console.log(humans);

//Task 13

//Task 14