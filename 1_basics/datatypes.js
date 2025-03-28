"use strict"//treat all Js code ad newer version

let name="sowmya"//string
let age=18
let isloggedin=false //boolean


//null-standalone value(empty value)
//undefined-value is not assigned
//symbol - unique


console.log(typeof "sowmya");
console.log(typeof null);
console.log(typeof undefined)

/*Primitive(call by value)
7 types:string,Number,Boolean,null,undefined,symbol,BigInt
Reference type(non primitive):Arrays,Objects,Functions
*/

/*********************************************/
//stack(primitive),heap(non-primitve)


let myname="sowmya"
let anothername=myname
anothername="geetha"

console.log(myname)
console.log(anothername)

//here the data is stored in heap the stack has the refernce to the user data in the heap
let user={
    email:"123@gmail.com",
    id:123
}
let usertwo=user

usertwo.email="1234@gmail.com"
console.log(usertwo.email)
console.log(user.email)
