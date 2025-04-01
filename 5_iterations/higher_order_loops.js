//for of

const arr=[1,2,3,4,5]

for(const num of arr)
{
    console.log(num)
}

const str="hello"
for(const i of str)
{
    console.log(`each char is ${i}`)
}

//maps
const map=new Map()//object//unique values
map.set('IN',"India")
map.set("USA","United States of America")
console.log(map)
for(const [key,value] of map)
{
    console.log(key,":",value)
}
//for of loop doesnt work for objects


//for in loop
const myobject={
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift:"swift by apple"
}
 for(const key in myobject)
 {
    console.log(`${key} : ${myobject[key]}`)
 }

 //foreach
  const coding=["js","ruby","java","python"]
//   coding.forEach(funciton(item){})
coding.forEach(function(val){
       console.log(val);
})

coding.forEach((item)=>{
    console.log(item);
})
//can be used for array of objects