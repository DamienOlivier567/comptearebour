
function compteARebours (hours, minutes, seconds){
    this.hoursTime = hours;
    this.minutesTime = minutes;
    this.secondsTime = seconds;

    this.chrono = function () {

        let hours = document.getElementById("heures");
        let minutes = document.getElementById("minutes");
        let seconds = document.getElementById("secondes");


        let ajoutHeures = this.hoursTime;
        hours.innerHTML = ajoutHeures;
        if (ajoutHeures < 9) {
            hours.innerHTML = "0" + ajoutHeures;
        }
        document.getElementById("hautHeures").addEventListener("click", function () {
            setTimeout(function () {
                if (ajoutHeures < 9) {
                    hours.innerHTML = "0" + (ajoutHeures += 1);
                } else if (10 >= ajoutHeures <= 100) {
                    hours.innerHTML = (ajoutHeures += 1);
                }

                if (ajoutHeures === 100) {
                    ajoutHeures = 0;
                    hours.innerHTML = "00";
                }
            }, 500);
        });

        let ajoutMinutes = this.minutesTime;
        minutes.innerHTML = ajoutMinutes;
        if (ajoutMinutes < 9) {
            minutes.innerHTML = "0" + ajoutMinutes;
        }

        document.getElementById("hautMinutes").addEventListener("click", function () {
            setTimeout(function () {
                if (ajoutMinutes < 9) {
                    minutes.innerHTML = "0" + (ajoutMinutes += 1);
                } else if (10 >= ajoutMinutes <= 60) {
                    minutes.innerHTML = (ajoutMinutes += 1);
                }

                if (ajoutMinutes === 60) {
                    ajoutMinutes = 0;
                    minutes.innerHTML = "00";
                }
            }, 500);
        });

        let ajoutSeconde = this.secondsTime;
        seconds.innerHTML = ajoutSeconde;
        if (ajoutSeconde < 9) {
            seconds.innerHTML = "0" + ajoutSeconde;
        }

        document.getElementById("hautSecondes").addEventListener("click", function () {
            setTimeout(function () {
                if (ajoutSeconde < 9) {
                    seconds.innerHTML = "0" + (ajoutSeconde += 1);
                } else if (10 >= ajoutSeconde <= 60) {
                    seconds.innerHTML = (ajoutSeconde += 1);
                }

                if (ajoutSeconde === 60) {
                    ajoutSeconde = 0;
                    seconds.innerHTML = "00";
                }
            }, 500);
        });

        document.getElementById("basHeures").addEventListener("click", function () {
            setTimeout(function () {
                if (ajoutHeures < 11) {
                    hours.innerHTML = "0" + (ajoutHeures -= 1);
                } else if (10 >= ajoutHeures <= 100) {
                    hours.innerHTML = (ajoutHeures -= 1);
                }

                if (ajoutHeures === -1) {
                    ajoutHeures = 99;
                    hours.innerHTML = "99";
                }
            }, 500);
        });


        document.getElementById("basMinutes").addEventListener("click", function () {
            setTimeout(function () {
                if (ajoutMinutes < 11) {
                    minutes.innerHTML = "0" + (ajoutMinutes -= 1);
                } else if (10 >= ajoutMinutes <= 60) {
                    minutes.innerHTML = (ajoutMinutes -= 1);
                }

                if (ajoutMinutes === -1) {
                    ajoutMinutes = 59;
                    minutes.innerHTML = "59";
                }
            }, 500);
        });


        document.getElementById("basSecondes").addEventListener("click", function () {
            setTimeout(function () {
                if (ajoutSeconde < 11) {
                    seconds.innerHTML = "0" + (ajoutSeconde -= 1);
                } else if (10 >= ajoutSeconde <= 60) {
                    seconds.innerHTML = (ajoutSeconde -= 1);
                }

                if (ajoutSeconde === -1) {
                    ajoutSeconde = 59;
                    seconds.innerHTML = "59";
                }
            }, 500);
        });

        let timeoutID;


        let countUp = function () {
            timeoutID = setInterval(function () {
                if (ajoutSeconde < 11) {
                    seconds.innerHTML = "0" + (ajoutSeconde -= 1);
                } else if (10 >= ajoutSeconde <= 60) {
                    seconds.innerHTML = (ajoutSeconde -= 1);
                }

                if (ajoutMinutes === 0 && ajoutHeures === 0 && ajoutSeconde === -1) {
                    ajoutSeconde = 0;
                    seconds.innerHTML = "00";
                }

                if (ajoutSeconde === -1) {
                    ajoutSeconde = 59;
                    seconds.innerHTML = "59";
                    if (ajoutMinutes < 11) {
                        minutes.innerHTML = "0" + (ajoutMinutes -= 1);
                    } else if (10 >= ajoutMinutes <= 60) {
                        minutes.innerHTML = (ajoutMinutes -= 1);
                    }

                    if (ajoutMinutes === -1) {
                        ajoutMinutes = 59;
                        minutes.innerHTML = "59";
                        if (ajoutHeures < 11) {
                            hours.innerHTML = "0" + (ajoutHeures -= 1);
                        } else if (10 >= ajoutHeures <= 100) {
                            hours.innerHTML = (ajoutHeures -= 1);
                        }

                        if (ajoutHeures === -1) {
                            ajoutHeures = 99;
                            hours.innerHTML = "99";
                        }
                    }
                }
            }, 1000);
        };


        document.getElementById("demarrer").addEventListener("click", function () {
            document.getElementById("reset").style.display = "block";
            document.getElementById("pause").style.display = "block";
            document.getElementById("continue").style.display = "none";
            document.getElementById("demarrer").style.display = "none";
            countUp();
        });


        document.getElementById("reset").onclick = function () {
            location.reload();
        };


        document.getElementById("pause").addEventListener("click", function () {
            document.getElementById("continue").style.display = "block";
            document.getElementById("pause").style.display = "none";
            clearTimeout(timeoutID);
        })


        document.getElementById("continue").addEventListener("click", function () {
            document.getElementById("continue").style.display = "none";
            document.getElementById("pause").style.display = "block";
            countUp();
        });
    }
}

let compteARebours1 = new compteARebours(0,1,0);
compteARebours1.chrono();

console.log(compteARebours1);