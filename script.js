// Question number one

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
// The output will be a random car from the object cars. "tesla"
// The other random will display a second random car."mercedes"
console.log(randomCar)
console.log(otherRandomCar)



// Question number two

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
// This is gonna display and error since name becomes otherName, "elon"
//  therefore making Name undefined.
console.log(name);
console.log(otherName);



// Question number three

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
// Password is gonna console "12345". 
// But Hashpassword isnt defined anywhere, so its gonna display undefined.
console.log(password);
console.log(hashedPassword);



// Question number four

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
// first==second is gonna log false, first is gonna ge through the object and give us 2, and second is gonna end up 5
// first==third is gonna log true, third is also gonna end up 2
console.log(first == second);
console.log(first == third);



// Question number five 

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
// // key is gonna log "value"
// // secondkey is gonna log [1,5,1,8,3]
// // secondkey[0] is gonna log 1
// will this work is gonna log 5
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);




