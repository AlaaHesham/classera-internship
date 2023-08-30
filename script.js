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

sidebarFields.forEach(sidebarField => {
    sidebarField.onfocus = () => {
        let selectedField = sidebarField.innerText.toLowerCase();

        sidebarFields.forEach(sidebarField => {
            sidebarField.classList.remove("selected");
        });
        pages.forEach(page => {
            if (page.classList.contains(selectedField))
                page.classList.remove("inactive");
            else
                page.classList.add("inactive");
        });

        sidebarField.classList.add("selected");

        if (!document.getElementsByClassName("tickets")[0].classList.contains("inactive")) {
            let i = 0;
            dumbcharts.forEach(dumbchart => {
                options4.colors = dumbchartColors[i++];
                var dumbbellChart = new ApexCharts(dumbchart, options4);
                dumbbellChart.render();
            });
        }
    };
});

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

// Which page to display



