// array paractice 

// Q.1  

// const inputString = 'mddaudAnsarii';
// function findDupl(str) {
//     const charMap = {}; // Object to store character counts
//     const duplicates = {}; // Object to store duplicate characters and their indices
    
//     // Loop through the string
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (charMap[char]) {
//         charMap[char].count++;
//         charMap[char].indices.push(i);
//       } else {
//         charMap[char] = { count: 1, indices: [i] };
//       }
//     }
//     console.log(charMap,'hell')
//     // Check for characters with a count greater than 1 (duplicates)
//     for (const char in charMap) {
//       if (charMap[char].count > 1) {
//         duplicates[char] = charMap[char].indices;
//       }
//     }
    
//     return duplicates;
//   }
  
//   const dupl = findDupl(inputString);
//   console.log('Duplicate characters with indices:', dupl);


//   another example

// function findDupli(str) {
//     const duplicates = {};
  
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (str.indexOf(char) !== i) {
//         if (duplicates[char]) {
//           duplicates[char].push(i);
//         } else {
//           duplicates[char] = [i];
//         }
//       }
//     }
  
//     return duplicates;
//   }
  
//   const inputString = 'abbbsssbb';
//   const duplicateCharactersWithIndices = findDupli(inputString);
//   console.log('Duplicate characters with index:', duplicateCharactersWithIndices);
  
  
// function findDuplicateCharacters(str) {
//     const duplicates = [];
  
//     for (let i = 0; i < str.length; i++) {
//       const char = str[i];
//       if (str.indexOf(char) !== i && duplicates.indexOf(char) === -1) {
//         duplicates.push(char);
//       }
//     }
  
//     return duplicates;
//   }
  
//   const inputString = 'abbbsssbb';
//   const duplicateCharacters = findDuplicateCharacters(inputString);
//   console.log('Duplicate characters:', duplicateCharacters);
  
// const myPromise = new Promise((resolve, reject) => {
//   // Asynchronous code goes here
//   setTimeout(() => {
//     const result = Math.random();
//     if (result < 0.5) {
//       resolve(result); // Resolve the Promise with a value
//     } else {
//       reject("Error: Value is too high"); // Reject the Promise with an error
//     }
//   }, 1000);
// });

// let Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

// for (let i =0; i < Arr.length; i++)
//    {
//     for (let j = 0; j < i; j++){
//       if (Arr[i] < Arr[j]) {
//         let x = Arr[i];
//         Arr[i] = Arr[j];
//         Arr[j] = x;
//     }
//     }
   

//    }
// console.log(Arr);
let Arr = [1, 7, 2, 8, 3, 4, 5, 0, 9];

function selectionSort(arr) {
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    // Find the index of the minimum element in the unsorted part of the array
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swap the minimum element with the first element in the unsorted part
    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
}

selectionSort(Arr);
console.log(Arr);
