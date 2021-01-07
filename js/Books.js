var Books = [
    ["All Subjects Books Name","11-12-2020","https://drive.google.com/file/d/1y9pzMin9Qbexqk-v0T98ybeXBxuYVMnv/view?usp=sharing"],
    ["Engineering Chemistry BY SHASHI CHAWLA","11-12-2020","https://drive.google.com/file/d/1lFNaYGKMjpXyhrKK2RRLttL3HXaUkBnh/view?usp=sharing"],
    ["ENGINEERING DRAWING BY N.D BHATT", "11-12-2020", "https://drive.google.com/file/d/16J1FLpt8I2u--whz491080qA4dmJf3cq/view?usp=sharing"],
    ["Enginnering mathematics By B.S. Gerwal", "11-12-2020", "https://drive.google.com/file/d/1Uim1RRvaAoD9Y8RBzWtatHM25JT6zw52/view?usp=sharing"],
    ["Professional Ethics and Human Values by R.S NAAGARAZAN","14-12-2020","https://drive.google.com/file/d/1H4y1ovcp_ZFL-a70IPLqGACwjFK-kMe3/view?usp=sharing"],
    ["Engineering ETHICS","11-12-2020","https://drive.google.com/file/d/1bCmj_O1W_GLaG_g5PpM79h--drIk7U9h/view?usp=sharing"],
    ["Programming In Ansi C_E. Balagurusamy","11-12-2020","https://drive.google.com/file/d/1jrodW-QTsPiwFkmMm8TVA3rnudVemttf/view?usp=sharing"]
]

function setBooks() {
    for (i = 0; i < Books.length; i++) {
        var HTML1 = '<li><button class="lacture-card card hover" onclick="window.open('
        var HTML2 = '"><div class="card-img"><img src="logo.png" alt="logo"></div> <div class="card-text"><p>'
        var HTML3 = '</p><p class="date-text">'
        var HTML4 = '</p></div></button></li>'
        document.getElementById("Books-ul").innerHTML += HTML1 + "'" + Books[i][2] + "')" + HTML2 + Books[i][0] + HTML3 + Books[i][1] + HTML4;
    }
}
