var mod = "Dessertcraft";
var version = "1.11.2";
var currentdivs = [document.getElementById(version + " " + mod)];

function changemcversion() {
    version = document.getElementById("mcversion").value;

    for(i = 0; i < currentdivs.length; i++) {
        currentdivs[i].style.display = "none";
    }

    if(document.getElementById(version + " " + mod) == null) {
        if(version == "All") {
            currentdivs = [];
            for(i = 0; i < document.getElementsByClassName(mod).length; i++) {
                currentdivs.push(document.getElementsByClassName(mod)[i]);
            }
        } else {
            currentdivs = [document.getElementById("errordiv")];
            document.getElementById("errortext").textContent = "No downloads exist for " + version + " " + mod;
        }
    } else {
        currentdivs = [document.getElementById(version + " " + mod)];
    }

    for(i = 0; i < currentdivs.length; i++) {
        currentdivs[i].style.display = "block";
    }
}

function changemod(newmod) {
    mod = newmod;

    for(i = 0; i < currentdivs.length; i++) {
        currentdivs[i].style.display = "none";
    }

    if(document.getElementById(version + " " + mod) == null) {
        if(version == "All") {
            currentdivs = [];
            for(i = 0; i < document.getElementsByClassName(mod).length; i++) {
                currentdivs.push(document.getElementsByClassName(mod)[i]);
            }
        } else {
            currentdivs = [document.getElementById("errordiv")];
            document.getElementById("errortext").textContent = "No downloads exist for " + version + " " + mod;
        }
    } else {
        currentdivs = [document.getElementById(version + " " + mod)];
    }

    for(i = 0; i < currentdivs.length; i++) {
        currentdivs[i].style.display = "block";
    }
}

function decodeurl() {
    var url = location.href;

    if(url.includes("?maps=true")) {
        showmaps();
    } else if(url.includes("?version=") && url.includes("&mod=")) {
        version = url.split("?version=")[1].split("&mod=")[0];
        document.getElementById("mcversion").value = version;
        changemod(url.split("&mod=")[1].replace("%20", " "));
        showmods();
    } else if(url.includes("?version=")) {
        document.getElementById("mcversion").value = url.split("?version=")[1];
        changemcversion();
        showmods();
    } else if(url.includes("?mod=")) {
        changemod(url.split("?mod=")[1].replace("%20", " "));
        showmods();
    }
}

function showmaps() {
    document.getElementById("maps").style.display = "block";
    document.getElementById("mods").style.display = "none";
}

function showmods() {
    document.getElementById("mods").style.display = "block";
    document.getElementById("maps").style.display = "none";
}
