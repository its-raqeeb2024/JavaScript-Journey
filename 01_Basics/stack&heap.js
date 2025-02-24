let name = "raqeeb"
let Newname = name
Newname = "shruthi"
// primitive data type is stored in stack so tey are not changed
// console.log(name);
// console.log(Newname); 

// non primitives 
//objects
let ObjUser1 = {
    Username : "admin",
    UserEmail : "xcv@g.com",
    UserPwd : 123,
}
// give similar content to obj2
let ObjUser2 = ObjUser1
// change any one of the obj value
ObjUser2.Username = "user"
console.log(ObjUser2.Username);
console.log(ObjUser1.Username);

// the original value will be changed 

   