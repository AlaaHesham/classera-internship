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

// Dumbble Chart

var options4 = {
    series: [
        {
            data: [
                {
                    x: "1",
                    y: [3300, 4800]
                },
                {
                    x: "2",
                    y: [2300, 5700]
                },
                {
                    x: "3",
                    y: [900, 7100]
                },
                {
                    x: "4",
                    y: [1400, 6600]
                },
                {
                    x: "5",
                    y: [2800, 5200]
                }
            ]
        }
    ],
    chart: {
        height: 150,
        width: 110,
        type: 'rangeBar',
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        }
    },
    plotOptions: {
        bar: {
            isDumbbell: false,
            columnWidth: 4,
        }
    },
    legend: {
        show: false,
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: false,
    },
    xaxis: {
        labels: {
            show: false
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
        enabled: false
    }
};

const dumbcharts = document.querySelectorAll(".dumbchart");

const dumbchartColors = ['#E91E63', '#005AF0', '#FF9800', '#00a71d'];
let i = 0;
dumbcharts.forEach(dumbchart => {
    options4.colors = dumbchartColors[i++];
    var dumbbellChart = new ApexCharts(dumbchart, options4);
    dumbbellChart.render();
});
