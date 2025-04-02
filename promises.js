//eventual completion of asynchronous operations
/*
project is a object
3 states
-pending
-fulfilled
-rejected
before promises Q and Bluebird libraries were used
*/
const promise1=new Promise(function(resolve,reject){
    //do a async task
    //db calls,network calls
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})

promise1.then(function(){
    console.log('Promise consumed')
})

new Promise(function(resolve,reject){
    //do a async task
    //db calls,network calls
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    console.log("completed")
})

const promise3=new Promise(function(resolve,reject){
    setTimeout(function(){
    resolve({username:"sowmya",email:"123@gmail.com"})
    },1000)
})
promise3.then(function(user){
   console.log(user);
})

const promise4=new Promise(function(resolve,reject){
    setTimeout(function(){
     let error=false
     if(!error){
        resolve({username:"sowmya",password:"123"})
     }
     else{
        reject('error:something went wrong')
     }
    },1000)
})

promise4.then((user)=>{
  console.log(user);
  return user.username
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.error(error)
}).finally(()=>console.log("the promise is either rejected or accepted"))

const promise5=new Promise(function(resolve,reject){
       setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"sowmya"})
        }
        else{
            reject("error")
        }
       },1000)
});

async function consumePromise5(){
    try {
        const response = await promise5;
        console.log(response); 
      } catch (error) {
        console.error("Caught an error:", error); 
      }
}
consumePromise5()