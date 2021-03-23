// // // let name = ' Dương ';
// // // console.log('Bài của: ' + ' ${name }');
// // // console.log('bài 1.1: ' + 'var khai báo biến có thể sử dụng ở trong phạm vi funtion ' + '\br' + 'const được sử dụng khai báo hằng số ');
// // // console.log('bài 1.2: ' + 'let khai báo biến có thể truy cập ở trong block ' + '\br' + 'var khai báo biến có thể sử dụng ở trong phạm vi funtion  ');
// // // console.log('bài 1.3' + 'let khai báo biến có thể truy cập ở trong block' + '\br' + 'const được sử dụng khai báo hằng số');
// // // console.log('bài 1.4 ' + 'var su dụng trong block-scope ' + 'let sử dụng truy cập trong block-scope' + 'const truy cập hắng số ');



// // console.log("bài 2.1 : " + 'trong JavaScript, điều kiện Boolean thường sử dụng để quyết định đoạn mã nào được thực thi'+'thực thi (như trong lệnh if (en-US)) hay lặp lại (trong vòng lặp for).');
// // console.log ('bài 2.2 : Boolean trả về hai giá trị true hoặc false ');





// // console.log('Bai3.1 : ');
// // var i = 7;
// // for (i = 0; i < 7; i++) {
// //     console.log(i);
// // }

// console.log('Bài 3.2 : ');
// var x = prompt('Mời nhập số : ');
// var i = 0;
// do {
//     console.log(i);
//     i++;
// }
// while (i > 0 && i < x)

// console.log('Bài 3.3 : ');
// var x = prompt(' Mới bạn nhập sô : ');
// var i = 3;
// do {
//     console.log(i);
//     i++
// } while (
//     i > 3 && i < x
// );

// console.log('Bài 3.4');
// var x = prompt('Mời nhập số cuối ');
// var i = prompt('mời nhập số đầu  ');
// do {
//     console.log(i);
//     i++;
// } while (i < x);

// var x = Number(prompt('mới nhập số cuối '));
// var i = Number(prompt('mới nhập số đầu  '));
// do {
//     console.log(i);
//     i += 3;

// } while (i < x);

// var x = Number(prompt(' Mời Nhập số đầu '));
// var s = Number(prompt(' Mời Nhập biến số '));
// var i = Number(prompt('Mời nhập số cuối '));
// for (x; x < i; x += s) {
//     console.log(x);
// };



// console.log('Bài 4 :  ');
// var n = prompt('Nhap n:');
// var gt = 1;
// for (i = 1; i <= n; i++) {
//     gt*=i;
// }
// console.log(gt);



// // console.log('Bài 5 ');
// var old = prompt('Mời nhập tuổi ');
// if (old < 14) {
//     console.log(' Bạn không đủ tuổi đễ xem ');
// } else {
//     console.log('Xin chào e yêu ');
// }


// console.log('Bài 6');
// var so = prompt('Mời bạn nhập số ');
// if (so <= 4) {
//     console.log('số nằm trong khoảng bé ');
// } else if (so < 9) {
//     console.log('số nằm trong khoảng lớn ');
// }

// console.log('bài 7 ');
// var x = Number(prompt('mời nhập số '));
// var y = Number(prompt('mời nhập số '));
// if (x > y / 2) {
//     console.log('số ' + x + 'lớn hơn 1 nửa của số ' + y);
// } else {
//     console.log('số ' + x + 'bé hơn 1 nửa của số  ' + y)
// }



// console.log('bài 8 : ');
// var x = Number(prompt('Mời nhập số '));
// if (x % 2 == 0) {
//     console.log('Đây là số chẵn');
// } else {
//     console.log(' đây là số lẻ ');
// }


// console.log('Bài 9.1');
// var x = 6;
// var l, h;
// for (l = 0; l < x / 2; l++) {
//     console.log('L');
// }
// for (h = 0; h < x / 2; h++) {
//     console.log('H');
// }


// console.log('Bai 9.2');
// let x = Number(prompt('Nhập X ='));
// let l;
// let h;
// for (l = 0; l < x / 2; l++) {
//     console.log('L');
// }
// for (h = 0; h < x - l; h++) {
//     console.log('H');
// }


// console.log('Bài 9.3');
// for (let i = 0; i < 4; i++) {
//     console.log(0);
//     console.log(1);
// }

// console.log('Bài 9.4');
// var x = prompt('Nhập số  x =');
// for (let i = 0; i < x; i++) {
//     console.log(0);
//     console.log(1);
// }

// console.log('bài 10');
// var x = Number(prompt('Mời nhập cân nặng '));
// var y = Number(prompt('Mời nhập chiều cao '));
// y = y / 100;
// var i = x / (y * y);
// if (i < 16) {
//     console.log('bạn thiếu cân nặng');
// } else if (i > 16 && i < 18.5) {
//     console.log('bạn thiếu cân nặng');
// } else if (i > 18.5 && i < 25) {
//     console.log('bạn bình thường');
// } else if (i > 25 && i < 30) {
//     console.log('bạn thừa cân ');
// } else {
//     console.log('bạn béo phì ');
// }