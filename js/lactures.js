var lactures = [
    ["Lacture 2 Introduction to Electronics", "8-12-2020", "https://drive.google.com/file/d/1jcpYDi51k-9Rn9tvc2tPa38hpdK0nd0F/view"],
    ["ECL1401 Lab1","8-12-2020","https://drive.google.com/file/d/1JI-R9lXBu50mMHUnTYpTTlMgl2ZJ4hlw/view"],
    ["Lecture 1 Introduction to Electronics", "7-12-2020", "https://drive.google.com/file/d/1MVzDLSNXuQy3pLeF-Qe36ReDEXsbh1Rz/view"]
]

function setLactures() {
    for (i = 0; i < lactures.length; i++) {
        var HTML1 = '<li><button class="lacture-card card hover" onclick="window.open('
        var HTML2 = '"><div class="card-img"><img src="logo.png" alt="logo"></div> <div class="card-text"><p>'
        var HTML3 = '</p><p class="date-text">'
        var HTML4 = '</p></div></button></li>'
        document.getElementById("lactures-ul").innerHTML += HTML1 + "'" + lactures[i][2] + "')" + HTML2 + lactures[i][0] + HTML3 + lactures[i][1] + HTML4;
    }
}
