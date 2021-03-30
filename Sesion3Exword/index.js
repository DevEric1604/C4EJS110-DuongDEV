// câu 1 
let a = 1;
let b = 2;
console.log(a, b);
[a, b] = [b, a];
console.log(a, b); {
    let a = 1;
    let b = 2;
    console.log(a, b);
    let temp;
    temp = a;
    a = b;
    b = temp;
    console.log(a, b);
}
//câu 2
{
    var str = 'hello beauty there';
    var arr = str.split(" ");
    console.log(arr[0]);
}
//câu 3 
{
    const a = [4, 5, 7, -8];
    console.log(...a);
}
//câu 4 
{
    let shop = [jeans, t - shirt, socks];
    let task = prompt('Hi there, welcome to shop admin panel, what do you want(c,r,u,d)');
    if (task = 'c') {
        let item = prompt('name_newItem');
        shop.push(newItem);
        console.log(...shop);
        alert('done');
    } else if (task = 'r') {
        console.log(...shop);
    } else if (task = 'u') {
        let position = prompt('position_item');
        let newName = prompt('newName_item');
        if (position <= shop.length) {
            shop[position] = newName;
            console.log(...shop);
        } else alert('not supported');
    } else if (task = 'd') {
        let delPosition = prompt('enter the position you want to delete');
        shop.splice(delPosition, 1);
    } else alert('This command is not supported');
}
//câu 5 
{
    let num = prompt('enter a sequence of numbers, separated by commas');
    let arr = num.split(",");
    console.log(...arr);
    let sum;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    alert(`the sum of them is ${sum}`);
}
//câu 6
{
    let num = prompt('enter a sequence of numbers, separated by commas');
    let arr = num.split(",");
    console.log(...arr);
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    alert(`số nhỏ nhất  ${min}`);
}
//câu 7
{
    const arr = [1, 2, 3, 4, 5];
    let i = 0;
    let num = Number(prompt('enter a number'));
    if (num = !arr[i]) {
        if (i < arr.length) {
            i++;
        } else alert('not found');
    } else alert(i);
}
//câu 8
let sheepSizes = [5, 7, 300, 90, 24, 50, 75];
console.log('Im hung and here are my sheep sizes: ');
console.log(sheepSizes.join(' '));
console.log('Now my biggest sheep has size ' + Math.max.apply(null, sheepSizes) + ', let shave it');
console.log('After shearing, here is my flock');
sheepSizes[sheepSizes.indexOf(Math.max.apply(null, sheepSizes))] = 8;
console.log(sheepSizes.join(' ')); {
    let month = 1;
    for (let i = month; i <= 3; i++) {
        if (i != 3) {
            console.log('MONTH ' + i);
            console.log('One month has passed, my sheeps have grown, here are their sizes');
            for (let i in sheepSizes) {
                sheepSizes[i] += 50;
            }
            console.log(sheepSizes.join(' '));
            console.log('Now my biggest sheep has size ' + Math.max.apply(null, sheepSizes) + ', let shave it');
            sheepSizes[sheepSizes.indexOf(Math.max.apply(null, sheepSizes))] = 8;
            console.log('After shearing, here is my flock');
            console.log(sheepSizes.join(' '));
        } else {
            console.log('MONTH ' + i);
            console.log('One month has passed, my sheeps have grown, here are their sizes');
            for (let i in sheepSizes) {
                sheepSizes[i] += 50;
            }
            console.log(sheepSizes.join(' '));

        }
    }
    let sum = 0;
    for (let i in sheepSizes) {
        sum += sheepSizes[i];
    }
    console.log('My flock has size in total: ' + sum);
    console.log('I would get ' + sum + ` * 2$ = ` + sum * 2);
}