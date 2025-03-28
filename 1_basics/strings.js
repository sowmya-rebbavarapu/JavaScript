const name="sowmya"
const count=50;

//console.log(name+count)
//string interpolation & string is a object
console.log(`Hello my name is ${name}`)

const newname=new String("sowmya")
console.log(newname[0])
//it does change the original string
console.log(newname.toUpperCase())
console.log(newname.charAt(1))
console.log(newname.indexOf('s'))

//in slice you can give negative values ,substring doesnt take negative values
const string=newname.slice(-3,4)
console.log(string)

//trim-white spaces 
const str="     sowmya    "
console.log(str.trim())

//replace
const url="https://%20sowmya.com"
const fixed=url.replace('%20','-')
console.log(fixed)

//includes('string')
//split('')