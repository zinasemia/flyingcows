window.addEventListener("load", startGame);
let heart;
let points;
let timeLeft;

function startGame() {
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
}

function gameInstruction() {
    console.log("instruction");
    document.querySelector("#game_background").classList.add("hidden");
    document.querySelector("#empty_bg").classList.remove("hidden");
    document.querySelector("#instructions").classList.remove("hidden");
    document.querySelector("#play_button").addEventListener("click", start);
    document.querySelector("#exit_button").addEventListener("click", startGame);



}
// showTime and startTime
function showTime() {
    // console.log("showTime");
    document.querySelector("#time_board").textContent = "Time left:" + " " + timeLeft;
    timeLeft--;
    startTime();
}


function startTime() {
    // console.log("startTime");
    if (timeLeft >= 0) {
        setTimeout(showTime, 1000);
    } else {
        gameOver();
    }
}

function start() {
    heart = 4;
    points = 0;
    timeLeft = 20;

    showTime();
    console.log("start");
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
    // devil cow
    document.querySelector("#health_board").classList.add("hbg4");
    document.querySelector("#a_container2").addEventListener("click", clickdevil_cow);
    document.querySelector("#a_container2").addEventListener("animationiteration", restart2);
    addposition2();
    moveLeft();
}

function addposition1() {
    console.log("addposition1");
    document.querySelector("#a_container1").classList.add("position1");

}

// animation for the devil cow
function addposition2() {
    console.log("addposition2");
    document.querySelector("#a_container2").classList.add("position2");
}

function moveRight() {
    console.log("moveRight");
    document.querySelector("#a_container1").classList.add("moveRight1");

}
// animation for the devil cow
function moveLeft() {
    console.log("moveLeft");
    document.querySelector("#a_container2").classList.add("moveLeft1");
}


function clickcow() {
    console.log("clickcow");
    // pause cow
    document.querySelector("#a_container1").classList.add("paused");

    // rotate cow
    document.querySelector("#cow").classList.toggle("rotate");

    points++;
    document.querySelector("#current_points").textContent = points;
    // restart the cows position
    document.querySelector("#cow").addEventListener("animationend", restart1);

    if (points === 10) {
        youWon();
    }
}


// animation for the devil cow
function clickdevil_cow() {
    console.log("clickdevil_cow");
    // pause cow
    document.querySelector("#a_container2").classList.add("paused");
    // rotate cow
    document.querySelector("#devil_cow").classList.toggle("rotate");
    // health-indicator reacts
    heart--;
    // visible change in health-indicator
    // document.querySelector("#current_heart").textContent = heart;
    let bgimg = "hbg" + heart;
    console.log(bgimg);
    document.querySelector("#health_board").classList = "";
    document.querySelector("#health_board").classList.add(bgimg);

    document.querySelector("#devil_cow").addEventListener("animationend", restart2);
    if (heart === 1) {
        gameOver();
    }
}

function restart1() {
    console.log("restart");
    // delete the classes for container and cow
    document.querySelector("#a_container1").classList = "";

    document.querySelector("#cow").classList = "";

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
    console.log("restart");
    // delete the classes for container and cow
    document.querySelector("#a_container2").classList = "";
    document.querySelector("#devil_cow").classList = "";
    // jump a frame
    document.querySelector("#a_container2").offsetHeight;
    let rndMov = generateRandomNumber(3);
    console.log("Random movement generated:" + rndMov);
    document.querySelector("#a_container2").classList.add("moveLeft" + rndMov);
    let rndPos = generateRandomNumber(3);
    console.log("Random position generated:" + rndPos);
    document.querySelector("#a_container2").classList.add("position" + rndPos);

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
    // play game over sound
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


    // stop all sprites movement and eventlisteners
    document.querySelector("#a_container1").classList = "";
   
    document.querySelector("#a_container2").classList = "";

    document.querySelector("#a_container1").removeEventListener("click", clickcow);
   
    document.querySelector("#a_container2").removeEventListener("click", clickdevil_cow);

    document.querySelector("#cow").removeEventListener("animationend", restart1);
  
    document.querySelector("#devil_cow").removeEventListener("animationend", restart2);
}

function youWon() {
    console.log("youwon");
    // play game over sound
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


    // stop all sprites movement and eventlisteners
    document.querySelector("#a_container1").classList = "";
   
    document.querySelector("#a_container2").classList = "";

    document.querySelector("#a_container1").removeEventListener("click", clickcow);
 

    document.querySelector("#a_container2").removeEventListener("click", clickdevil_cow);

    document.querySelector("#cow").removeEventListener("animationend", restart1);
  
    document.querySelector("#devil_cow").removeEventListener("animationend", restart2);

}