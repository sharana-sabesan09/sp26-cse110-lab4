let logTime = () => {
    let d = new Date();
    // print time in format 10: 20 AM
    let time = d.toLocaleTimeString();
    console.log(time);
};

// calls every 1000 ms = 1 second
setInterval(logTime, 1000);

