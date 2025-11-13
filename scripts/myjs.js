window.addEventListener("load", startGame);
// window.addEventListener("load", playsong);

let heart;
let points;
let timeLeft;



function startGame() {

    // stop you won sound
    document.querySelector("#you_won_sound").pause();
    document.querySelector("#you_won_sound").currentTime = 0
    // hide screens
    document.querySelector("#empty_bg").classList.add("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#you_won").classList.add("hidden");
    document.querySelector("#empty_bg_you_won").classList.add("hidden");

    // add title screens
    document.querySelector("#game_background").classList.remove("hidden");
    document.querySelector("#title_screen").classList.remove("hidden");
    // INFO BUTTON OR GO BUTTON
    document.querySelector("#info_button").addEventListener("click", gameInstruction);
    document.querySelector("#go_button").addEventListener("click", start);

    document.querySelector("#info_button").addEventListener("click", clicksound);
    document.querySelector("#go_button").addEventListener("click", clicksound);
}

function gameInstruction() {
    // console.log("instruction");
    document.querySelector("#game_background").classList.add("hidden");
    document.querySelector("#empty_bg").classList.remove("hidden");
    document.querySelector("#instructions").classList.remove("hidden");
    document.querySelector("#play_button").addEventListener("click", start);
    document.querySelector("#exit_button").addEventListener("click", startGame);

    document.querySelector("#play_button").addEventListener("click", clicksound);
    document.querySelector("#exit_button").addEventListener("click", clicksound);



}
// showTime and startTime
function showTime() {
    console.log("showTime");
    document.querySelector("#time_board").textContent = "Time left:" + " " + timeLeft;
    timeLeft--;
    startTime();

}


function startTime() {
    console.log("startTime");
    if (timeLeft >= 0) {
        setTimeout(showTime, 1000);
    } else {
        gameOver();
    }
}

function start() {
    heart = 4;
    points = 0;
    timeLeft = 30;0 
    playsong();
    showTime();
    // stop you won sound
    document.querySelector("#you_won_sound").pause();
    document.querySelector("#you_won_sound").currentTime = 0
    // mute unmute
    document.querySelector("#unmute").addEventListener("click", muted);
    document.querySelector("#unmute").addEventListener("click", clicksound);

    document.querySelector("#mute").addEventListener("click", playAllSounds);
    //   song loop
    document.querySelector("#soundtrack").addEventListener("ended", playsong);
    // hide screens
    document.querySelector("#title_screen").classList.add("hidden");
    document.querySelector("#instructions").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#you_won").classList.add("hidden");
    document.querySelector("#empty_bg_you_won").classList.add("hidden");

    // unhide ui-elements
    document.querySelector("#game_background").classList.remove("hidden");
    document.querySelector("#time_board").classList.remove("hidden");
    document.querySelector("#health_board").classList.remove("hidden");
    document.querySelector("#score_board").classList.remove("hidden");
    // good cow
    document.querySelector("#a_container1").addEventListener("click", clickcow);
    addposition1();
    moveRight();
    document.querySelector("#a_container1").addEventListener("animationiteration", restart1);
    // good cowA
    document.querySelector("#a_containerA").addEventListener("click", clickcowA);
    addposition3();
    moveRightA();
    document.querySelector("#a_containerA").addEventListener("animationiteration", restart3);
    document.querySelector("#health_board").classList.add("hbg4");
    // devil cow
    document.querySelector("#a_container2").addEventListener("click", clickdevil_cow);
    document.querySelector("#a_container2").addEventListener("animationiteration", restart2);
    addposition2();
    moveLeft();
    // devil cowB
    document.querySelector("#a_containerB").addEventListener("click", clickdevil_cowB);
    document.querySelector("#a_containerB").addEventListener("animationiteration", restart4);
    addposition3();
    moveLeftB();
}
// animation for cow
function addposition1() {
    // console.log("addposition1");
    document.querySelector("#a_container1").classList.add("position1");

}

// animation for devil cow
function addposition2() {
    // console.log("addposition2");
    document.querySelector("#a_container2").classList.add("position2");
}
// animation for cowA and devil cow B
function addposition3() {
    // console.log("addposition3");
    document.querySelector("#a_containerA").classList.add("position3");
    document.querySelector("#a_containerB").classList.add("position3");

}

// animation for cow
function moveRight() {
    // console.log("moveRight");
    document.querySelector("#a_container1").classList.add("moveRight1");


}
// animation for cowA
function moveRightA() {
    // console.log("moveRighta");
    document.querySelector("#a_containerA").classList.add("moveRight2");

}


// animation for the devil cow
function moveLeft() {
    // console.log("moveLeft");
    document.querySelector("#a_container2").classList.add("moveLeft1");
}
// animation for the devil cow B
function moveLeftB() {
    // console.log("moveLeftB");
    document.querySelector("#a_containerB").classList.add("moveLeft2");
}
// animation for cow
function clickcow() {
    // console.log("clickcow");
    // sound
    playhappysound();
    // pause cow
    document.querySelector("#a_container1").classList.add("paused");

    // rotate cow
    document.querySelector("#cow").classList.add("rotate");

    points++;
    document.querySelector("#current_points").textContent = points;
    // restart the cows position
    document.querySelector("#cow").addEventListener("animationend", restart1);

    if (points === 10) {
        youWon();
    }
}

// animation for cowA
function clickcowA() {
    // console.log("clickcowA");
    // sound
    playhappysound();
    // pause cow
    document.querySelector("#a_containerA").classList.add("paused");

    // rotate cow
    document.querySelector("#cowA").classList.add("rotate");

    points++;
    document.querySelector("#current_points").textContent = points;
    // restart the cows position
    document.querySelector("#cowA").addEventListener("animationend", restart3);

    if (points === 10) {
        youWon();
    }
}


// animation for the devil cow
function clickdevil_cow() {
    // console.log("clickdevil_cow");
    // sound
    playevilsound();
    // pause cow
    document.querySelector("#a_container2").classList.add("paused");
    // rotate cow
    document.querySelector("#devil_cow").classList.add("rotate");
    // health-indicator reacts
    heart--;
    // visible change in health-indicator
    // document.querySelector("#current_heart").textContent = heart;
    let bgimg = "hbg" + heart;
    console.log(bgimg);
    document.querySelector("#health_board").classList = "";
    document.querySelector("#health_board").classList.add(bgimg);

    document.querySelector("#devil_cow").addEventListener("animationend", restart2);
    if (heart === 0) {
        gameOver();
    }
}
// animation for the devil cowB
function clickdevil_cowB() {
    // console.log("clickdevil_cowB");
    // sound
    playevilsound();
    // pause cow
    document.querySelector("#a_containerB").classList.add("paused");
    // rotate cow
    document.querySelector("#devil_cowB").classList.add("rotate");
    // health-indicator reacts
    heart--;
    // visible change in health-indicator
    // document.querySelector("#current_heart").textContent = heart;
    let bgimg = "hbg" + heart;
    console.log(bgimg);
    document.querySelector("#health_board").classList = "";
    document.querySelector("#health_board").classList.add(bgimg);

    document.querySelector("#devil_cowB").addEventListener("animationend", restart4);
    if (heart === 0) {
        gameOver();
    }
}
// animation for cow
function restart1() {
    // console.log("restart");
    // delete the classes for container and cow
    document.querySelector("#a_container1").classList = "";
    document.querySelector("#cow").classList = "";
    document.querySelector("#cow").removeEventListener("animationend", restart1);

    // jump a frame
    document.querySelector("#a_container1").offsetHeight;

    // random pos
    let rndPos = generateRandomNumber(3);
    console.log("Random position generated:" + rndPos);
    document.querySelector("#a_container1").classList.add("position" + rndPos);

    //  another mov
    let rndMov = generateRandomNumber(3);
    console.log("Random movement generated:" + rndMov);
    document.querySelector("#a_container1").classList.add("moveRight" + rndMov);
}

// animation for the devil cow
function restart2() {
    // console.log("restart");
    // delete the classes for container and cow
    document.querySelector("#a_container2").classList = "";
    document.querySelector("#devil_cow").classList = "";
    document.querySelector("#devil_cow").removeEventListener("animationend", restart2);
    // jump a frame
    document.querySelector("#a_container2").offsetHeight;
    let rndMov = generateRandomNumber(3);

    document.querySelector("#a_container2").classList.add("moveLeft" + rndMov);
    let rndPos = generateRandomNumber(3);

    document.querySelector("#a_container2").classList.add("position" + rndPos);

}

// animation for cowA
function restart3() {
    // console.log("restart");
    // delete the classes for container and cow
    document.querySelector("#a_containerA").classList = "";
    document.querySelector("#cowA").classList = "";
    document.querySelector("#cowA").removeEventListener("animationend", restart3);
    // jump a frame
    document.querySelector("#a_containerA").offsetHeight;
    let rndMov = generateRandomNumber(3);
    console.log("Random movement generated:" + rndMov);
    document.querySelector("#a_containerA").classList.add("moveRight" + rndMov);
    let rndPos = generateRandomNumber(3);
    console.log("Random position generated:" + rndPos);
    document.querySelector("#a_containerA").classList.add("position" + rndPos);

}

function restart4() {
    // console.log("restart4");
    // delete the classes for container and cow
    document.querySelector("#a_containerB").classList = "";
    document.querySelector("#devil_cowB").classList = "";
    document.querySelector("#devil_cowB").removeEventListener("animationend", restart4);
    // jump a frame
    document.querySelector("#a_containerB").offsetHeight;
    let rndMov = generateRandomNumber(3);
    document.querySelector("#a_containerB").classList.add("moveLeft" + rndMov);
    let rndPos = generateRandomNumber(3);

    document.querySelector("#a_containerB").classList.add("position" + rndPos);

}
// function for rndm pos and rndm mov
function generateRandomNumber(number) {
    // console.log(generateRandomNumber);
    let rndNo = Math.floor(Math.random() * number) + 1;
    // console.log("Random number generated:" + rndNo);
    return rndNo;
}


function gameOver() {
    console.log("gameover");
    


    // stop all other sounds
    stopAllSounds();
    // play game over sound
    gameoversound();
    // show game over screen
    document.querySelector("#game_background").classList.add("hidden");
    document.querySelector("#score_board").classList.add("hidden");
    document.querySelector("#current_points").textContent = "";
    document.querySelector("#health_board").classList.value = "";
    document.querySelector("#health_board").classList.add("hidden")
    document.querySelector("#time_board").classList.add("hidden");
    document.querySelector("#game_over").classList.remove("hidden");
    document.querySelector("#empty_bg_game_over").classList.remove("hidden");


    document.querySelector("#home_button").addEventListener("click", startGame);
    document.querySelector("#play_again_button").addEventListener("click", start);

    document.querySelector("#home_button").addEventListener("click", clicksound);
    document.querySelector("#play_again_button").addEventListener("click", clicksound);

    // stop all sprites movement and eventlisteners
    document.querySelector("#a_container1").classList = "";
    document.querySelector("#a_containerA").classList = "";
    document.querySelector("#a_container2").classList = "";
    document.querySelector("#a_containerB").classList = "";

    document.querySelector("#a_container1").removeEventListener("click", clickcow);
    document.querySelector("#a_containerA").removeEventListener("click", clickcowA);
    document.querySelector("#a_container2").removeEventListener("click", clickdevil_cow);
    document.querySelector("#a_containerB").removeEventListener("click", clickdevil_cowB);

    document.querySelector("#cow").removeEventListener("animationend", restart1);
    document.querySelector("#cowA").removeEventListener("animationend", restart3);
    document.querySelector("#devil_cow").removeEventListener("animationend", restart2);
    document.querySelector("#devil_cowB").removeEventListener("animationend", restart4);
}


function youWon() {
    console.log("youwon");

    // stop all sounds
    stopAllSounds();
    // play you won sound
    youwonsound();
    // show game over screen
    document.querySelector("#game_background").classList.add("hidden");
    document.querySelector("#score_board").classList.add("hidden");
    document.querySelector("#current_points").textContent = "";
    document.querySelector("#health_board").classList.value = "";
    document.querySelector("#health_board").classList.add("hidden")
    document.querySelector("#time_board").classList.add("hidden");
    document.querySelector("#game_over").classList.add("hidden");
    document.querySelector("#empty_bg_game_over").classList.add("hidden");
    document.querySelector("#you_won").classList.remove("hidden");
    document.querySelector("#empty_bg_you_won").classList.remove("hidden");

    document.querySelector("#home_button_won").addEventListener("click", startGame);
    document.querySelector("#play_again_button_won").addEventListener("click", start);
    document.querySelector("#home_button_won").addEventListener("click", clicksound);
    document.querySelector("#play_again_button_won").addEventListener("click", clicksound);


    // stop all sprites movement and eventlisteners
    document.querySelector("#a_container1").classList = "";
    document.querySelector("#a_containerA").classList = "";
    document.querySelector("#a_container2").classList = "";
    document.querySelector("#a_containerB").classList = "";

    document.querySelector("#a_container1").removeEventListener("click", clickcow);
    document.querySelector("#a_containerA").removeEventListener("click", clickcowA);
    document.querySelector("#a_container2").removeEventListener("click", clickdevil_cow);
    document.querySelector("#a_containerB").removeEventListener("click", clickdevil_cowB);

    document.querySelector("#cow").removeEventListener("animationend", restart1);
    document.querySelector("#cowA").removeEventListener("animationend", restart3);
    document.querySelector("#devil_cow").removeEventListener("animationend", restart2);
    document.querySelector("#devil_cowB").removeEventListener("animationend", restart4);
}
// SOUND
function clicksound() {
    console.log("click_sound");
    document.querySelector("#click_sound").play();
    document.querySelector("#click_sound").currentTime = 0;
    document.querySelector("#click_sound").volume = 0.3;
}

function playhappysound() {
    console.log("play_happy_sound");
    document.querySelector("#happy_sound").play();
    document.querySelector("#happy_sound").currentTime = 0;
    document.querySelector("#happy_sound").volume = 0.4;
}

function playevilsound() {
    console.log("play_evil_sound");
    document.querySelector("#evil_sound").play();
    document.querySelector("#evil_sound").currentTime = 0;
    document.querySelector("#evil_sound").volume = 0.5;
}

function playsong() {
    document.querySelector("#soundtrack").play();
    document.querySelector("#soundtrack").currentTime = 0
    document.querySelector("#soundtrack").volume = 0.3;
}

function gameoversound() {
    document.querySelector("#game_over_sound").play();
    document.querySelector("#game_over_sound").currentTime = 0;
    document.querySelector("#game_over_sound").volume = 0.4;

}

function youwonsound() {
    document.querySelector("#you_won_sound").play();
    document.querySelector("#you_won_sound").currentTime = 0
    document.querySelector("#you_won_sound").volume = 0.4;

}

function stopAllSounds() {
    // document.querySelector("#click_sound").pause();
    // document.querySelector("#click_sound").currentTime = 0;

    document.querySelector("#soundtrack").pause();
    document.querySelector("#soundtrack").currentTime = 0;

    document.querySelector("#happy_sound").pause();
    document.querySelector("#happy_sound").currentTime = 0;

    document.querySelector("#evil_sound").pause();
    document.querySelector("#evil_sound").currentTime = 0;

    document.querySelector("#game_over_sound").pause();
    document.querySelector("#game_over_sound").currentTime = 0

    document.querySelector("#you_won_sound").pause();
    document.querySelector("#you_won_sound").currentTime = 0

}

function muted() {
    document.querySelector("#click_sound").muted = false;
    document.querySelector("#soundtrack").muted = false;
    document.querySelector("#happy_sound").muted = false;
    document.querySelector("#evil_sound").muted = false;
    document.querySelector("#game_over_sound").muted = false;
    document.querySelector("#you_won_sound").muted = false;

}




function playAllSounds() {
    document.querySelector("#click_sound").muted = true;
    document.querySelector("#soundtrack").muted = true;
    document.querySelector("#happy_sound").muted = true;
    document.querySelector("#evil_sound").muted = true;
    document.querySelector("#game_over_sound").muted = true;
    document.querySelector("#you_won_sound").muted = true;

}