const user={
    name:"sowmya",
    price:999,
    welcomeMessage:function()
    {
        console.log(`${this.name} welcome to webiste`)
    }
}

user.welcomeMessage()
user.name="sam"
user.welcomeMessage()