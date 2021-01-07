var Notice = [
    ["Time Table CSE1 (UnOfficial)", "25-12-2020", "https://patnanit-my.sharepoint.com/:w:/g/personal/pulkita_ug20_cse_nitp_ac_in/EdpRyJ3T3hFPgjX3kT8-VRYBDLk7CCvpPbgJn3FB3SxU1w?e=CmqwNa"],
    ["Time Table CSE2 (UnOfficial)", "25-12-2020", "https://drive.google.com/file/d/1zIiZfzvPP9DoSqaM_jyP9GzdJOAL8kHY/view?usp=sharing"],
    ["Proteus for windows","Password is www.up4pc.com","https://drive.google.com/file/d/1a2p1_Hen014fTAMk4YmMxGQOxR274R9H/view?usp=sharing"],
    ["Academic calender for 1st year 2020","1-12-2020","https://drive.google.com/file/d/1qnXM0TXnrXjGQKZdc3kSxhBgKYkBjbpI/view?usp=sharing"],
    ["Time Table (Official)", "10-12-2020", "http://www.nitp.ac.in/uploads20/CSED_1stYear_Dec-March-2020-semester_08_12_2020.pdf"],
    ["Evaluation of marks 2020 sem1","21-10-2020","http://www.nitp.ac.in/uploads/evaluation-21.10.2020.pdf"]
]

function setNotice() {
    for (i = 0; i < Notice.length; i++) {
        var HTML1 = '<li><button class="lacture-card card hover" onclick="window.open('
        var HTML2 = '"><div class="card-img"><img src="logo.png" alt="logo"></div> <div class="card-text"><p>'
        var HTML3 = '</p><p class="date-text">'
        var HTML4 = '</p></div></button></li>'
        document.getElementById("Notice-ul").innerHTML += HTML1 + "'" + Notice[i][2] + "')" + HTML2 + Notice[i][0] + HTML3 + Notice[i][1] + HTML4;
    }
}
