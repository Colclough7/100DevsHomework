//Translate border-left-width to borderLeftWidth

//Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

//That is: removes all dashes, each word after dash becomes uppercased.

//Examples:



//camelize("background-color") == 'backgroundColor';
//camelize("list-style-image") == 'listStyleImage';
//camelize("-webkit-transition") == 'WebkitTransition';


function camelize(str) {
  return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}


//************************************************************************************

//Filter range


//Write a function filterRange(arr, a, b) that gets an array arr, 
//looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

//The function should not modify the array. It should return the new array.

//For instance:

//let arr = [5, 3, 8, 1];

//let filtered = filterRange(arr, 1, 4);

//alert( filtered ); // 3,1 (matching values)

//alert( arr ); // 5,3,8,1 (not modified)


function filterRange(arr, a, b) {
  // added brackets around the expression for better readability
  return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (matching values)

alert( arr ); // 5,3,8,1 (not modified)

//****************************************************************


//Filter range "in place"


//Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. 
//The test is: a ≤ arr[i] ≤ b.

//The function should only modify the array. It should not return anything.

//For instance:

//let arr = [5, 3, 8, 1];

//filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

//alert( arr ); // [3, 1]


unction filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // remove if outside of the interval
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1]


//****************************************************

//Sort in decreasing order


let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

alert( arr );



//*******************************************************

//Copy and sort array


//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.

//Create a function copySorted(arr) that returns such a copy.

//let arr = ["HTML", "JavaScript", "CSS"];

//let sorted = copySorted(arr);

//alert( sorted ); // CSS, HTML, JavaScript
//alert( arr ); // HTML, JavaScript, CSS (no changes)



function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted );
alert( arr );


//*******************************************************


//Create an extendable calculator


