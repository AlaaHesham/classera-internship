const body = document.querySelector("body"),
    modeSwitch = document.querySelector(".toggle-switch"),
    modeText = document.querySelector(".mode-text"),
    searchIcon = document.querySelector(".bx-search"),
    ratio = document.querySelector(".card .ratio-container input[type='range']"),
    sidebarFields = document.querySelectorAll(".sidebar li a");


//------------ Area Chart -------------
var options = {
    series: [{
        name: 'series1',
        data: [20, 230, 190, 450, 380, 520, 300]
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

//--------------- Donut chart ---------------

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

//----------------- Bar chart ------------------

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

//--------------Dumbbell Chart----------------
function createChart(containerId, colors) {
var options = {
    series: [
    {
      data: [
        {
          x: '1',
          y: [4, 6]
        },
        {
          x: '2',
          y: [2, 8]
        },
        {
          x: '3',
          y: [0, 10]
        },
        {
          x: '4',
          y: [1, 9]
        },
        {
          x: '5',
          y: [3, 7]
        },
      ]
    }
  ],
    chart: {
    height: 180,
    width: 140,
    style: 'bold',
    type: 'rangeBar',
    zoom: {
      enabled: false
    },
    toolbar:{
        show: false
    },
  },
  plotOptions: {
    bar: {
      isDumbbell: true,
      columnWidth: 5,
      dumbbellColors: [[colors, colors]]
    }
  },
  legend: {
    show: false,
  },
  fill: {
    colors: colors,
  },
  grid: {
    xaxis: {
      lines: {
        show: false
      },
    },
    yaxis: {
      lines: {
        show: false
      },
    },
  },
  xaxis: {
    labels: {
      show: false
    },
    axisBorder: {
        show: false
    },
    axisTicks: {
        show: false
    }
  },
  yaxis: {
    labels: {
      show: false
    },
  },
  markers: {
    size: 5
  },
  tooltip:{
    enabled: false
  }
  };

  var chart = new ApexCharts(document.querySelector(containerId), options);
  chart.render();
}

var color1 = '#E91E63';
var color2 = '#4285f4';
var color3 = '#FF9800';
var color4 = '#53b659';
createChart('#chart4', color1);
createChart('#chart5', color2);
createChart('#chart6', color3);
createChart('#chart7', color4);


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



function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onresize = () => {
    positionRatioBox();
}

ratio.oninput = () => {
    positionRatioBox();
}

  
