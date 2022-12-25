// write a pogrom print 1 to 100 number print number with multiple number. Check three multiple if it's ok then print Fizz, if five is multiple then print buzz and both is multiple same number print "FizzBuzz";

// function FizzBuzz(num){
//         let result = '';
//         for(let i = 1; i<= num; i++){
//             if(i % 3 === 0 && i % 5 === 0){
//                 result +="FizzBuzz \n"
//             }else if(i % 3 === 0){
//                 result += "Fizz \n"
//             }else if(i % 5 === 0){
//                 result += "Buzz \n"
//             }else{
//                 result += i+ "\n"
//             }
//         }
//         return result;
// }

// console.log(FizzBuzz(20));



// function maxandMin(arr){
//     let max_number = arr[0]
//     let min_number = arr[0];
//     for(let num of arr){
//         if(max_number < num){
//             max_number = num
//         }
//         if(min_number > num){
//             min_number = num
//         }
//     }
//     console.log(max_number)
//     console.log(min_number)
// }

// maxandMin([10,2,3,1,50]);


// you have a string 
// you have revers

// function reveres(str){
//     let result = str.split('').reverse().join('');
//     return result;
// }
// console.log(reveres("Hello"))

// var fizzBuzz = function(n) {
//     let result = [];
//     for(let i = 1; i<= n; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             result.push("FizzBuzz")
//         }else if(i % 3 === 0){
//             result.push("Fizz")
//         }else if(i % 5 === 0){
//             result.push("Buzz");
//         }else{
//             result.push(i +"");
//         }
//     }
//     return result;
// };

// console.log(fizzBuzz(5))





/*
    give an a string find out witch chart have more time & return this chart 


*/

// function chartChecker(str){
//     let count = 0;
//     let max = 0;
//     let maxChart;
//     for(let i = 0; i<str.length; i++){
//         for(let j = 0; j<str.length; j++){
//             if(str[i] == str[j]){
//                 count +=1;
//                 if(max < count){
//                     max = count;
//                     maxChart = str[i];
//                 }
//             }
//         }
//     }
//     console.log(max,  maxChart);
// }

// chartChecker("applllllllllllllllllle 12311111222222");


// function chartChecker(str){
//         let chartMap ={};
//         let max = 0;
//         let chart = '';
//         for(let charts of str){
//             chartMap[charts] = (chartMap[charts] || 0) + 1;
//         }
     
//        for(let charts in chartMap){
        
//         if(max < chartMap[charts]){
//             max = chartMap[charts];
//             chart = charts
            
//         }
//        }
//        console.log(max, chart)
// }

// chartChecker("kawcher habbbbbbbbib")


// function checkingString(str){
//     let result = '';
//         for(let i = 0; i<str.length; i++){
//             if(str[i] == ' '){
//                 continue;
//             }
//             else{
//                 result = result + str[i];
//             }
//         }
//         console.log(result)
// }

// checkingString('race car')
//time complexity = O(n^2)
// function getSum(nums, target){
//     let sum = 0;
//     for(let i = 0; i<nums.length; i++){
//         for(let j = 1; j<nums.length; j++){
//                 sum = nums[i] + nums[j];
//                 if(sum === target){
//                     return [i, j];
//                 }
//         }
//     }

// }

// console.log(getSum([3,2,4], 6));


// function getSum(nums, target){
//    const hashTable ={

//    }
//     for(let i = 0; i<nums.length; i++){
//         const want = target - nums[i];
//             if(want in hashTable){
//                 return [hashTable[want], i];
//             }else{
//                 console.log(want);
//             }
//         hashTable[nums[i]] = i;
//     }

// }

// console.log(getSum([3,2,4], 6));


// var reverseString = function(s) {
//     for(let i = 0; i<s.length /2; i++){
//         const tempValue = s[i];
//         s[i] = s[s.length-1-i];
//         s[s.length-1-i] = tempValue;
//     }
// };

// console.log(reverseString(["h","e","l","l","o"]));

// var reverseVowels = function(s) {
//     const length = s.length;
//     const cases = s.toLowerCase();
//     for(let i = 0; i<length /2; i++){
//        if(cases[i] === 'a'|| cases[i] === 'e' || cases[i] === 'i' || cases[i] === 'o' || cases[i] === 'u' && cases[length-1-i] === 'a'|| cases[length-1-i] === 'e' || cases[length-1-i] === 'i' || cases[length-1-i] === 'o' || cases[length-1-i] === 'u' ){
//         const tempValue = cases[i];
//         cases[i] = cases[length-1-i];
//         console.log(cases[i]);
//        }
//     }
    
// };
// reverseVowels("hello");


//var isAnagram = function(s, t) {

    // const result = s.split('').sort().join('') === t.split('').sort().join('') ? true : false;
    // console.log(result);
    // const hashTable = {};
    // const hashTable2 = {};
    // if(s.length != t.length) return false;
    //  s = s.toLowerCase();
    //  t = t.toUpperCase();
     
    // for(let i = 0; i<s.length; i++){
    //     hashTable[s[i]] = (hashTable[s[i]] || 0) + 1;
    //     hashTable2[s[i]] = (hashTable2[s[i]] || 0) + 1;
    // }
    // for(let k = 0; k<hashTable.length; k++){
    //     console.log(hashTable[i]);
    // }

    
//};
//console.log(isAnagram("anagram","nagaram"));

//time complexity O(n);
// var firstUniqChar = function(s) {
//       const hashTable = {};
//     for(let i =0 ; i <s.length; i++){
//         hashTable[s[i]] = (hashTable[s[i]] || 0) + 1;
//     }
//     for(let j = 0; j<s.length; j++){
//         if(hashTable[s[j]] == 1){
//             return j;
//         }
//     }
//     return -1;
    
// };
// console.log(firstUniqChar("loveleetcode"));


// var isPalindrome = function(x) {
//     const convert = x.toString();
//     let str = '';
//     for(let i = convert.length-1; i >=0; i--){
//             str = str + convert[i];
//     }
//     if(convert === str){
//         return true;
//     }else{
//         return false;
//     }
// };

// console.log(isPalindrome(10))

var reverseWords = function(s) {
    let word = "";

    let getResult = s.split(' ').reverse().join(' ').split('').reverse().join('')
    console.log(getResult);
    // for(let i =0; i<s.length; i++){
    //     if(s[i] == " "){

    //     }
    // }
};

console.log(reverseWords("Let's take LeetCode contest"));