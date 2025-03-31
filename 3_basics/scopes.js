var c=300
let a=300
if(true)
{
    let a=10; //cannot be accessed outside
    //const b=20;cannot be accessed outside
    var c=30;
    console.log(a)
}
console.log(a)
console.log(c)

function one(){
    const username="sowmya"
    function two(){
        const website="youtube"
        console.log(username)
    }
    
    // console.log(website) gives out an error
    // two()
}
one()

if(true)
{
    const username="sowmya"
    if(username==="sowmya")
    {
        const website="youtube"
        console.log(username+website)
    }
    //console.log(website)-cannot be accessed
}
//console.log(username)-cannot be accessed