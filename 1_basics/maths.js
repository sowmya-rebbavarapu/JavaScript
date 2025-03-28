const score=100;
console.log(score)
const balance=new Number(100)
console.log(balance)

console.log(balance.toString().length)

const num=12.3334
console.log(num.toPrecision(3))

const n=100000
console.log(n.toLocaleString('en-IN'))

//maths
console.log(Math.abs(-1))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))
//Math.min(),max(),random()-gives values between 0 to 1

console.log(Math.random())
console.log((Math.random()*10)+1)

const min=20
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min)