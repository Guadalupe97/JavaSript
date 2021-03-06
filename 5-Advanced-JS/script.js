// Funcion constructores
/*
var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher',
};

var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job =job;
}

Person.prototype.calculateAge = function(){
        console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'Teacher');

var jane = new Person('Jane', 1969, 'designer');

var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);

*/

//Object.create
/*
var personProto = {
    
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth)
    }
    
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
});

*/

//Primitives vs objects

//Primitivos
/*
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);


//Objetos

var obj1 = {
    name: 'john',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;

console.log(obj1.age);
console.log(obj2.age);


//Functions

var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b){
    a = 30;
    b.city = 'San Francisco';
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/

//Lecture: Passing functions as arguments 
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

    function calculateAge(el) {
        return 2016 - el;
    }

    function isFullAge(el) {
        return el >= 18;
    }

    function maxHeartRate(el){     
        if (el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    } else{
        return -1;
    }
    }

    var ages = arrayCalc(years, calculateAge);

    var fullAges = arrayCalc(ages, isFullAge);

    var rates = arrayCalc(ages, maxHeartRate);

    console.log(ages);
    console.log(rates);
    */

    //Lecture: Funciones devolviendo funciones
    /*
    function interviewQuestion(job){
        if (job === 'designer'){
            return function(name){
                console.log(name + ', Puedes explicar tu experiencia diseñando?');
            }
        }
        else if (job === 'teacher'){
                return function(name){
                    console.log('Que materia enseñas, ' + name + '?');
                }
            }
        else { return function(name){
            console.log('Hello' + name + ', que haces?');
        }
            
        }
        
    }

    var teacherQuestion = interviewQuestion('teacher');
    var designerQuestion = interviewQuestion('designer');
    

    teacherQuestion('John');
    designerQuestion('John');
    designerQuestion('Jane');
    designerQuestion('Mark');
    designerQuestion('Mike');

    // Con esta linea se ahorra toda la parte de arriba de la declaración de variables
    interviewQuestion('teacher')('Mark');
    */

    //Lecture: IIEF
    /*
    function game(){
        var score = Math.random() * 10;
        console.log(score >= 5);
    }

    game();
    /*
    //IIEF
    (function (){
         var score = Math.random() * 10;
        console.log(score >= 5);
    })();
        
    //console.log(score);

    (function (goodluck){
         var score = Math.random() * 10;
        console.log(score >= 5 - goodluck);
    })(5);

    /*
    //IIEF ES2015
    {
        let score = Math.random() * 10;
        console.log(score >= 5);
    }
    */

    // Lecture: Closures
    /*
    function retirement(retirementAge){
        var a = ' Años restantes hasta la jubilación.';
        return function(yearOfBirth){
            var age = 2016 - yearOfBirth;
            console.log((retirementAge - age) + a);
        }
    }

    var retirementUS = retirement(66);
    var retirementGermany = retirement(65);
    var retirementIceLand = retirement(67);

    retirementGermany(1990);
    retirementUS(1990);
    retirementIceLand(1990);
    
    //retirement(66)(1990);

     /*
    function interviewQuestion(job){
        if (job === 'designer'){
            return function(name){
                console.log(name + ', Puedes explicar tu experiencia diseñando?');
            }
        }
        else if (job === 'teacher'){
                return function(name){
                    console.log('Que materia enseñas, ' + name + '?');
                }
            }
        else { return function(name){
            console.log('Hello' + name + ', que haces?');
        }
            
        }
        
    */
    /*
    function interviewQuestion(job){
        return function(name){
            if (job === 'designer'){
                  console.log(name + ', Puedes explicar tu experiencia diseñando?');
            }
            else if ( job === 'teacher'){
                   console.log('Que materia enseñas, ' + name + '?');
            }
            else{
            console.log('Hello' + name + ', que haces?');            
            }
        }
    
    }

    interviewQuestion('teacher')('John');
    interviewQuestion('designer')('John');
    */

    //Lecture: Bind, call and apply methods

    var john = {
        name: 'John',
        age: 26,
        job: 'maestro',
        presentation: function(style, timeOfDay){
            if (style === 'formal'){
                console.log('Buenos ' + timeOfDay + ', Damas y caballeros! Yo soy ' + this.name + ', Soy ' + this.job + ' y tengo ' + this.age + ' años');
            }
            else if(style === 'friendly')
            {
                console.log('Hey que pasa?, Yo soy ' + this.job + ' y tengo ' + this.age + ' años. Buenas ' + timeOfDay + '.');
            }
        }
    };

        var emily = {
            name: 'Emily',
            age: 35,
            job: 'diseñadora'
        };

    
        john.presentation('formal', 'días');

        john.presentation.call(emily, 'friendly', 'tardes');

        //john.presentation.apply(emily, ['friendly']);

        var johnFriendly = john.presentation.bind(john, 'friendly');

        johnFriendly('días');
        johnFriendly('noches');

        var emilyFormal = john.presentation.bind(emily, 'formal');
        emilyFormal('tardes');




var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

    function calculateAge(el) {
        return 2016 - el;
    }

    function isFullAge(limit, el) {
        return el >= limit;
    }

    var ages = arrayCalc(years, calculateAge);

    var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
    console.log(ages);
    console.log(fullJapan);



