//exrec 1 

const calcAge = function(thisYear, birthYear){
  return thisYear - birthYear
}

const age = calcAge(2017, 1989)
console.log(age)

//exrec 2

const calcAge = function(thisYear , birthYear){
  let age1 = thisYear - birthYear - 1
  let age2 = thisYear - birthYear
  console.log("you are " + age1 + " or " + age2)
}

 calcAge(2018, 2015)
 

//exrec 3

const isEven = function(number){
  if((number % 2) === 0){
   return true
   }else{
    return false
  }
}

console.log(isEven(77))

//exrec 4

const isEven = function(number){
  if((number % 2) === 0){
   return true
   }else{
    return false
  }
}

const findOdd = function(numbers){
 for(let number of numbers){
   if (!isEven(number)){
     console.log(number)
   }
 }
}

const numbers = [33, 21 , 69 , 100 , 254]

findOdd(numbers)

//exrec 5

const checkExists = function(numbers , number){
for(let i of numbers){
  if(number == numbers[i]){
    return true
  }else{
    return false
  }
 }
}

const numbers = [1 , 2 , 3 , 4]

console.log(checkExists(numbers,6))

//exrec 6 

const calculator = {
  add : function(x , y){
   return x + y 
  },
  subtract : function(x , y){
    return x - y
  }
}

const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2)) //should print 42


//exrec 7 

const increaseByNameLength = function(money , name){
 return money * name.length
}

const makeRegal = function(name){
  return "His Royal Highness, " + name
}


const turnToKing = function(name, money){
  name = name.toUpperCase()
  money = increaseByNameLength(money, name)
  name = makeRegal(name)

  console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

//Functions Mini Lesson

people_info = [
  {
    name: "guido",
    profession: "bungalow builder",
    age: 17,
    country: "canaland",
    city: "sydurn",
    catchphrase: "what a piece of wood!"
  },
  {
    name: "petra",
    profession: "jet plane mechanic",
    age: 31,
    country: "greenmark",
    city: "bostork",
    catchphrase: "that's my engine, bub"
  },
  {
    name: "damian",
    profession: "nursery assistant",
    age: 72,
    country: "zimbia",
    city: "bekyo",
    catchphrase: "with great responsibility comes great power"
  }
]

const capitalize = function(str){
  let capitalizedStr = ""
  capitalizedStr += str[0].toUpperCase();
  capitalizedStr += str.slice(1) 
  return capitalizedStr
}

const getAge = function(age){
  if(age < 21){
    return "an Underage"
  }if(age > 55){
    return "a 55+"
  }else{
    return `${age} years old`
  }
}

const getProfession = function(profession){
  return capitalize(profession)
}

const countryAndCity = function(city , country){
    city = capitalize(city)
    country = capitalize(country)
    return ` from ${capitalize(city)}, ${capitalize(country)}.`
  
}

const getCatchphrase = function(catchphrase){
  return capitalize(catchphrase)
}


const getSummary = function(person){
  let summary = ""
  summary += capitalize(person.name)
  summary += ` is ${getAge(person.age)} `
  summary += getProfession(person.profession)
  summary += countryAndCity(person.city , person.country)
  summary += ` ${capitalize(person.name)} loves to say "${getCatchphrase(person.catchphrase)}".`
  return summary
}

for(let people of people_info){
  console.log(getSummary(people))
}