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


const capitalize = (str) => {
    return str.toLowerCase().split(' ').map((word) => word[0].toUpperCase() + word.slice(1)).join(" ")
}
// console.log(capitalize("hi, how are you?"));


const fizzBuzz = (n) => {
    for (let i = 1; i <= n; i++) {

        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz');
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }

    }
}
fizzBuzz(5)


const maxProfit = (prices) => {
    let minPrice = prices[0]
    let maxProfit = 0

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i]

        minPrice = Math.min(minPrice, currentPrice)

        const potentialProfit = currentPrice - minPrice
        maxProfit = Math.max(maxProfit, potentialProfit)

    }
    return maxProfit
}

const prices = [7, 1, 5, 3, 6, 4]
const Profit = maxProfit(prices)
// console.log(Profit);




const chunk = (array, size) => {
    let chunked = []
    let index = 0

    while (index < array.length) {
        const chunk = array.slice(index, index + size)

        chunked.push(chunk)

        index += size
    }
    return chunked
}
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));




