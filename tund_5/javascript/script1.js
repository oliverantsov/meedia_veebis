let message = "Töötab!"; //varem oli var
let picUrl = "../../../~rinde/media/photos/TLU_600x400/";
let picNamePrefix = "tlu_";
let picExt = ".jpg";
let minPicNum = 1;
let maxPicNum = 43;

window.onload = function() {
    //alert(message);
    console.log("Sõnum on: " + message);
    putOpenTime();
    putRandomPic();
    clockTick();
    //setInterval(300,clockTick);
}

function putOpenTime() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();
    document.getElementById("open_message").innerHTML = "Leht avati kell " + currentHour + ":" + currentMinute + ":" + currentSecond + ".";
}

function putRandomPic() {
    let randomNum = minPicNum + Math.round(Math.random() * (maxPicNum - minPicNum));
    document.getElementById("tlu_pic").src = picUrl + picNamePrefix + randomNum + picExt;
}

function clockTick() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();
    let secAngle = currentSecond * 6;
    let minAngle = currentMinute * 6 + (secAngle / 60);
    let hourAngle = currentHour * 30 + ((currentMinute * 6) / 12);
    document.getElementById("secondhand").style.transform = "rotate(" + secAngle + "deg)";
    document.getElementById("minutehand").style.transform = "rotate(" + minAngle + "deg)";
    document.getElementById("hourhand").style.transform = "rotate(" + hourAngle + "deg)";
    // setTimeout(1000,clockTick);
    requestAnimationFrame(clockTick);
}