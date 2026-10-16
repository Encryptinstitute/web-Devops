console.log("my first code")
//Variable
const accountid=12121
let accountemail="Gmail.com"
var accountpassword = "123456"
accountcity = "Kanpur"
let accountstate;
//accountid = 2 //not allowed

/*
Prefer not to use Var 
because of issue in block scope and functional scope
*/
accountemail = "Encrypt@gm.com"
accountpassword = "5454545"
accountcity = "unnao"

console.log(accountid);

console.table([accountid, accountemail, accountpassword, accountcity, accountstate])

//datatypes//

"user strict"//treat all JS code newer version

//alert("hallo")
//alert( 2+2 ) //we are using nodejs, not brower.

console.log(3+3); console.log("hi Java")

//Code readability Should be high

let name = "java Script"
let age = 29
let isloggedin = false

//Number => 2 to power 53
//bigint
//string=>""
//boolean => true/false
//null=> Standalon Value
//undefine
//symbol=> unique


//object

console.log(typeof name);
 console.log(typeof age);
 console.log(typeof isloggedin);
 console.log(typeof null) //Object
console.log(typeof undefined) //undefined

//Conversion and opration 

let score = null

console.log(typeof score); 
console.log(typeof (score)); //As Mathed

let valueinnumber = Number(score);
console.log(valueinnumber);

//"33" => 33
//"33abc" => NaN
// true => 1; False=> 0

let isloggedIn = "";
let booleanIsloggedin = Boolean(isloggedIn)
console.log(booleanIsloggedin)

// 1 => True; 0=> False;
//"" => False
//"Hi one"=>true

//*************opration********* */

let value = 5
let negvalue = -value
console.log(negvalue)

//console.log(2+2)
//console.log(2/2)
//console.log(2*2)
//console.log(2/2)
//console.log(2%3)
//console.log(2**2)

let str1 ="rishabh"
let str2 = "soni"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 +2);
console.log(1 + 2 + "2");
