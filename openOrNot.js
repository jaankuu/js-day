const currentDay = 'wednesday'
const currentTime = 20
const christmasToday = false

const dayOff = 'monday'
const openingTime = 18
const closingTime = 23

console.log(`Restaurant open? ${currentDay !== dayOff && openingTime >= currentTime < closingTime}`)
console.log(`Restaurant closed? ${currentDay === dayOff || openingTime < currentTime >= closingTime}`)