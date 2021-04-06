let sound_url = "../../../~rinde/media/sounds/kellaheli/";
let clock_speaker = new Audio();
let time_words = [];
let bell = new Audio();
let prev_hour;
var i;
let alarm_sound = new Audio();


function init_clock() {
    document.getElementById("clock_speak_btn").addEventListener("click", tell_time);
    prev_hour = new Date().getHours();
    clockTick();
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
    /*kas lüüa kella?
    kavalam on kontrollida, kas document.getElementById("allow_bell_btn").checked ja tundide arv erineb eelmise tsükli tundidest
    ehk currentHour != prev_hour
    if(currentMinute == 0 && currentSecond == 0 && currentTime.getMilliseconds() < 1000/60 && document.getElementById("allow_bell_btn").checked){}
        loendur, mitu korda vaja lüüa
    setTimeout(1000,clockTick);*/
    hourly_bell();
    requestAnimationFrame(clockTick);
}

/*function bell_preparation() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();
    let bell_counter;
    if(currentMinute == 0 && currentSecond == 0 && currentTime.getMilliseconds() < 1000/60 && document.getElementById("allow_bell_btn").checked){
        if(currentHour > 12){
            regularHour = currentHour - 12;
            bell_counter = regularHour;
        } else {
            bell_counter = currentHour;
        }
        for (i = 0; i <= bell_counter; i++){
            bell.addEventListener("ended", hourly_bell);
        } 
    }
    if(currentSecond == 0 && document.getElementById("allow_bell_btn").checked){
        console.log("Töötab!");
        bell.addEventListener("ended", hourly_bell);
        hourly_bell();
    }
}*/

function hourly_bell() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    let currentSecond = currentTime.getSeconds();
    let bell_counter;
    bell.src = sound_url + "kell.mp3";
    if(currentMinute == 0 && currentSecond == 0 && currentTime.getMilliseconds() < 1000/60 && document.getElementById("allow_bell_btn").checked){
        if(currentHour > 12){
            regularHour = currentHour - 12;
            bell_counter = regularHour;
        } else {
            bell_counter = currentHour;
        }
        for (i = 0; i <= bell_counter; i++){
            bell.play();
            //bell.removeEventListener("ended", hourly_bell);
        } 
    }
    if(currentSecond == 30 && document.getElementById("allow_bell_btn").checked){
        console.log("Töötab!");
        bell.play();
        //bell.addEventListener("ended", hourly_bell);
    }
}

function tell_time() {
    time_words.push("kellon");
    let currentTime = new Date();
    num_to_words(currentTime.getHours());
    time_words.push("ja");
    num_to_words(currentTime.getMinutes());
    if(currentTime.getMinutes() == 1){
        time_words.push("minut");
    } else {
        time_words.push("minutit");
    }
    //console.log(time_words);
    document.getElementById("clock_speak_btn").removeEventListener("click", tell_time);
	document.getElementById("clock_speak_btn").disabled = true;
	clock_speaker.addEventListener("ended", speak_time);
	speak_time();
}

function speak_time() {
    if(time_words.length > 0){
        clock_speaker.src = sound_url + time_words[0] + ".mp3";
        clock_speaker.play();
        time_words.shift();
    } else {
        clock_speaker.removeEventListener("ended", speak_time);
		document.getElementById("clock_speak_btn").disabled = false;
		document.getElementById("clock_speak_btn").addEventListener("click", tell_time);
    }
}

function num_to_words(num_value) {
    if(num_value <= 10){
        time_words.push(num_value);
    } else {
        let tens = Math.floor(num_value / 10);
        let ones = num_value % 10;
        if(tens == 1){
            time_words.push(ones);
            time_words.push("teist");
        } else {
            time_words.push(tens);
            time_words.push("kymmend");
            if(ones > 0){
                time_words.push(ones);
            }
        }
    }
    
}

setInterval(function alarm_clock() {
    let currentTime = new Date();
    let currentHour = currentTime.getHours();
    let currentMinute = currentTime.getMinutes();
    alarm_sound.src = "../mp3/SamsungWhistle.mp3";
    alarm_sound.volume = 0.5;
    alarm_sound.loop = true;
    var alarmHour = document.getElementById("alarm_hour_btn").value;
    var alarmMinute = document.getElementById("alarm_minute_btn").value;
    if (alarmHour <= 9){
        alarmHour = "0" + alarmHour;
    }
    if (alarmMinute <= 9){
        alarmMinute = "0" + alarmHour;
    }
    if (alarmHour == currentHour && alarmMinute == currentMinute && document.getElementById("alarm_set").checked == true){
        alarm_sound.play();
    }
},2000);

function alarm_clock_stop() {
    alarm_sound.src = "../mp3/SamsungWhistle.mp3";
    alarm_sound.loop = true;
    if (document.getElementById("alarm_set").checked == false){
        alarm_sound.pause();
    }
}

