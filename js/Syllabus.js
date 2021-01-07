var Syllabus = [
    ["All Branch Syllabus","10-12-2020","https://drive.google.com/file/d/1QmgDJRkMgjfJLuTHEBtpWH1NAxsdr61Z/view?usp=sharing"],
    ["CH1401 Syllabus","11-12-2020","https://drive.google.com/file/d/1MFO1l5Kw924nOW74URU19M8Tjw1ht6EF/view?usp=sharing"],
    ["EC1401 Syllabus","10-12-2020","https://drive.google.com/file/d/1Jcjvpx1BfU36Bz39lIjdEUoOsDwuF_j5/view?usp=sharing"],
    ["HS1401 Syllabus", "10-12-2020", "https://drive.google.com/file/d/1dqPqMjFzm8JEXU4qQkwWoDF-sUDFYTsd/view?usp=sharing"],
    ["MA1401 Syllabus","10-12-2020","https://drive.google.com/file/d/1E4D8DuBf91Xh40qG1jDy87xa7adt0xlq/view?usp=sharing"],
]

function setSyllabus() {
    for (i = 0; i < Syllabus.length; i++) {
        var HTML1 = '<li><button class="lacture-card card hover" onclick="window.open('
        var HTML2 = '"><div class="card-img"><img src="logo.png" alt="logo"></div> <div class="card-text"><p>'
        var HTML3 = '</p><p class="date-text">'
        var HTML4 = '</p></div></button></li>'
        document.getElementById("Syllabus-ul").innerHTML += HTML1 + "'" + Syllabus[i][2] + "')" + HTML2 + Syllabus[i][0] + HTML3 + Syllabus[i][1] + HTML4;
    }
}
