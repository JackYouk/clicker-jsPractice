const containerDiv = document.querySelector('.container');

const todos = [
    {
        todo: 'Challenge 2 homework',
        author: "Moni",
    },
    {
        todo: 'makeup',
        author: 'nolan',
    },
    {
        todo: 'haircut',
        author: "angie",
    },
];

for (let i=0; i < todos.length; i++){
    const wrapperDiv = document.createElement('div');
    const h1TodoText = document.createElement('h1');
    const h2AuthorText = document.createElement('h2');
    h1TodoText.textContent = `Todo: ${todos[i].todo}`;
    h2AuthorText.textContent = `Author: ${todos[i].author}`;

    wrapperDiv.appendChild(h1TodoText);
    wrapperDiv.appendChild(h2AuthorText);
    containerDiv.appendChild(wrapperDiv);
}


















// // const clickMeBtn = document.getElementById('clickMe');

// // clickMeBtn.addEventListener('click', function(){
// //     console.log('Manny is hungry');
// // });





// const nums = [1,2,3,4,5];

// //const doubledNumsAF = nums.map(currentElement => currentElement *2);
// const mapper = (array, callbackFn) => {
//     const mappedValues = [];
//     for (let i = 0; i <array.length; i++){
//         mappedValues.push(callbackFn(array[i], i, array));
//     }

//     return mappedValues;
// };

// const tripled = mapper(nums, num => num *3);
// console.log(tripled);




// // nums.forEach(num => console.log(num));
// const eacher = (array, callbackFn) => {
//     for (let i = 0; i < array.length; i++){
//         callbackFn(array[i], i, array);
//     }
// };

// eacher(nums, console.log)