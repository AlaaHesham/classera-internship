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
    document.querySelector(".sidebar li a.dashboard-section").focus();
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
    brandItems = document.querySelectorAll("#brand .item"),
    brandSelectorContent = document.querySelector("#brand .dropdown-selector .selector-content");

brandSelector.addEventListener("click", () => {
    if (brandContent.classList.contains("show")) { // then we want to close it
        rotateArrow(brandArrow, false);
        brandContent.classList.remove("roll-down");
        brandContent.classList.add("roll-up");
        setTimeout(() => {
            brandContent.classList.toggle("show");
            brandContent.parentNode.classList.toggle("show");
        }, 900);
    }
    else {
        rotateArrow(brandArrow, true);
        brandContent.classList.remove("roll-up");
        brandContent.classList.add("roll-down");
        brandContent.classList.toggle("show");
        brandContent.parentNode.classList.toggle("show");
    }

});

brandItems.forEach(item => {
    item.addEventListener("click", () => {
        brandSelectorContent.innerHTML = item.innerHTML;
        brandContent.classList.remove("roll-down");
        brandContent.classList.add("roll-up");

        setTimeout(() => {
            brandContent.classList.remove("show");
            brandContent.parentNode.classList.remove("show");
        }, 900);

        rotateArrow(brandArrow, false);
    });
});

// module

const moduleSelector = document.querySelector("#module .dropdown-selector"),
    moduleArrow = document.querySelector("#module .dropdown-selector i"),
    moduleContent = document.querySelector("#module .dropdown-content"),
    moduleItems = document.querySelectorAll("#module .item"),
    moduleSelectorContent = document.querySelector("#module .dropdown-selector .selector-content");

moduleSelector.addEventListener("click", () => {
    if (moduleContent.classList.contains("show")) { // then we want to close it
        rotateArrow(moduleArrow, false);
        moduleContent.classList.remove("roll-down");
        moduleContent.classList.add("roll-up");
        setTimeout(() => {
            moduleContent.classList.toggle("show");
            moduleContent.parentNode.classList.toggle("show");
        }, 900);
    }
    else {
        rotateArrow(moduleArrow, true);
        moduleContent.classList.remove("roll-up");
        moduleContent.classList.add("roll-down");
        moduleContent.classList.toggle("show");
        moduleContent.parentNode.classList.toggle("show");
    }
});

moduleItems.forEach(item => {
    item.addEventListener("click", () => {
        moduleSelectorContent.innerHTML = item.innerHTML;
        moduleContent.classList.remove("roll-down");
        moduleContent.classList.add("roll-up");

        setTimeout(() => {
            moduleContent.classList.remove("show");
            moduleContent.parentNode.classList.remove("show");
        }, 900);

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

async function hideLists(event) {
    if (!(event.target.classList.contains("selector")
        || event.target.parentNode.classList.contains("selector")
        || event.target.parentNode.classList.contains("item-content"))
        && (moduleContent.classList.contains("show") || brandContent.classList.contains("show"))) {

        moduleContent.classList.remove("roll-down");
        moduleContent.classList.add("roll-up");
        brandContent.classList.remove("roll-down");
        brandContent.classList.add("roll-up");

        setTimeout(() => {
            moduleContent.classList.remove("show");
            brandContent.classList.remove("show");
            brandContent.parentNode.classList.remove("show");
            moduleContent.parentNode.classList.remove("show");
            moduleContent.classList.remove("roll-up");
        }, 900);


        rotateArrow(brandArrow, false);
        rotateArrow(moduleArrow, false);

    }
}

