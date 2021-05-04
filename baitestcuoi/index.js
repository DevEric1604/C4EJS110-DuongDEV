var sxNumber = 30;
var input = document.querySelector('number-1');
var kq = Math.round(10 * Math.random());

function playgame() {

    if (input == kq) {
        alert('Chúc Mừng bạn đã trúng thưởng ');
    } else {
        alert('số khác  ' + kq + ' chúc bạn may mắn lần sau');

    }

}