const start = () => {
    setTimeout(function() {
        confetti.start()
    },1* 1000);
};
const stop = () => {
    setTimeout(function() {
        confetti.stop()
    },4*1000);
};

const stock = document.getElementById("nbr").value;
function tester(){
    randomInt = parseInt(Math.random() *10);    
    if(stock == randomInt) {
        alert("Bravo");
        start();
        stop();

    } else {
        alert("Try Again");
        console.log(randomInt);
    }
}