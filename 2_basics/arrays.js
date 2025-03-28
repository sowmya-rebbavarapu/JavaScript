//js arrays are resizable,array index from 0
//shallow copy-shares the same reference and when made changes the actual array also gets chnaged
//deep copy-different reference 
//array can take any type of elements
const myarr=[1,2,3,4,5]
const names=['sowmya','rakesh','geetha']
const arr=new Array(1,2,3)
console.log(myarr[0]);

//methods
myarr.push(8)
console.log(myarr)
myarr.pop()//pops the last element
console.log(myarr)

myarr.unshift(9)//inserts at the beginning of the array
console.log(myarr)
myarr.shift()//removes the ele at beginning of array
console.log(myarr)

//question methods
console.log(myarr.includes(9))
console.log(myarr.indexOf(8))

const arr1=myarr.join()//converts array to string
console.log(arr1)

//slice,splice
console.log("A",myarr);
const arr3=myarr.slice(1,3)
console.log(arr3)

const arr4=myarr.splice(1,3)
console.log("B",myarr);
console.log(arr4)

//if you push one array into other array it is not merged but treated as array in array
//use concat function to merge two arrays
//Arrays.from("sowmya")-converts to array
