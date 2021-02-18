function goToElement(elem, position) {
    var element = document.getElementsByClassName(elem)[0];
    element.scrollIntoView({behavior: "smooth", block: position, inline: "nearest"});
}

function updateScheduleSize() {
    var dayList1 = document.getElementById("day-list-1");
    var dayList2 = document.getElementById("day-list-2");

    if(window.innerWidth > 1325) {
        dayList2.style.height = dayList1.getBoundingClientRect().height + "px";
    } else {
        dayList2.style.height = "auto";
        console.log("small");
        
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