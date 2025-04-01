// switch(key)
// {
//     case value:
//         break;
//     default:
//         break;
// }

const month=3;
switch(month){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march")
        break;
    default:
        console.log("error")
}


//false ,0 and -0,"",null,undefined,Nan,BigInte 0n all these are considered as false

//true "0",'false'," ",[],{},function(){} -all these are true values

//nullish caolescing operator (??) :null undefined

const val1=null??10
const val2=undefined??10
console.log(val1)

//terniary operator
// condition?true:false
const price=100
price>=80?console.log("greater than 80") :console.log("less than 80")