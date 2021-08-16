console.log("Hello world")

function adding (a, b) {
    let answer = a + b;
    console.log(answer);
}

adding(12, 6);

function changenum(whichnumber, newnum) {
    const number = document.getElementById(whichnumber);
    number.innerHTML = newnum;
    console.log(whichnumber);
    console.log(newnum);
    console.log(number);
}

changenum("firstnum", '35');