// object literal
// Object.create constructor method
const mysym = Symbol("key1")
const Jsuser = {
    name : "raqeeb",
    [mysym] : "key1",
    age : 23,
    location : "bengaluru",
    email : "raqeeb@google.com",
    isLoggedin : true,
    lastLogin : ["monday","tuesday"]

} // literal method

// 2 methods to access
//1st
console.log(Jsuser.name)
//2nd
console.log(Jsuser["name"]) // this way is efficient coz if the key defined is a string then u cannot see the value using dot method
console.log(Jsuser[mysym]);
console.log(typeof(Jsuser[mysym]));

Jsuser.age = 21
console.log(Jsuser);

// Object.freeze(Jsuser)
Jsuser.email = "rqb@mail.com"
console.log(Jsuser);

Jsuser.greetings = function(){
    return "good morning user"
}
console.log(Jsuser.greetings());
// agar value return karee toh undefined nahi aara , seedha console.log kare toh undefined aara.

// const MYfunc = function(){

// } normal way mai function declare karna ho to

Jsuser.TellAge = function(){
    console.log(`the age of the user is : ${this.age}`);
    
}
console.log(Jsuser.TellAge());
