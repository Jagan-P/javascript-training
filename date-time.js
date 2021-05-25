new Date()
// Sun May 23 2021 14:45:29 GMT+0530 (India Standard Time)
new Date().toLocaleDateString()
// "5/23/2021"
new Date().toLocaleDateString()
// "5/23/2021"
new Date().toLocaleDateString('US')
// "5/23/2021"
new Date().toLocaleDateString('UK')
// "23.05.2021"
new Date().toLocaleDateString('IN')
// "23/5/2021"
new Date().getDate()
// 23
new Date().getDay()
// 0
new Date().getFullYear()
// 2021

let startSeconds = new Date().getSeconds();
let showOfferAfter = 10000;

setTimeout(() => {
    alert("You got an offer");
}, showOfferAfter);

if(new Date().toLocaleDateString()=="5/24/2021") {
    alert("Do something. Today is 23-May-2021");
}


// to extract date of a day from a string like "Tue May 25 2021 15:06:15 GMT+0530 (India Standard Time)"
new Date().toString().split(" ")[2]
// "25"