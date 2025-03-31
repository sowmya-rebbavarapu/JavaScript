const user={
    name:"sowmya",
    price:999,
    welcomeMessage:function()
    {
        console.log(`${this.name} welcome to webiste`)
    }
}

user.welcomeMessage()
user.name="sam"
user.welcomeMessage()

// const one=function(){
//     let username="sowmya"
//     console.log(this.username)
// }

//arrow function
const one=()=>{
    let username="sowmya"
    console.log(this.username)
}

//one()
// const add=(num1,num2)=>{
//     return num1+num2
// }
// console.log(add(4,5))
//for curly braces we use return keyword
const add=(num1,num2)=>(num1+num2)//no need of return keyword for parenthesis
console.log(add(4,5))