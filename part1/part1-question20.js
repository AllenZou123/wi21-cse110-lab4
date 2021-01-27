function spamEverySecond()
{
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

var intervalID = setInterval(spamEverySecond, 1000);
