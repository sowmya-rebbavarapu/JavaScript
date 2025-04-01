const coding=["js","ruby","java","python","cpp"]

const values=coding.forEach((item)=>{
   //console.log(item);
   return item
})
console.log(values)//for each doenst return the values

const mynums=[1,2,3,4,5,6,7,8,9]
let newnums=mynums.filter((num)=>num>5)
console.log(newnums)

const myNums=[1,2,3,4,5,6,7,8,9]
//const num=myNums.map((num)=>num+10)
const nums=myNums.map((num)=>num*10).map((num)=>num+1)
console.log(nums)

const arr=[1,2,3,4,5,6,7]
const total=arr.reduce(function(acc,curr){
    return acc+curr
},0)
console.log(total)