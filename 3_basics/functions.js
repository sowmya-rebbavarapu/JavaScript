/*
function functionname(){
}
*/
function add(num1,num2){//parameters
    return num1+num2
}
console.log(add(1,2))//argumnets

function name(username){
    return `${username} logged in`
}
 console.log(name("sowmya"))
 //if you dont pass any argument it gives out undefined
//...->rest operator
function calculateCartPrice(val1,val2,...nums1){
       return nums1
}
console.log(calculateCartPrice(200,400,500,600))

const user={
    username:"sowmya",
    price:999
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

console.log(handleObject(user))