function goToElement(elem, position) {
    var element = document.getElementsByClassName(elem)[0];
    element.scrollIntoView({behavior: "smooth", block: position, inline: "nearest"});
}

function scrollToElement(elem, position) {
    var element = document.getElementById(elem);
    element.scrollIntoView({behavior: "smooth", block: position, inline: "nearest"});
}

function updateScheduleSize() {
    var dayList1 = document.getElementById("day-list-1");
    var dayList2 = document.getElementById("day-list-2");

    if(window.innerWidth > 1325) {
        dayList2.style.height = dayList1.getBoundingClientRect().height + "px";
    } else {
        dayList2.style.height = "auto";
        
    }
}

function expandFAQ(FAQ) {
    
    var faqs = document.getElementsByClassName("faqs")[0];
    var answer = FAQ.getElementsByTagName("P")[0];
    var arrow = FAQ.getElementsByClassName("faq-arrow")[0];
    
    if(answer.style.display === "block") {
        
        arrow.style.transform = "rotate(-45deg)";
        answer.style.display = "none";
        FAQ.style.height = "auto";
        
    } else {
        setTimeout(function(){
            arrow.style.transform = "rotate(45deg)";
            answer.style.display = "block";
            FAQ.style.height = "auto";
        }, 100);
    }
}

function register() {
    window.open("https://forms.gle/AMaus8vxBcZ3mRm5A", "_blank");
}

function devpost() {
    window.open("https://atlashacks.devpost.com", "_blank");
}

function checkDimens(event) {
    console.log(window.innerWidth + " x " + window.innerHeight);
}

function devpostHover(i) {

    if(i == 0) {
        //document.getElementsByClassName("devpost-circle")[0].style.transform = "scale(1.3)";
        document.getElementsByClassName("devpost-icon")[0].src = "imgs/devpost-icon-white.png";
    }

    else if(i == 1) {
        document.getElementsByClassName("devpost-circle-2")[0].style.transform = "scale(1.3)";
        document.getElementsByClassName("devpost-icon-2")[0].src = "imgs/devpost-icon-white.png";
    }	
}

function devpostOffHover(i) {
    
    if(i == 0) {
        //document.getElementsByClassName("devpost-circle")[0].style.transform = "scale(1)";
        document.getElementsByClassName("devpost-icon")[0].src = "imgs/devpost-icon.png";
    }

    else if(i == 1) {
        document.getElementsByClassName("devpost-circle-2")[0].style.transform = "scale(1)";
        document.getElementsByClassName("devpost-icon-2")[0].src = "imgs/devpost-icon.png";
    }		
}

function isInViewport(elemClass) {
    const rect = document.getElementsByClassName(elemClass)[1].getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

function countUp(metricId, metric) {
    var elem = document.getElementById(metricId);
    var num = parseInt(elem.textContent);
    var counter = setInterval(function increment() {
        if(num >= metric) {
            clearInterval(counter);
        } else {
            num++;
            elem.textContent = num + "";
        }
        
    }, 2500/metric);
}

function countMetrics() {
    if(isInViewport("section-subtitle")) {
        countUp('participantsMetric', 200);
        countUp('submissionsMetric', 60);
        countUp('countriesMetric', 10);
    }
}

function openSchedule(row) {

    var extended = "";
    var compressed = "";

    if(window.innerWidth > 1300) {
        extended = "325px";
        compressed = "70px";
    } else if (window.innerWidth > 900){
        extended = Math.round(325 / window.innerWidth * 100) + 250 + "px";
        compressed = Math.round(70 / window.innerWidth * 100) + "px";
    } else if (window.innerWidth > 575){
        extended = Math.round(325 / window.innerWidth * 100) + 150 + "px";
        compressed = Math.round(70 / window.innerWidth * 100) + "px";
    } else if (window.innerWidth > 500){
        extended = Math.round(325 / window.innerWidth * 100) + 150 + "px";
        compressed = Math.round(70 / window.innerWidth * 100) + "px";
    } else {
        extended = Math.round(325 / window.innerWidth * 100) + 100 + "px";
        compressed = Math.round(70 / window.innerWidth * 100) + "px";
    }

    var n = 0;
    var rowContainer = row.parentNode;
    for (let i = 0; i < rowContainer.getElementsByClassName("schedule-row").length; i++) {
        var nRow = rowContainer.getElementsByClassName("schedule-row")[i];
        if(nRow === row) {
            n = i;
            break;
        }
    }

    var info = row.getElementsByClassName("schedule-info")[0];

    if(row.style.height != extended) {
        row.style.height = extended;
        setTimeout(function() { info.style.display = "block"; }, 100);

        if(n != rowContainer.getElementsByClassName("schedule-row").length - 1) {
            var time = rowContainer.getElementsByClassName("schedule-row")[n + 1].getElementsByClassName("schedule-time")[0];
            var event = rowContainer.getElementsByClassName("schedule-row")[n + 1].getElementsByClassName("schedule-event")[0];

            time.style.borderTopLeftRadius = "10px";
            event.style.borderTopRightRadius = "10px";
        } else {
            var time = rowContainer.getElementsByClassName("schedule-row")[n].getElementsByClassName("schedule-time")[0];
            var event = rowContainer.getElementsByClassName("schedule-row")[n].getElementsByClassName("schedule-event")[0];

            time.style.borderBottomLeftRadius = "0px";
            event.style.borderBottomRightRadius = "0px";
        }
        
    } else {
        row.style.height = compressed;
        setTimeout(function() { info.style.display = "none"; }, 100);

        if(n != rowContainer.getElementsByClassName("schedule-row").length - 1) {
            var time = rowContainer.getElementsByClassName("schedule-row")[n + 1].getElementsByClassName("schedule-time")[0];
            var event = rowContainer.getElementsByClassName("schedule-row")[n + 1].getElementsByClassName("schedule-event")[0];

            time.style.borderTopLeftRadius = "0px";
            event.style.borderTopRightRadius = "0px";
        } else {
            var time = rowContainer.getElementsByClassName("schedule-row")[n].getElementsByClassName("schedule-time")[0];
            var event = rowContainer.getElementsByClassName("schedule-row")[n].getElementsByClassName("schedule-event")[0];

            time.style.borderBottomLeftRadius = "10px";
            event.style.borderBottomRightRadius = "10px";
        }
    }
    
}

function openFAQ(FAQ) {
    var answerDiv = FAQ.getElementsByClassName("faq-answer")[0];
    if(answerDiv.style.display != "block") {
        answerDiv.style.display = "block";
    } else {
        answerDiv.style.display = "none";
    }
    
}