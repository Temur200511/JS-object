// const n = 3;
// const obj = { a: 2, b: 3, c: 4 };
// const res = Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, value * n]));
// console.log(res);




// const books = [
//     { title: "Halqa", author: "Akrom Malik", read: false },
//     { title: "Dunyoning ishlari", author: "O‘tkir Hoshimov", read: true },
//     { title: "Iymon", author: "Shayx Muhammad Sodiq Muhammad Yusuf", read: true }
//   ];
  
//   books.forEach(book => {
//     const status = book.read ? "o‘qilgan" : "o‘qilmagan";
//     console.log(`${book.author} ning ${book.title} kitobi ${status}`);
//   });
  



// const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const count = animals.reduce((acc, animal) => {
//   acc[animal] = (acc[animal] || 0) + 1;
//   return acc;
// }, {});
// console.log(count);



// const people = [
//     { name: 'Jalol', age: 13 },
//     { name: 'Malik', age: 56 },
//     { name: 'Ravshan', age: 45 },
//     { name: 'Nazim', age: 67 },
//     { name: 'Jasur', age: 65 }
//   ];
  
//   const ages = people.map(person => person.age);
//   const youngest = Math.min(...ages);
//   const oldest = Math.max(...ages);
//   const difference = oldest - youngest;
  
//   console.log(difference);
  

// function minMaxWord(sentence) {
//     const words = sentence.split(' ');
//     const minWord = words.reduce((shortest, word) => word.length < shortest.length ? word : shortest, words[0]);
//     const maxWord = words.reduce((longest, word) => word.length > longest.length ? word : longest, words[0]);
//     return { minWord, maxWord };
//   }
  
//   console.log(minMaxWord("Men dasturlash kursida o‘qiyman"));
  


// const calculateSum = (...nums) => {
//     const sum = nums.reduce((total, num) => total + num, 0);
//     return [nums.length, sum];
//   };
  
//   console.log(calculateSum(1, 22, 3)); // [3, 26]
  

