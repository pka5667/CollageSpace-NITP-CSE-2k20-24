var menuItems = [ "Books", "Notes", "Notices", "Syllabus"];

function setMenu() {
    var HTML1 = '<li class="nav-item"><button onclick="sideMenuClicked('
    for (i = 0; i < menuItems.length; i++) {
        document.getElementById("sidebar-ul").innerHTML += HTML1 + "'" + menuItems[i] + "')" + '">' + menuItems[i] + "</button></li>";
    }
}

setMenu();
