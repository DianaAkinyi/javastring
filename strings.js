//Extract the first four characters from the string below;
"beautiful"
let speak="beautiful";
console.log(speak[0]);
console.log(speak[1]);
console.log(speak[2]);
console.log(speak[3]);
//Insert the following string at the tenth index of the below variable:
//"eat"
//onst food = "I did not have appetite today"

const food = "I did not have appettite today";
const text =food.replace("h","eat");
console.log(text);

//Count how many times the following string appears in the string variable:
//1. "the"
//2."s"
//const story= "She sells sea shells at the sea shore"
const story="She sells sea shells at the sea shore";
const y =prompt("the");
const result= countString(story("the"));
console.log(result);

const s ="She sells sea shells at the sea shore";
const j =prompt("is");
const count =countString(s("is"));
console.log(count);
 

//Convert the following strings into the specified format:
//1. UpperCase: "CONfidant"
//2. LowerCase: "amazing", "beautiFUL"
//3. Title case "A busy office"

const caps= "CONfidant";
const cap=(caps.toUpperCase());
console.log(cap);
 const lower="amazing";
 const low =(lower.toLowerCase())
 console.log(low);
 const small ="beautiFUL"
 const smaller =(small.toLowerCase())
 console.log(smaller)
 const title ="A busy office"
 const head =(title.toLocaleUpperCase())
 console.log(head)
 //Using JavaScript, find the following words from the following strings:
//1. "market"
//const string1 = "The lady went to the market with her sister";
//2. "season"
//const string2 = "My favorite season is spring"
const string1 ="The lady went to the market with her sister";
const slice =string1.slice(-23,-15)
console.log(slice)

const string2 ="My favourite season is spring"
const portion = string2.slice(-16,-10)
console.log(portion)












