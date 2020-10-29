//Conditional Statements

//exrec 1
let numChildren = 15
let isCareful = false

if(!isCareful){
  numChildren++
}
console.log(numChildren)

//exrec 2
const silverwareCount = 23

if(silverwareCount % 2 != 0){
  console.log("there is somthing missing")
}

//exrec 3
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000

if(performance === "stellar"){
  salary += stellarBonus
}else if(performance === "good"){
  salary += goodBonus
}
console.log(salary)

//exrec 4

const isVIP = false
let cash = 500

if( isVIP || cash > 300){
  console.log("welcome and enjoy!")
}else{
  console.log("your not a vip or have enough money")
}

//exrec 6

const gender = "man"
let profession = "business"

if(gender === null){
profession += "person"
}else if(gender === "women"){
profession += gender
}else if(gender === "man"){
  profession += gender
}

console.log(profession)

//exrec 7

let boughtTesla = false
const yearOfTeslaPurchase = 2014
let isUSCitizen = true
let currentYear = 2018

if(boughtTesla && isUSCitizen){
  if((currentYear - yearOfTeslaPurchase) >= 4 ){
    console.log("would like an upgrade?")
  }else{
    console.log("satisfied with the car?")
  }
}else if(boughtTesla && !isUSCitizen){
  console.log("would like to move to the US?")
}else if(!boughtTesla){
  console.log("are interested in buying one?")
}

//Arrays

const genes = ["ACADM", "GLMN", "RLF", "AZIN2", "CRYZ"]

newGenes = [genes[0],genes[1]]
rlf = genes [genes.length - 3]
cryz = genes [genes.length - 1]
azin2 = genes[3]

newGenes.push(cryz , rlf , azin2 , azin2 )
newGenes.unshift("FXT")
console.log(newGenes)

//objects

const human = {
  age: 0
}

const babyNameKey = "name"
const babyNameValue = "Goojibear"
human[babyNameKey] = babyNameValue
human.name = "or"
console.log(human)

//exrec 1 

const p1 = {
 name: "adir",
 age: 24 ,
 city: "tlv"
}

const p2 = {
  name: "yana",
  age: 24 ,
  city: "tlv"
 }

 if(p1.age == p2.age){
   if(p1.city == p2.city){
     console.log(p1.name + " wanted to date " + p2.name )
   }else{
     console.log(p1.name + " wanted to date " + p2.name + " but couldnt.")
   }
 }

 //exrec 2

const myList = [
  {book : "dictionery" , pages : 1000} , 
  {book : "math" , pages : 200}
]

myList[0].pages = 500
myList.splice(1,1)

console.log(myList)

//exrec 3

const myList = [
  {book : "dictionery" , pages : 1000} , 
  {book : "math" , pages : 200}
]

const newList = [
 {phone : "iphone" , computer : "apple"},
 {phone : "android" , computer : "dell"}
]

newList.push(...myList)

console.log(newList)

//exrec 4

const library = {
 books : [
   {title : "the jorny" , author : "steven"},
   {title : "lemonades" , author : "rosa lee"},
   {title : "technologeis" , author : "rooben"}
 ]
}

const myList = [
  {book : "dictionery" , pages : 1000} , 
  {book : "math" , pages : 200}
]

myList.push(...library.books)

console.log(myList)

//exrec 5

const reservations = {
  Bob: { claimed: false },
  Ted: { claimed: true }
}

const name = prompt('Please enter the name for your reservation');
const lowerCaseName = name.toLowerCase()
const editedName = lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1)

if(reservations[editedName] && !reservations[editedName].claimed){
 console.log("Welcome, " + editedName)
}else if(reservations[editedName] && reservations[editedName].claimed){
  console.log("Hmm, someone already claimed this reservation")
}else if(!reservations[editedName]){
  console.log("You have no reservation")
  reservations[editedName] = {claimed : true}
}
console.log(reservations)


//exrec 6 

const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true,
    fridge: {
        price: 500,
        works: false,
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}

const owner = kitchen.owner
const hasOven = kitchen.hasOven
const price = kitchen.fridge.price
const Fridgeworks = kitchen.fridge.works
const raddish = kitchen.fridge.items[1].name
const raddishExpiryDate = kitchen.fridge.items[1].expiryDate


if (owner && hasOven) {
  expiryDate = date - raddishExpiryDate
}console.log(owner +"'s" + " " + raddish + " expired " + expiryDate + " day ago.")
if (!Fridgeworks) {
  console.log("Probably because her fridge doesn't work.")
}
if (hasOven) {
  console.log("Luckily, she has an oven to cook the " +  raddish + " in.")
}
if (!Fridgeworks) {
  haveToPay = price/2
}console.log("And she'll have to pay " + haveToPay +  " to fix the fridge.")

//loops

//exrec 1

const name = ["or", "danny", "yana", "sapir"]
const age = [22, 30, 22, 19]

for(let i in name){
    console.log(name[i] + " is " + age[i] + " years old.")
}

//exrec 2

const numbers = [23, 50 , 65 , 69 , 100]
let sum = 0


//exrec 4

let nums = []

for( let i = 0; i < 100; i++){
 nums.push(i)
}
console.log(nums)

//exrec 5 

let nums = []

for( let i = 0; i < 100; i++){
 nums.push(i)
}
console.log(nums)

for(let num of nums) {
  if((num % 2) != 0){
    console.log(num)
  }
}

//exrec 6

let nums = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

for(let i in nums){
  if(nums[i] == 709){
    console.log(i)
  }
}

//exrec 7 

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let i in names){
  people[i] = {name : names[i] , age : ages[i]}
}
console.log(people)


//exrec 8

const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let i in names){
  people[i] = {name : names[i] , age : ages[i]}
}
console.log(people)

for(let i in people){
  console.log(people[i].name + " is " + people[i].age + " years old.")
}

//exrec 9

const posts = [
  {id: 1, text: "Love this product"},
  {id: 2, text: "This is the worst. DON'T BUY!"},
  {id: 3, text: "So glad I found this. Bought four already!"}
]

for(let i in posts){
  if(posts[i].id === 2){
    posts.splice(i, 1)
  }
}
console.log(posts)

//exrec 10

const posts = [
  {
    id: 1, 
    text: "Love this product",
    comments: []
  },
  { 
    id: 2, 
    text: "This is the worst. DON'T BUY!", 
    comments: [
                {id: 1, text: "Idiot has no idea"}, 
                {id: 2, text:"Fool!"}, 
                {id: 3, text: "I agree!"}
              ]
   },
   {
    id: 3, 
    text: "So glad I found this. Bought four already!",
    comments: []
   }
]

for(let i in posts){
  if(posts[i].id == 2){
    for(let c in posts[i].comments){
      if(posts[i].comments[c].id == 3){
        posts[i].comments.splice(c,1)
      }
    }
  }
}

console.log(posts)

//Extension

const dictionary = {
  "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
  "B": ["Banana", "Bonkers", "Brain", "Bump"],
  "C": ["Callous", "Chain", "Coil", "Czech"]
}

console.log(Object.keys(dictionary))

const keys = Object.keys(dictionary)

for(let i in keys[0]){
  for(let w in dictionary.A){
    console.log("Words that begin with " + keys[i] + " : " + dictionary.A)
  }
}

//the right way:

const properties = Object.keys(dictionary)
let currArr = []

for (let property of properties) {
  currArr = dictionary[property]
  console.log("Words that begin with " + property + ":")
  for (let word of currArr) {
    console.log("\t" + word)
  }
} 

