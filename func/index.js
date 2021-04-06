// function kq() {
//     alert('hi Nam');

// }


///// function nhieu doi so 
// function sayhi(name) {
//     alert('hi' + name);
//     alert(`${name},function is great`)
// }

// function sayhi(name, comment) {
//     alert('hi' + name);
//     alert(`${name},${comment}`);
// }
// sayhi(`Nam, Function is great`);
// sayhi(`Duyen, Function is great`);


/// call back function

// function sayhi(name) {
//     alert('hi' + name);

// }

// function testsay() {
//     alert('hello im here');


// }

// function saygoodbye(name) {
//     alert('good bye' + name)
// }
// testsay(sayhi('Duong'));
// testsay(saygoodbye('llll'));

////arrow fuction 
//// settime out 


// const d = document.getElementById('msg');
// const d = document.getElementById('msg');
// d.textContent = 'Hi there';



//// su kien cho click
// const d = document.getElementById('msg');
// d.addEventListener('click', () => {
//     alert('say hello');
// });


const d = document.getElementById('msg');
d.insertAdjacentHTML('beforeend',
    `<div>Cool</div>`
)