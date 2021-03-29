let message = "Töötab!"; //varem oli var
let picUrl = "../../../~rinde/media/photos/TLU_600x400/";
let picNamePrefix = "tlu_";
let picExt = ".jpg";
let minPicNum = 1;
let maxPicNum = 43;
let picNum = 1;
let picChange = 0;

window.onload = function() {
    //alert(message);
    console.log("Sõnum on: " + message);
    putOpenTime();
    putRandomPic();
    clockTick();
    //setInterval(300,clockTick);
    setButtons();
}

function setButtons() {
    document.getElementById("nextphoto").addEventListener("click", nextPhoto);
    document.getElementById("prevphoto").addEventListener("click", prevPhoto);
    //panen foto opacity siirde lõppu kuulama      transitionstart      transitionend
    document.getElementById("tlu_pic2").addEventListener("transitionend", enableButtons);
    document.getElementById("anim_btn").addEventListener("click", toggleAnim);
    document.getElementById("stage").addEventListener("animationstart", animInfo);
    document.getElementById("stage").addEventListener("animationend", animInfo);
    document.getElementById("stage").addEventListener("animationiteration", animInfo);
}

function nextPhoto() {
    picNum ++;
    if(picNum > maxPicNum){
        picNum = minPicNum;
    }
    putPhoto();
}

function prevPhoto() {
    picNum --;
    if(picNum < minPicNum){
        picNum = maxPicNum;
    }
    putPhoto();
}

function enableButtons() {
    document.getElementById("nextphoto").disabled = false;
    document.getElementById("prevphoto").disabled = false;
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
    picNum = randomNum;
    putPhoto();
}

function putPhoto() {
    document.getElementById("nextphoto").disabled = true;
    document.getElementById("prevphoto").disabled = true;
    if(picChange % 2 == 0){
        document.getElementById("tlu_pic2").src = picUrl + picNamePrefix + picNum + picExt;
        document.getElementById("tlu_pic2").style.opacity = 1;
    } else {
        document.getElementById("tlu_pic").src = picUrl + picNamePrefix + picNum + picExt;
        document.getElementById("tlu_pic2").style.opacity = 0;
    }
    picChange ++;
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

function toggleAnim() {
    //console.log(document.getElementById("truckarea").style.animationPlayState);
    let allItems = document.getElementById("stage").getElementsByTagName("*");
    //console.log(allItems);
    if(document.getElementById("anim_btn").innerHTML == "Käivita animatsioon"){
        document.getElementById("anim_btn").innerHTML = "Peata animatsioon";
        //document.getElementById("truckarea").style.animationPlayState = "running";
        for(let i = 0; i < allItems.length; i ++){
            allItems[i].style.animationPlayState = "running";
        }
    } else {
        document.getElementById("anim_btn").innerHTML = "Käivita animatsioon";
        //document.getElementById("truckarea").style.animationPlayState = "paused";
        for(let i = 0; i < allItems.length; i ++){
            allItems[i].style.animationPlayState = "paused";
        }
    }
}

function animInfo(e) {
    if(e.type == "animationend"){
        //console.log(e.animationName);
        //console.log(e.target.id);
        if(e.target.id == "truckarea"){
            let animdelay = 1 + Math.round(Math.random() * 5);
            let animduration = 8 + Math.round(Math.random() * 5);
            e.target.style.animationDelay = animdelay + "s";
            e.target.style.animationDuration = animduration + "s";
            if(e.animationName == "drive"){
                e.target.style.animationName = "driveback";
            } else {
                e.target.style.animationName = "drive";
            }
            console.log("peale truckareat");
        }
        if(e.target.id == "pic_spaceship"){
            let animdelay = 1.5;
            let animduration = 3 + Math.round(Math.random() * 1.3);
            e.target.style.animationDuration = animduration + "s";
            e.target.style.animationDelay = animdelay + "s";
            e.target.style.animationName = "spaceship";
            console.log("peale spaceshipi");
        }
        if(e.target.id == "wm_wing"){
            let animdelay = 1;
            let animduration = 5 + Math.round(Math.random() * 5);
            e.target.style.animationDuration = animduration + "s";
            e.target.style.animationDelay = animdelay + "s";
            e.target.style.animationName = "spin";
            console.log("peale tuuleveskit");
        }
        if(e.target.id == "chopper_backrotor"){
            let animdelay = 1;
            let animduration = .0000002 + (Math.random() * 3);
            e.target.style.animationDuration = animduration + "s";
            e.target.style.animationDelay = animdelay + "s";
            e.target.style.animationName = "spin";
        }
        if(e.target.id == "sun_img"){
            let animdelay = 1;
            let animduration = 8 + Math.round(Math.random() * 5);
            e.target.style.animationDuration = animduration + "s";
            e.target.style.animationDelay = animdelay + "s";
            e.target.style.animationName = "spin";
        }
    }
}
