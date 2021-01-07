var Notes = [
    ["Maths lacture1 Successive Diffrentiation","11-12-2020","https://drive.google.com/file/d/1wSYjfkQEXyG4E2UUVwZ9FJdYGde_V4sD/view?usp=sharing"],
    ["CS1401 L2 Notes ~By ⁨Shri Vaishnavi Vinnakota","10-12-2020","https://drive.google.com/file/d/1e7DnWJZM0KyhWfQ4IKHbfMb4yVFShxrQ/view?usp=sharing"],
    ["CS1401 L1 Notes ~By ⁨Shri Vaishnavi Vinnakota", "9-12-2020", "https://drive.google.com/file/d/1WwsmUhbp2BftvNkOhH0443Tt8mMJ3jqP/view?usp=sharing"]
]

function setNotes() {
    for (i = 0; i < Notes.length; i++) {
        var HTML1 = '<li><button class="lacture-card card hover" onclick="window.open('
        var HTML2 = '"><div class="card-img"><img src="logo.png" alt="logo"></div> <div class="card-text"><p>'
        var HTML3 = '</p><p class="date-text">'
        var HTML4 = '</p></div></button></li>'
        document.getElementById("Notes-ul").innerHTML += HTML1 + "'" + Notes[i][2] + "')" + HTML2 + Notes[i][0] + HTML3 + Notes[i][1] + HTML4;
    }
}
