//   ــــــــــــــــــTrayingـــــــــــــــــــــــ
//// $(".close").click(() => {
// 	$(this).toggle(
// 		    function () {
//   				$("#navBar").animate({ width: 260 }, 1000);
// 			},
// 		    function () {
//   				$("#navBar").animate({ width: 0 }, 1000);
// 			}
// 	)
//   $("#navBar").animate(
//     { height: 0 },
//     1000,
//     $("#links").animate({ display: "none" })
//   );
// });

// $(".close").click(function () {
//   $(this).toggle(
//     function () {
//       $("#navBar").animate({ width: 0 }, 1000);
//       $("#navBar").animate(
//         { height: 0 },1000,
//         $("#links").animate({ display: "none" })
//       );
//     },
//     function () {
//       $("#navBar").animate({ width: "260px" }, 1000);
//       $("#navBar").animate(
//         { height: "100vh" },
//         1000,
//         $("#links").animate({ display: "block" })
//       );
//     }
//   );
// });
//  ________________solve1____________________
// $('.click').click(()=>{
//     $('#navBar').animate({width:'250px'},1000)
//     $('#navBar').animate({height:'100vh'},1000,
//     )
// })


// $('#close').click(()=>{
//     $('#navBar').animate({width:'0'},1000)
//     $('#navBar').animate({height:'0'},1000,
//     $('#links').animate({display:'none'}))
// })
// __________________solve2__________________
function openNav() {
    document.getElementById("navBar").style.width = "250px";
    document.getElementById("navBar").style.transition = "all .5s ease-in-out";
    document.getElementById("links").style.display = "block";
} 
function closeNav() {
    document.getElementById("navBar").style.width = "0";
    document.getElementById("links").style.display = "none"
}

// ==============================Details==================

var hideAll = $(".card .card-body").hide();

$(".card-head").click(function(){
	hideAll.slideUp();
	$(this).next().slideToggle();
})

// ==============================counter==================
// millsecond == 1000sec
let countDownDate = new Date("april 29,2025 23:59:59 ").getTime();
console.log(countDownDate);

let counter = setInterval(() => {
let dateNow = new Date().getTime();
let dateDiff = countDownDate - dateNow;
let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
let second = Math.floor((dateDiff % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days < 10 ? `0${days}` : days;
document.getElementById("hours").innerHTML = hours < 10 ? `0${hours}` : hours;
document.getElementById("minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
document.getElementById("second").innerHTML = second < 10 ? `0${second}` : second;

if ((dateDiff = 0)) {
clearInterval(counter);
}
}, 1000);
// ==============================Text area==================
var maxLength = 100;
$('#textarea').keyup(function() {
var textlen = maxLength - $(this).val().length;
if(textlen > 0){
$('#rchars').text(textlen);
    } else {
    $('#rchars').text("your available character finished");
    }
});