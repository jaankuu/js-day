const dish1 = 'Mo\'s Salad'
const dish2 = 'David\'s Cherry Tomato Soup'
const dish3 = 'Dom\'s Daily Dish'
const dish4 = 'Wouter\'s Waffles'

const price1 = 9
const price2 = 12
const price3 = 8

console.log('Welcome to Chez Codaisseur')
console.log(`1.) ${dish1} - €${price1}`)
console.log(`2.) ${dish2} - €${price2}`)
console.log(`3.) ${dish3} - €${price3}`)

let MenuDeal = (price1 + price2 + price3) - 3;

console.log(`Today\'s menu deal is ${dish1}, ${dish2}, and ${dish3} for a total of ${MenuDeal} euros`)
// At the bottom:
// Make a menu deal with 3 dishes, add the total prices together and give a discount of 3 euros