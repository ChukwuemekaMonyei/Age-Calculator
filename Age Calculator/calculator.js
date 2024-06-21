// document.getElementById("date").addEventListener('focus', function (event) {
//     event.target.showPicker();
// });

let userInput = document.getElementById('date');
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById('result');

function calculateAge() {
    let birthDate = new Date(userInput.value);
    
    let d = birthDate.getDate();
    let m = birthDate.getMonth() + 1;
    let y = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y;

    if (m2 >= m) {
        m3 =  m2 - m;
    } else {
        y3--;
        m3 = 12 + m2 - m;
    }

    if (d2 >= d) {
        d3 =  d2 - d;
    } else {
        m3--;
        d3 = getDaysInMonths(y, m) + d2 - d;
    }
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }
    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
}

function getDaysInMonths(year, month) {
    return new Date(year, month, 0).getDate();
}