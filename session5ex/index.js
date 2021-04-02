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

//cau 1.3
{
    let question = [{
                quizzes: "Biển nào lớn nhất ? ",
                listAnswer: ['Thái Bình Dương', 'Đại tây dương', 'Ấn độ dương ', 'bắc băng dương '],
                answerCorrect: 4
            },
            {
                quizzes: "Động vật nào là động vật có vú?",
                listAnswer: ['Mèo', 'Nhện', 'cá', 'Trăn'],
                answerCorrect: 1
            },
            {
                quizzes: "Quốc gia bé nhất thế giới ",
                listAnswer: ['Italy', 'vatican', 'Mỹ', 'Pháp'],
                answerCorrect: 3
            },
            {
                quizzes: "Quốc gia có diện tích lớn nhất?",
                listAnswer: ['Nga', 'Canada', 'Hoa Kỳ', 'Trung quốc'],
                answerCorrect: 1
            }
        ]
        //cau 1.4

    let ques = Math.floor(Math.random() * question.length);
    let qizz = question[que];
    let res = qizz.quizzes;
    for (let i in qizz.listAnswer) {
        res += `\n${Number(i) + 1}. ${qizz.listAnswer[i]}`;
    }
    let ans = Number(prompt(res));
    //cau 1.5

    if (ans == ques.answerCorrect) {
        alert("That's correct!");
    } else {
        alert("Not correct!");
    }
    //cau 1.6
    let questionAnswer = {};
    let countQuestion = question.length;
    let countQuestionAnswer = 0;
    let countCorrect = 0;
    while (countQuestionAnswer != countQuestion) {
        let kq = Math.floor(Math.random() * question.length);
        if (!questionAnswer[kq]) {
            questionAnswer[kq] = 1;
            countQuestionAnswer++;
            qizz = question[kq];
            let res = qizz.quizzes;
            for (let i in qizz.listAnswer) {
                res += `\n${Number(i) + 1}. ${qizz.listAnswer[i]}`;
            }
            let ans = Number(prompt(res));
            if (ans == qizz.answerCorrect) {
                countCorrect++;
            }
        }
    }
    alert("We are out of question!");

    //cau 1.7
    alert(`You answered correctly ${countCorrect} out of ${question.length} questions.`)

    //cau 2.1
    {
        let word = ['to', 'be', 'that', 'of', 'elon', 'to', 'this', 'now', 'back', 'cool', 'hey', 'love', 'of', 'life', 'that', 'rain', 'summer', 'color', 'now', 'of', 'hat', 'late', 'sorry', 'my', 'team'];
        let countWord = {};
        for (let x of word) {
            if (countWord[x]) {
                countWord[x]++;
            } else {
                countWord[x] = 1;
            }
        }
        for (let x in countWord) {
            console.log(`${x}: ${countWord[x]}`);
        }
    }
    // cau 2.2
    {
        const inventory = [{
                    name: 'HP Envy 13aq',
                    price: 21000,
                    brand: 'HP',
                    quantity: 5,
                },
                {
                    name: 'Dell XPS 9370',
                    price: 30000,
                    brand: 'Dell',
                    quantity: 1,
                },
                {
                    name: 'Dell Inspiron 3567',
                    price: 9300,
                    brand: 'Dell',
                    quantity: 12,
                },
                {
                    name: 'Dell Latitude E5450',
                    price: 8600,
                    brand: 'Dell',
                    quantity: 2,
                },

                {
                    name: 'Asus Zenbook',
                    brand: 'Asus',
                    price: 20000,
                    quantity: 4,
                },
                {
                    name: 'HP Pavilion',
                    brand: 'HP',
                    price: 14000,
                    quantity: 7,
                },
            ]
            //cau 2.3
        let inventoryByGroup = {};
        for (let i of inventory) {
            let brand = i.brand.toLocaleLowerCase();
            if (!inventoryByGroup[brand]) {
                inventoryByGroup[brand] = [];
                inventoryByGroup[brand].push(i);
            } else {
                inventoryByGroup[brand].push(i)
            }
        }
        console.log(inventoryByGroup)
            //cau2.4
        let brand = prompt("Which brand?");
        brand = brand.toLowerCase();
        if (inventoryByGroup[brand]) {
            alert(`There are ${inventoryByGroup[brand].length} generations of '${brand.toUpperCase()}' in inventory`);
        } else {
            alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
        }
        //cau 2.5
        let brand = prompt("Which brand?");
        brand = brand.toLowerCase();
        if (inventoryByGroup[brand]) {
            let geren = "";
            for (let x of inventoryByGroup[brand]) {
                geren += x.name + `\n`;
            }
            alert(`There are ${inventoryByGroup[brand].length} generations of '${brand.toUpperCase()}' in inventory:\n${geren}`);
        } else {
            alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
        }
        //cau 2.6
        let brand = prompt("Which brand?");
        brand = brand.toLowerCase();
        if (inventoryByGroup[brand]) {
            let geren = "";
            let detai = 0;
            for (let x of inventoryByGroup[brand]) {
                geren += x.name + `\n`;
                detai += x.quantity * x.price;
            }
            alert(`There are ${inventoryByGroup[brand].length} generations of '${brand.toUpperCase()}' in inventory:\n\n${geren}\nWith total value: ${detai}K`);
        } else {
            alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
        }
        //cau 2.7
        let brand = prompt("Which brand?");
        brand = brand.toLowerCase();
        if (inventoryByGroup[brand]) {
            let geren = "";
            let detai = 0;
            for (let x of inventoryByGroup[brand]) {
                geren += x.name + `\n`;
                detai += x.quantity * x.price;
            }
            detai = detai * 1000;
            alert(`There are ${inventoryByGroup[brand].length} generations of '${brand.toUpperCase()}' in inventory:\n\n${geren}\nWith total value: ${detai.toLocaleString("da-DK")}VND`);
        } else {
            alert(`There are 0 generations of '${brand.toUpperCase()}' in inventory`)
        }
    }
}