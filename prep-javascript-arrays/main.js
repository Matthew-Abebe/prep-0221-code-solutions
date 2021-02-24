var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
var thirdElement = languagesArray[2];
var arrayLength = languagesArray.length;
var lastItem = languagesArray[languagesArray.length - 1];

console.log('languages array', languagesArray);
console.log('array length', arrayLength);
languagesArray.push('C#', 'php');
console.log('updated array', languagesArray);
languagesArray.pop();
console.log('last index removed', languagesArray);
languagesArray.unshift('C++');
console.log('added element to front', languagesArray);
languagesArray.shift();
console.log('removed first element', languagesArray);
console.log('third element in languagesArray ', thirdElement);
console.log('the final length of languagesArray ', languagesArray.length);
console.log('the last item in the array is ', lastItem); // returning 'node.js' and not 'C#'
