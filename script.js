const body = document.querySelector("body"),
    modeSwitch = document.querySelector(".toggle-switch"),
    modeText = document.querySelector(".mode-text"),
    searchIcon = document.querySelector(".bx-search"),
    ratio = document.querySelector(".card .ratio-container input[type='range']"),
    sidebarFields = document.querySelectorAll(".sidebar li a");


//------------ tickets overview/graph -------------
var options = {
    series: [{
        name: 'series1',
        data: [20, 220, 180, 450, 350, 500, 300]
    }],
    chart: {
        height: 270,
        type: 'area',
        foreColor: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
        toolbar: {
            show: false
        }
    },
    dataLabels: {
        enabled: false
    },

    stroke: {
        curve: 'smooth'
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    },

    grid: {
        show: false
    },

    theme: {
        mode: 'light',
        palette: 'palette1',
        monochrome: {
            enabled: false,
            color: '#4285f4',
            shadeTo: 'light',
            shadeIntensity: 0.1
        },
    },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

//------------------------ Donut chart ---------------------

var options2 = {
    series: [40, 22, 13, 25],
    chart: {
        type: 'donut',
        height: 220
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#0db8ed', '#FF9800', '#E91E63', '#4285f4'],
    legend: {
        show: false,
    },
    labels: ['Images Files', 'Voices Files', 'Videos Files', 'Documents Files'],
    grid: {
        show: false,
    },
    stroke: {
        show: true,
        colors: getComputedStyle(document.documentElement).getPropertyValue('--body-color'),
    }

};

var donutChart = new ApexCharts(document.querySelector("#chart2"), options2);
donutChart.render();

//------------------------ Bar chart ---------------------

var options3 = {
    series: [{
        name: 'Within One Day',
        data: [83, 44]
    }, {
        name: 'Within Two Days',
        data: [7, 39]
    }, {
        name: 'Within Four Days',
        data: [5, 11]
    }, {
        name: 'More Than Four Days',
        data: [4, 6]
    }],
    chart: {
        type: 'bar',
        height: 190,
        stacked: true,
        stackType: '100%',
        toolbar: {
            show: false,
        },
        foreColor: getComputedStyle(document.documentElement).getPropertyValue('--text-color'),
    },
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
    stroke: {
        width: 1,
        colors: [getComputedStyle(document.documentElement).getPropertyValue('--body-color')],
    },
    xaxis: {
        categories: ["Response Time", "Resolution Time"],
    },
    yaxis: {
        labels: {
            style: {
                fontSize: '1rem',
            }
        }
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return val + "K"
            }
        }
    },
    fill: {
        opacity: 1

    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    },
    colors: ['#4285f4', '#0db8ed', '#FF9800', '#E91E63'],

};

var barChart = new ApexCharts(document.querySelector("#chart3"), options3);
barChart.render();

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
        sidebarFields.forEach(sidebarField => {
            sidebarField.classList.remove("selected");
        });
        sidebarField.classList.add("selected");
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
