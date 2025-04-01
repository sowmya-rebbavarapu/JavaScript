//=== it checks the type of the varibles compared

if(2===2)
{    const price=2
    console.log(price)//price is limited to this block
}
else{
    console.log("Not same")
}

 const balance=1000  
 //not a good way to write
// if(balance>500) console.log("executed"),console.log("test")

if(balance<500)
{
    console.log("less than 500")
}
else if(balance>700)
{
    console.log("less than 750")
}
else{
    console.log("greater")
}
//can use multiple condtion here with && || operators