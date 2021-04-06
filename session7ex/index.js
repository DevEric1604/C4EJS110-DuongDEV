const d = document.getElementById('list');
for (let i = 0; i < 3; i++) {
    d.insertAdjacentHTML('beforbegin', `<li>${i}</li>`)
}

//// bai 1
console.log('1-d,2-a,3-c,4-b');



function bai2() {
    i = 0;
    setInterval(() => {
        const d = document.getElementById('bai2');
        d.textContent = i;
        i++;
    }, 1000);
}
bai2()



function bai3() {
    console.log('let không tồn tại bên ngoài khi khai báo trong 1 function');
    console.log('let không tồn tại bên ngoài khi khai báo trong 1 function');
}

function bai4() {
    var x = document.getElementsByTagName("li");
    for (i = 0; i < x.length; i++) {
        console.log(x[i]);
    }
}

function bai5() {
    var x = document.getElementsByClassName("singer");
    for (i = 0; i < x.length; i++) {
        console.log(x[i]);
    }

    var x = document.getElementById("singer1");
    x.remove();
}


function bai71() {
    var bt1 = document.getElementById("button1");
    bt1.addEventListener('click', (e) => {
        console.log(e.target);
    });
    var bt2 = document.getElementById("button2");
    bt2.addEventListener('click', (e) => {
        console.log(e.target);
    });

}


function bai72() {
    var bt1 = document.getElementById("button1");
    bt1.addEventListener('keydown', (e) => {
        console.log(e.key);
    });
    console.log('sau khi bấm button hoặc phím bất kì thì in ra . ');

}

function bai8(name, wish)



{
    alert(`Tôi là ${name}. Điều ước trong năm nay là ${wish}!`);
}
bai8('Dương', 'Giàu')

function bai10() {
    let name = document.getElementById("name").value;
    var wish = document.getElementById("wish").value;
    cau8(name, wish);
}