let myDate=new Date()
console.log(myDate.toString())
console.log(myDate.toISOString())
console.log(typeof myDate);//object

let myNewDate=new Date(2025,0,23)
console.log(myNewDate.toDateString())

let timeStamp=Date.now()
console.log(Math.floor(timeStamp/1000))

let date=new Date()
console.log(date.getMonth())
console.log(date.getFullYear())
date.toLocaleString('default',{
    weekday:"long"
})
console.log(date)