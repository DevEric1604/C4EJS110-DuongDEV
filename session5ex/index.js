// câu 1.1

let i = Math.random();
console.log(i);


// câu 1.2 
const num = [2, 5, 6, 9, 10];

const random = Math.floor(Math.random() * num.length);

console.log(num[random]);



let quiz = [{
        question: 'which fictional  detective  lived at 221b baker street ',
        choices: [{
                name: 'watson ',
                rightchoice: true,
            },
            {
                name: 'Sam Spade ',
                rightchoice: false,
            },
            {
                name: 'Scuibidu',
                rightchoice: false,
            },
            {
                name: 'Selock holmes',
                rightchoice: false,
            }
        ],
    },
    {
        question: 'what sweet food made by bees using netar from flower ? ',
        choices: [{
                name: 'Bread ',
                rightchoice: false,
            },
            {
                name: 'honey ',
                rightchoice: false,
            },
            {
                name: 'sugar',
                rightchoice: false,
            },
            {
                name: 'potent',
                rightchoice: true,
            }
        ],
    },

];