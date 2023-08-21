const body = document.querySelector("body"),
    modeSwitch = document.querySelector(".toggle-switch"),
    modeText = document.querySelector(".mode-text"),
    searchIcon = document.querySelector(".bx-search"),
    ratio = document.querySelector(".card .ratio-container input[type='range']");


//------------ tickets overview/graph -------------
var options = {
    series: [{
        name: 'series1',
        data: [20, 220, 180, 450, 350, 500, 300]
    }],
    chart: {
        height: 350,
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
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
                position: 'bottom'
            }
        }
    }],
    dataLabels: {
        enabled: false
    },
    colors: ['#0db8ed', '#FF9800', '#E91E63', '#2E93fA'],
    legend: {
        show: false,
    },
    labels: ['Images Files', 'Voices Files', 'Videos Files', 'Grapes']
};

var donutChart = new ApexCharts(document.querySelector("#chart2"), options2);
donutChart.render();
// Events

modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    let textColor = "#ccc";
    if (body.classList.contains("dark")) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
        textColor = "#000";
    }
    chart.updateOptions({
        chart: {
            height: 350,
            type: 'area',
            foreColor: textColor,
            toolbar: {
                show: false
            }
        }
    });
});

searchIcon.onclick = () => {
    document.querySelector(".main-header input[type=text]").focus();
};

body.onload = () => {
    document.querySelector("a.dashboard-section").focus();
}


ratio.oninput = () => {
    let ratioBox = document.querySelector(".card .ratio-container output");
    ratioBox.innerText = ratio.value + "%";
    ratioBox.style.transform = "translateX(" + (2 * ratio.value - 15) + "px)";
}