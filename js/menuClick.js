function sideMenuClicked(menuItem) {
    if (menuItem == "Home") {
        sideMenuClicked("Notices")
    }
    if (menuItem == "Lactures") {
        $(function() {
            $("#main-container").load("menuItems/Lactures.html");
        })
        var x = setInterval(() => {
            if (document.getElementById("lactures-ul") != "null") {
                clearInterval(x)
                document.getElementById("lactures-ul").innerHTML = "";
                setLactures(); //from lactures.js
            }
        }, 500);
    }
    if (menuItem == "Notices") {
        $(function() {
            $("#main-container").load("menuItems/Notice.html");
        })
        var x = setInterval(() => {
            if (document.getElementById("Notice-ul") != "null") {
                clearInterval(x)
                document.getElementById("Notice-ul").innerHTML = "";
                setNotice(); //from Notice.js
            }
        }, 500);
    }
    if (menuItem == "Books") {
        $(function() {
            $("#main-container").load("menuItems/Books.html");
        })
        var x = setInterval(() => {
            if (document.getElementById("Books-ul") != "null") {
                clearInterval(x)
                document.getElementById("Books-ul").innerHTML = "";
                setBooks(); //from Books.js
            }
        }, 500);
    }
    if (menuItem == "Notes") {
        $(function() {
            $("#main-container").load("menuItems/Notes.html");
        })
        var x = setInterval(() => {
            if (document.getElementById("Notes-ul") != "null") {
                clearInterval(x)
                document.getElementById("Notes-ul").innerHTML = "";
                setNotes(); //from Notes.js
            }
        }, 500);
    }
    if (menuItem == "Syllabus") {
        $(function() {
            $("#main-container").load("menuItems/Syllabus.html");
        })
        var x = setInterval(() => {
            if (document.getElementById("Syllabus-ul") != "null") {
                clearInterval(x)
                document.getElementById("Syllabus-ul").innerHTML = "";
                setSyllabus(); //from Syllabus.js
            }
        }, 500);
    }
}

sideMenuClicked("Notices")