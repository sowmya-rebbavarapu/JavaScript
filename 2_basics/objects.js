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

user.greeting=function(){
    console.log("hello");
}
user.greet=function(){
    console.log(`hello,${this.name}`);
}
console.log(user.greet());