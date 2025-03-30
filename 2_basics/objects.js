//object literals-{key-value}
const sym=Symbol("key")
const user={
    name:"sowmya",
    age:18,
    [sym]:"key",//correct way to declare a sym
    //sym:"key",//here it is treated as string
    location:"hyd",
    email:"123@gmail"
}
console.log(user.name)
console.log(user["name"])
console.log(user[sym])

//Object.freeze(user)//the changes made to the object are not propagated

user.greet=function(){
    return `hello ${this.name}`
}
console.log(user.greet());

//objects-singleton
const user1=new Object()
user1.id="51"
user1.name="sam"
user1.isLoggedIn="false"
console.log(user1)

const user2={
    email:"123@gmail",
    fullname:{
        userfullname:{
            firstname:"sowmya",
            lastname:"sam"
        }
    }
}
console.log(user2.fullname.userfullname.firstname)

//merging objects
const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2} this creates a obejct inside other rather then merging
const obj3=Object.assign({},obj1,obj2)
//{}-this is the traget and rest followed are source
const obj4={...obj1,...obj2}
console.log(obj3)
console.log(obj4)

//from the database we usually get data in the form of array of objects
//to get the keys Object.keys(object name)
//to get the values Object.values(object name)
//Object.entries(object name)
//hasOwnProperty("key name")-true or false


//destructuring 
const course={
    coursename:"javascript",
    price:"999"
}
const {price:p}=course
console.log(p)

//json-object in json both the key and value are strings
/*
{
  "name":"sowmya"
}
  we can write in the format of arrays also
  [
      {},{}
  ]
 */
