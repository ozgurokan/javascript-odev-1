
let userName = prompt("İsmin ne arkadaş: ")
document.querySelector("#myName").innerHTML = userName

function showTime() {
    let date = new Date()
    let day = date.toLocaleString('tr-TR', {weekday: 'long'});
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    document.querySelector("#myClock").innerHTML = `${h<10 ? "0"+h: h}:${m<10 ? "0"+m: m}:${s<10 ? "0"+s: s} ${day}`
    setTimeout('showTime()',1000)
}
showTime()

