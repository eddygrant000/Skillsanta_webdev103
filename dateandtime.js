function digital_clock() {
    let data = new Date();
    let hours = data.getHours();
    let minutes = data.getMinutes();
    let seconds = data.getSeconds();
    let period = "AM";
    // let result = hours + ":" + minutes + ":" + seconds + " " + period;
    // document.getElementById("clock").innerText = result;
    // if (hours == 0){
    //     hours=12;
    // }

    if (hours == 0) hours = 12;

    if (hours > 12) {
        hours = hours - 12;
        period = "PM";
    }

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let result = `${hours}:${minutes}:${seconds} ${period}`;
    setInterval(digital_clock, 1000);
    document.getElementById("clock").innerText = result;

}

data = {
    name: "Sachin",
    age: 23
};



digital_clock()

// setInterval(digital_clock, 1000);