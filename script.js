const body = document.querySelector("body"),
    modeSwitch = document.querySelector(".toggle-switch"),
    modeText = document.querySelector(".mode-text"),
    searchIcon = document.querySelector(".bx-search"),
    ratio = document.querySelector(".card .ratio-container input[type='range']"),
    sidebarFields = document.querySelectorAll(".sidebar li a"),
    ticketTabs = document.querySelectorAll(".tickets .tab-list span"),
    pages = document.querySelectorAll(".main-body>div"),
    addTicketBtn = document.querySelector(".add-btn");

// ----------------------- Events ---------------------------

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    let textColor = "#ccc";
    let bodyColor = "#242526";

    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
        textColor = "#000";
        bodyColor = "#fff";
    }

    chart.updateOptions({
        chart: {
            foreColor: textColor,
        }
    });

    donutChart.updateOptions({
        stroke: {
            colors: bodyColor,
        }
    });

    barChart.updateOptions({
        chart: {
            foreColor: textColor,
        },
        stroke: {
            width: 1,
            colors: [bodyColor],
        }
    });
});

searchIcon.onclick = () => {
    document.querySelector(".main-header input[type=text]").focus();
};

function positionRatioBox() {
    let ratioBox = document.querySelector(".card .ratio-container output");
    ratioBox.innerText = ratio.value + "%";
    ratioBox.style.left = (ratio.offsetWidth / 100 * ratio.value - 15) + "px";
}

body.onload = async () => {
    while (ratio.value < 33) {
        ratio.value++;
        await delay(500 / 33);
        positionRatioBox();
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onresize = () => {
    positionRatioBox();
}

ratio.oninput = () => {
    positionRatioBox();
}

// -------------------------Tickets---------------------

ticketTabs.forEach(tab => {
    tab.onclick = () => {
        ticketTabs.forEach(tab => {
            tab.classList.remove("active");
        });
        tab.classList.add("active");
    }
});

// ------------ Responsiveness value in tickets table -----------

const divs = document.querySelectorAll(".responsiveness-content .range-container div");

divs.forEach(div => {
    div.style.width = div.getAttribute("value");
});

// ------------- Add Ticket Button ----------------

// addTicketBtn.addEventListener("click", () => {
// });


// ------ dropdown list --------
// brand
const brandSelector = document.querySelector("#brand .dropdown-selector"),
    brandArrow = document.querySelector("#brand .dropdown-selector i"),
    brandContent = document.querySelector("#brand .dropdown-content"),
    brandItems = document.querySelectorAll("#brand .item");

let brandListOpen = false;
brandSelector.addEventListener("click", () => {
    if (!brandListOpen) {   // open the list
        brandContent.style.display = "block";
        rotateArrow(brandArrow, true);
    } else {
        brandContent.style.display = "none";
        rotateArrow(brandArrow, false);
    }

    brandListOpen = !brandListOpen;
});

brandItems.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector("#brand .dropdown-selector .selector-content").innerHTML = item.innerHTML;
        brandContent.style.display = "none";
        rotateArrow(brandArrow, false);
        brandListOpen = false;
    });
});

// module

const moduleSelector = document.querySelector("#module .dropdown-selector"),
    moduleArrow = document.querySelector("#module .dropdown-selector i"),
    moduleContent = document.querySelector("#module .dropdown-content"),
    moduleItems = document.querySelectorAll("#module .item");

let moduleListOpen = false;
moduleSelector.addEventListener("click", () => {
    if (!moduleListOpen) {   // open the list
        moduleContent.style.display = "block";
        rotateArrow(moduleArrow, true);
    } else {
        moduleContent.style.display = "none";
        rotateArrow(moduleArrow, false);
    }

    moduleListOpen = !moduleListOpen;
});

moduleItems.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector("#module .dropdown-selector .selector-content").innerHTML = item.innerHTML;
        moduleContent.style.display = "none";
        rotateArrow(moduleArrow, false);
        moduleListOpen = false;
    });
});


// functions
function rotateArrow(arrow, up) {
    if (up) {
        arrow.style.transform = "rotate(180deg)";
    }
    else {
        arrow.style.transform = "rotate(360deg)";
    }
}


