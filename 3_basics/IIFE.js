//Immediately Invoked Function Expressions

(function one(){
    console.log("hello")
})();

//they are used to create private scope
//to avoid the pollution caused due to the global scope we use iife

((name)=>{
    console.log(`hi ${name}`)
})("sowmya");