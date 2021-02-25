var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'];
console.log('languages array', languagesArray);

console.log('array length', languagesArray.length);

languagesArray.push('C#', 'php');
console.log('updated array', languagesArray);

languagesArray.pop();
console.log('last index removed', languagesArray);

languagesArray.unshift('C++');
console.log('added element to front', languagesArray);

languagesArray.shift();
console.log('removed first element', languagesArray);

var thirdElement = languagesArray[2];
console.log('third element in languagesArray ', thirdElement);

var arrayLength = languagesArray.length;
console.log('the final length of languagesArray ', arrayLength);

var lastItem = languagesArray[arrayLength - 1];
console.log('the last item in the array is ', lastItem);
