function toggleBranch() {
    document.getElementById("main").classList.toggle("hidden");
    document.getElementById("acme-branch").classList.toggle("hidden");
}

function toggleHq() {
    document.getElementById("main").classList.toggle("hidden");
    document.getElementById("acme-hq").classList.toggle("hidden");
}

function copy(string) {
    const el = document.createElement('textarea');
    el.value = string;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function removeNotifcation(notification) {
    var box = document.getElementById("notifications");
    box.removeChild(notification);
}

function createNotification(text) {
    var box = document.getElementById("notifications");
    var notification = document.createElement("div");

    notification.innerHTML = `<div class="notification">${text}</div>`;

    box.appendChild(notification);

    setTimeout(() => {
        removeNotifcation(notification);
    }, 1250)
}


function addListeners() {
    let networkDevices = document.getElementsByTagName("span");
    console.log(networkDevices);

    Object.keys(networkDevices).forEach(device => {
        networkDevices[device].addEventListener("click", () => {
            var information = networkDevices[device].getAttribute("data-tooltip") || "No Data Available";
            console.log(information);
            copy(information);
            createNotification("Information was copied to clipboard.")
        })
    })
}

addListeners();

function showSecurity() {
    if(document.getElementById("architecture-writeup").classList.contains("hidden")) {
        document.getElementById("security-writeup").classList.toggle("hidden");
    } else {
        document.getElementById("architecture-writeup").classList.toggle("hidden");
        showSecurity()
    }
}

function showArchitecture() {
    if(document.getElementById("security-writeup").classList.contains("hidden")) {
        document.getElementById("architecture-writeup").classList.toggle("hidden");
    } else {
        document.getElementById("security-writeup").classList.toggle("hidden");
        showArchitecture();
    }
}