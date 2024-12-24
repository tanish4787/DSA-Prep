const reverseStr = (str) => str.split("").reverse().join("")
// console.log(reverseStr("HITESH"));
// console.log(reverseStr("ANMOL"));
// console.log(reverseStr("RAHUL"));
// console.log(reverseStr("PARTH"));


const palindrome = (str) => str.split("").reverse().join("") === str;
// console.log(palindrome("nitin"));
// console.log(palindrome("anmol"));
// console.log(palindrome("odo"));


const reverseInt = (int) => {
    const reversed = int.toString().split('').reverse().join('') 
     return parseInt(reversed) * Math.sign(int)
}

// console.log(reverseInt(123));




