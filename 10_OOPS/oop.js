const user = {
    username: "Vivek",
    loginCount: 1,
    signedIn: false,

    getUserDetails: function () {
        console.log('Control reached');
        console.log(this);    // this will give Current context


    }

}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this);   // now this is reffering to Global context 
// output :- {}       // because current context me kuch nhi hai abhi



function User(username, loginCount, isloggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isloggedIn = isloggedIn

this.greetings = function(){
    console.log(`Welcome ${this.username}`);
    
}
    return this
}
// NOTE:- new creates Constructor
const userOne = new User("hitesh",12,true)  // if we don't use new (userTwo will override value)
const userTwo = new User("Vivek",12,false)

// console.log(userOne);
// console.log(userTwo);
  


// NOTE:- Exlpore OOPS from chatgpt orr internet