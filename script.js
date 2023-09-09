const body = document.querySelector("body"),
    modeSwitch = document.querySelector(".toggle-switch"),
    modeText = document.querySelector(".mode-text"),
    searchIcon = document.querySelector(".bx-search"),
    ratio = document.querySelector(".card .ratio-container input[type='range']"),
    sidebarFields = document.querySelectorAll(".sidebar li a"),
    ticketTabs = document.querySelectorAll(".tickets .tab-list span"),
    pages = document.querySelectorAll(".main-body>div");

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

// ------ dropdown list --------
// brand
const brandSelector = document.querySelector("#brand .dropdown-selector"),
    brandArrow = document.querySelector("#brand .dropdown-selector i"),
    brandContent = document.querySelector("#brand .dropdown-content"),
    brandItems = document.querySelectorAll("#brand .item");

brandSelector.addEventListener("click", () => {
    brandContent.classList.toggle("show");

    if (brandContent.classList.contains("show"))
        rotateArrow(brandArrow, true);
    else
        rotateArrow(brandArrow, false);

});

brandItems.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector("#brand .dropdown-selector .selector-content").innerHTML = item.innerHTML;
        brandContent.classList.remove("show");
        rotateArrow(brandArrow, false);
    });
});

// module

const moduleSelector = document.querySelector("#module .dropdown-selector"),
    moduleArrow = document.querySelector("#module .dropdown-selector i"),
    moduleContent = document.querySelector("#module .dropdown-content"),
    moduleItems = document.querySelectorAll("#module .item");

moduleSelector.addEventListener("click", () => {
    moduleContent.classList.toggle("show");

    if (moduleContent.classList.contains("show"))
        rotateArrow(moduleArrow, true);
    else
        rotateArrow(moduleArrow, false);

});

moduleItems.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector("#module .dropdown-selector .selector-content").innerHTML = item.innerHTML;
        moduleContent.classList.remove("show");
        rotateArrow(moduleArrow, false);
    });
});

document.addEventListener("click", hideLists);


// ----------functions-----------
function rotateArrow(arrow, up) {
    if (up) {
        arrow.style.transform = "rotate(180deg)";
    }
    else {
        arrow.style.transform = "rotate(360deg)";
    }
}

function hideLists(event) {
    if (!(event.target.classList.contains("selector")
        || event.target.parentNode.classList.contains("selector")
        || event.target.parentNode.classList.contains("item-content"))) {
        moduleContent.classList.remove("show");
        brandContent.classList.remove("show");
        rotateArrow(brandArrow, false);
        rotateArrow(moduleArrow, false);
    }
}

